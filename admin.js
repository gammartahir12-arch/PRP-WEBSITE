(function(){
const cfg=window.PRP_CONFIG||{};const $=id=>document.getElementById(id);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
if(!cfg.SUPABASE_URL){$('login').hidden=false;$('login').innerHTML='<p class="st err">Database not connected: fill in config.js first.</p>';return}
const sb=supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY);
const DEPTS=C.depts.map(d=>d[1].en);let rows=[],cur=null;
async function start(){const {data:{session}}=await sb.auth.getSession();session?load():($('login').hidden=false,$('dash').hidden=true,$('out').hidden=true)}
$('login').onsubmit=async e=>{e.preventDefault();$('lm').className='st';$('lm').textContent='';
 const {error}=await sb.auth.signInWithPassword({email:$('em').value.trim(),password:$('pw').value});
 if(error){$('lm').className='st err';$('lm').textContent='Sign-in failed. Check email and password.';return}load()};
$('out').onclick=async()=>{await sb.auth.signOut();rows=[];start()};
async function load(){
 const {data:me}=await sb.from('admins').select('role').maybeSingle();
 if(!me){await sb.auth.signOut();$('login').hidden=false;$('lm').className='st err';$('lm').textContent='This account is not an administrator.';return}
 const {data,error}=await sb.from('applications').select('*').order('created_at',{ascending:false}).range(0,4999);
 if(error){alert('Could not load applications: '+error.message);return}
 rows=data;$('login').hidden=true;$('dash').hidden=false;$('out').hidden=false;
 $('fd').innerHTML='<option value="">All departments</option>'+DEPTS.map(d=>`<option>${esc(d)}</option>`).join('');draw()}
const filtered=()=>{const q=$('q').value.toLowerCase(),s=$('fs').value,d=$('fd').value;
 return rows.filter(r=>(!s||r.status===s)&&(!d||r.preferred_department===d||r.assigned_department===d)&&(!q||[r.application_id,r.full_name,r.email,r.city,r.mobile].join(' ').toLowerCase().includes(q)))};
function draw(){
 const n=s=>rows.filter(r=>r.status===s).length;
 $('stats').innerHTML=[['Total applications',rows.length],['Pending',n('pending')],['Approved members',n('approved')],['Rejected',n('rejected')]].map(x=>`<div class="sc"><b>${x[1]}</b>${x[0]}</div>`).join('');
 const by={};rows.forEach(r=>{const k=r.preferred_department||'—';(by[k]=by[k]||{t:0,a:0}).t++;if(r.status==='approved')by[k].a++});
 const mx=Math.max(1,...Object.values(by).map(v=>v.t));
 $('bars').innerHTML=Object.keys(by).length?Object.entries(by).map(([k,v])=>`<div class="bar"><div>${esc(k)}</div><span><i style="width:${v.t/mx*100}%"></i></span><div>${v.t} (${v.a} ✓)</div></div>`).join(''):'No applications yet.';
 const f=filtered();$('cnt').textContent=f.length+' of '+rows.length+' shown';
 $('tb').innerHTML=f.map(r=>`<tr data-id="${esc(r.id)}"><td>${esc(r.application_id)}</td><td>${esc(r.full_name)}</td><td>${esc(r.city)}</td><td>${esc(r.preferred_department)}</td><td><span class="pill ${esc(r.status)}">${esc(r.status)}</span></td><td>${esc(r.assigned_department)}${r.position?' · '+esc(r.position):''}</td><td>${new Date(r.created_at).toLocaleDateString()}</td></tr>`).join('')}
['q','fs','fd'].forEach(i=>$(i).addEventListener('input',draw));
$('tb').onclick=e=>{const tr=e.target.closest('tr');if(!tr)return;cur=rows.find(r=>r.id===tr.dataset.id);open_()};
function open_(){const r=cur,L=[['Application ID','application_id'],['Name','full_name'],['Email','email'],['Mobile','mobile'],['City','city'],['Province','province'],['Education','education'],['Profession','profession'],['Skills','skills'],['Preferred dept.','preferred_department'],['Reason','reason'],['Applied','created_at']];
 $('dform').innerHTML=`<h2 style="margin:0;color:var(--g)">${esc(r.full_name)}</h2><dl>${L.map(x=>`<dt>${x[0]}</dt><dd>${esc(r[x[1]])}</dd>`).join('')}</dl>
 <div class="fg"><label for="s">Status</label><select id="s">${['pending','approved','rejected'].map(s=>`<option ${r.status===s?'selected':''}>${s}</option>`).join('')}</select></div>
 <div class="fg"><label for="ad">Assigned department</label><select id="ad"><option value="">— none —</option>${DEPTS.map(d=>`<option ${r.assigned_department===d?'selected':''}>${esc(d)}</option>`).join('')}</select></div>
 <div class="fg"><label for="po">Position</label><input id="po" value="${esc(r.position)}" placeholder="e.g. Member, Coordinator, Department Head"></div>
 <div class="acts" style="margin:0"><button class="btn gold" id="sv" type="button">Save</button><button class="btn" value="cancel" style="background:#fff;color:var(--g)">Close</button></div><div id="dm" class="st" role="alert"></div>`;
 $('sv').onclick=save;$('dlg').showModal()}
async function save(){const u={status:$('s').value,assigned_department:$('ad').value||null,position:$('po').value.trim()||null,updated_at:new Date().toISOString()};
 const {error}=await sb.from('applications').update(u).eq('id',cur.id);
 if(error){$('dm').className='st err';$('dm').textContent='Save failed: '+error.message;return}
 Object.assign(cur,u);draw();$('dm').className='st ok';$('dm').textContent='Saved.'}
$('csv').onclick=()=>{const cols=['application_id','full_name','email','mobile','city','province','education','profession','skills','preferred_department','reason','status','assigned_department','position','created_at'];
 const q=v=>{v=String(v==null?'':v);if(/^[=+\-@]/.test(v))v="'"+v;return '"'+v.replace(/"/g,'""')+'"'};
 const csv='\ufeff'+[cols.join(',')].concat(filtered().map(r=>cols.map(c=>q(r[c])).join(','))).join('\r\n');
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.download='prp-members-'+new Date().toISOString().slice(0,10)+'.csv';a.click()};
start();
})();
