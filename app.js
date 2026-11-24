(function(){
const cfg=window.PRP_CONFIG||{};
const sb=(cfg.SUPABASE_URL&&window.supabase)?supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY):null;
let lang=localStorage.getItem('prp-lang')||'en';
const L=o=>o[lang]||o.en, U=C.ui;
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ic=n=>`<i data-lucide="${n}"></i>`;
const sec=(h,b,c='')=>`<section class="sec ${c}"><div class="wrap">${h?`<h2 class="h2">${L(h)}</h2>`:''}${b}</div></section>`;
const band=(t,s)=>`<div class="band"><div class="wrap"><h1>${L(t)}</h1>${s?`<p>${L(s)}</p>`:''}</div></div>`;
const badge=()=>`<span class="tag">${L(U.pending)}</span>`;
const btn=(h,t,c='gold')=>`<a class="btn ${c}" href="${h}">${L(t)}</a>`;
const founding=short=>{const F=C.founding;if(!F)return `<div class="empty">${ic('file-text')}<p>${L(U.fpend)}</p>${badge()}</div>`;
 const ps=F[lang]||F.en,own=!F[lang]&&lang==='ur',n=ps.length;
 const body=(short?ps.slice(0,1):ps).map((p,i)=>`<p class="${!short&&i>=n-2?'kc':''}">${esc(p)}</p>`).join('');
 return `<div class="fs" ${own?'lang="en" dir="ltr"':''}><h3>${esc(F.title)}</h3>${body}${short?`<a class="btn gold" href="#/why">${lang==='ur'?'مکمل بیان پڑھیں':'Read the full statement'}</a>`:''}</div>`};
const mCards=()=>`<div class="grid g3">${C.manifesto.map((m,i)=>`<article class="card mc"><div class="ico">${ic(m.i)}</div><span class="num" aria-hidden="true">${i+1}</span><h3>${L(m.t)}</h3><p>${m.d?L(m.d):L(U.mpend)}</p>${m.d&&!m.tp?'':badge()}</article>`).join('')}</div>`;
const whyCards=()=>`<div class="grid g4">${C.why.map(w=>`<article class="card"><div class="ico">${ic(w[0])}</div><h3>${L(w[1])}</h3></article>`).join('')}</div>`;
const vm=()=>`<div class="grid g2"><article class="card big"><div class="ico">${ic('eye')}</div><h3>${L(U.vision)}</h3><p>${L(C.vision)}</p></article><article class="card big"><div class="ico">${ic('target')}</div><h3>${L(U.mission)}</h3><p>${L(C.mission)}</p></article></div>`;
const cta=()=>`<section class="sec cta"><div class="wrap"><h2>${L(U.join)}</h2><p>${L(U.joinp)}</p>${btn('#/join',U.register)}</div></section>`;
const R={
 home:()=>`<section class="hero"><div class="wrap hg"><div><p class="motto">${L(C.motto)}</p><h1>${L(C.name)}</h1><p class="ur2" lang="ur" dir="rtl">${C.name.ur}</p><p class="slogan" lang="ur" dir="rtl">${C.slogan.ur}</p><p class="lead">${L(C.intro)}</p><div class="acts">${btn('#/join',U.register)}${btn('#/manifesto',U.read,'ghost')}</div></div><div class="hl"><img src="assets/logo.png" alt="Pakistan Reform Party white dove emblem"></div></div></section>`
  +sec(U.vision,vm())+sec(U.tenpt,mCards(),'alt')+sec(U.why,founding(true)+whyCards())+cta(),
 about:()=>band(U.about,C.intro)+sec(null,`<div class="grid g2"><div>${founding(true)}</div>${vm()}</div>`)+cta(),
 why:()=>band(U.why)+sec(null,founding()+whyCards())+cta(),
 vision:()=>band({en:'Vision and Mission',ur:'وژن اور مشن'})+sec(null,vm())+cta(),
 manifesto:()=>band(U.tenpt)+sec(null,mCards())+cta(),
 structure:()=>band(U.structure,U.draft)+sec(null,`<ol class="tiers">${C.structure.map(s=>`<li><h3>${L(s[0])}</h3><p>${L(s[1])}</p></li>`).join('')}</ol>`)+cta(),
 departments:()=>band(U.depts,U.draft)+sec(null,`<div class="grid g4">${C.depts.map(d=>`<article class="card"><div class="ico">${ic(d[0])}</div><h3>${L(d[1])}</h3></article>`).join('')}</div>`)+cta(),
 heritage:()=>band(U.heritage,U.heritagep)+sec(null,`<div class="grid g3">${C.heritage.map(h=>`<article class="card big"><div class="ico">${ic(h[0])}</div><h3>${L(h[1])}</h3><p>${L(h[2])}</p></article>`).join('')}</div>`)+cta(),
 join:()=>band(U.join,U.joinp)+sec(null,`<form id="jf" class="form" novalidate>${fld('full_name')}${fld('email','email')}${fld('mobile','tel')}${fld('city')}${sel('province',C.provinces.map(p=>[p,p]))}${fld('education')}${fld('profession')}${fld('skills','textarea')}${sel('preferred_department',C.depts.map(d=>[d[1].en,L(d[1])]))}${fld('reason','textarea')}<label class="chk"><input type="checkbox" name="consent" required> <span>${L(U.consent)}</span></label><button class="btn gold" type="submit">${L(U.submit)}</button><div id="st" role="alert" aria-live="polite"></div></form>`,'narrow'),
 contact:()=>band(U.contact)+sec(null,`<div class="grid g2"><div class="card big"><h3>${L(U.contact)}</h3><p>${ic('mail')} ${esc(C.contact.email)}</p><p>${ic('phone')} ${esc(C.contact.phone)}</p><p>${ic('map-pin')} ${esc(C.contact.address)}</p></div><form id="cf" class="form" novalidate>${fld('name')}${fld('email','email')}${fld('message','textarea')}<button class="btn gold" type="submit">${L(U.send)}</button><div id="st" role="alert" aria-live="polite"></div></form></div>`)
};
function fld(n,t='text'){const l=L(U.f[n]);return `<div class="fg"><label for="${n}">${l}</label>${t==='textarea'?`<textarea id="${n}" name="${n}" rows="3"></textarea>`:`<input id="${n}" name="${n}" type="${t}" autocomplete="${{full_name:'name',email:'email',mobile:'tel',city:'address-level2'}[n]||'off'}">`}</div>`}
function sel(n,o){return `<div class="fg"><label for="${n}">${L(U.f[n])}</label><select id="${n}" name="${n}"><option value="">${L(U.select)}</option>${o.map(x=>`<option value="${esc(x[0])}">${esc(x[1])}</option>`).join('')}</select></div>`}
function route(){let r=(location.hash.replace(/^#\/?/,'')||'home');if(!R[r])r='home';
 $('app').innerHTML=R[r]();document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('on',a.dataset.r===r));
 $('nav').classList.remove('open');$('mb').setAttribute('aria-expanded','false');lucide.createIcons();window.scrollTo(0,0);
 document.title=(r==='home'?'':L(C.nav.find(n=>n[0]===r)[1])+' | ')+L(C.name)+' (PRP)'}
function chrome(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ur'?'rtl':'ltr';
 $('bn1').textContent=L(C.name);$('bn2').textContent=lang==='ur'?C.motto.ur:C.name.ur;$('lang').textContent=lang==='ur'?'English':'اردو';
 $('nav').innerHTML=C.nav.map(n=>`<a data-r="${n[0]}" href="#/${n[0]}" class="${n[0]==='join'?'jn':''}">${L(n[1])}</a>`).join('');
 $('ftr').innerHTML=`<div class="wrap fg3"><div><img src="assets/logo.png" alt="PRP emblem" class="fl"><h3>${L(C.name)}</h3><p class="motto">${L(C.motto)}</p><p lang="ur" dir="rtl" class="slogan2">${C.slogan.ur}</p></div><div><h4>${L(U.about)}</h4><div class="fn">${C.nav.map(n=>`<a href="#/${n[0]}">${L(n[1])}</a>`).join('')}</div></div></div><p class="rights">${L(U.rights)}</p>`}
const $=id=>document.getElementById(id);
$('lang').onclick=()=>{lang=lang==='ur'?'en':'ur';localStorage.setItem('prp-lang',lang);chrome();route()};
$('mb').onclick=()=>{const o=$('nav').classList.toggle('open');$('mb').setAttribute('aria-expanded',o)};
window.addEventListener('hashchange',route);

document.addEventListener('submit',async e=>{
 const f=e.target;if(f.id!=='jf'&&f.id!=='cf')return;e.preventDefault();
 const st=$('st'),d=Object.fromEntries(new FormData(f).entries()),bad=[];
 const need=f.id==='jf'?['full_name','email','mobile','city','province']:['name','email','message'];
 need.forEach(k=>{if(!(d[k]||'').trim())bad.push(k)});
 if(d.email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email))bad.push('email');
 if(f.id==='jf'){if(d.mobile&&!/^[+0-9 -]{10,16}$/.test(d.mobile))bad.push('mobile');d.consent=!!f.consent.checked;if(!d.consent)bad.push('consent')}
 f.querySelectorAll('[aria-invalid]').forEach(x=>x.removeAttribute('aria-invalid'));
 bad.forEach(k=>{const x=f.elements[k];x&&x.setAttribute('aria-invalid','true')});
 if(bad.length){st.className='st err';st.textContent=L(U.bad);f.elements[bad[0]].focus();return}
 if(!sb){st.className='st err';st.textContent=L(U.noconf);return}
 const b=f.querySelector('button');b.disabled=true;
 const {data,error}=f.id==='jf'?await sb.rpc('submit_application',{p:d}):await sb.rpc('submit_message',{p:d});
 b.disabled=false;
 if(error){console.error(error);st.className='st err';st.textContent=L(U.fail);return}
 st.className='st ok';st.innerHTML=f.id==='jf'?`${L(U.ok)} <b class="aid">${esc(data)}</b>. ${L(U.keep)}`:esc(L(U.msgok));f.reset()});
chrome();route();
})();
