/* ALL EDITABLE TEXT LIVES HERE. Each item has en (English) and ur (Urdu).
   To publish the official manifesto: fill in "d" for each point and the page removes the "Awaiting official text" badge. */
const B=(en,ur)=>({en,ur});
const C={
 name:B('Pakistan Reform Party','پاکستان ریفارم پارٹی'),
 motto:B('UNITY • REFORM • PROGRESS','اتحاد • اصلاح • ترقی'),
 slogan:B('آج کی اصلاح، کل کی خوشحالی','آج کی اصلاح، کل کی خوشحالی'),
 intro:B('Pakistan Reform Party (PRP) works for meaningful institutional reform, public welfare and national unity.','پاکستان ریفارم پارٹی (پی آر پی) بامعنی ادارہ جاتی اصلاحات، عوامی فلاح اور قومی اتحاد کے لیے کام کرتی ہے۔'),
 vision:B('A developed, united, educated, prosperous and just Pakistan.','ایک ترقی یافتہ، متحد، تعلیم یافتہ، خوشحال اور منصفانہ پاکستان۔'),
 mission:B('To work towards meaningful institutional, economic and social reforms, improve public welfare and strengthen national unity.','بامعنی ادارہ جاتی، معاشی اور سماجی اصلاحات کے لیے کام کرنا، عوامی فلاح کو بہتر بنانا اور قومی اتحاد کو مضبوط کرنا۔'),
 founding:{title:'The Founding Statement of Pakistan Reform Party',en:[
 "I founded the Pakistan Reform Party because I believe that Pakistan has enormous potential, but its progress is being held back by deep-rooted corruption, institutional weaknesses, injustice, economic difficulties and failures in governance.",
 "I have observed serious problems in the existing Pakistani system. A system in which corruption undermines public trust, opportunities are not equally accessible, ordinary citizens struggle for basic facilities, and institutions often fail to deliver the services people deserve.",
 "I do not believe that Pakistan lacks talented people, resources, history or potential. What we need is meaningful reform, responsible leadership, strong institutions and a system that serves the people rather than the interests of a privileged few.",
 "I believe that healthcare should be accessible, education should create opportunities, employment should provide dignity, justice should be available to everyone, and public institutions should be accountable.",
 "I also believe that a nation cannot build its future while neglecting its history, cultural identity, languages and historical heritage.",
 "Pakistan Reform Party was founded with the vision of contributing to a system based on transparency, accountability, equality, justice, national unity and public welfare.",
 "Our purpose is not simply to criticize the existing system. Our purpose is to propose reforms, develop solutions and work towards a better institutional and social structure.",
 "We envision a Pakistan where institutions are stronger than individuals, laws apply equally to everyone, opportunities are accessible to all, and national progress benefits ordinary citizens.",
 "This is why Pakistan Reform Party exists.",
 "This is our beginning. This is our vision. This is our commitment to reform."
],ur:null}, // ur: add an array of Urdu paragraphs when the Urdu text is approved
 contact:{email:'[email to be added]',phone:'[phone to be added]',address:'[address to be added]'},
 nav:[['home',B('Home','ہوم')],['about',B('About PRP','تعارف')],['why',B('Why PRP?','پی آر پی کیوں؟')],['vision',B('Vision & Mission','وژن اور مشن')],['manifesto',B('Manifesto','منشور')],['structure',B('Structure','تنظیمی ڈھانچہ')],['departments',B('Departments','شعبہ جات')],['heritage',B('Heritage','تاریخ و ورثہ')],['join',B('Join PRP','رکنیت')],['contact',B('Contact','رابطہ')]],
 manifesto:[
  {i:'shield-check',t:B('Corruption-Free Governance'),d:B('Establish transparent institutions, strengthen accountability and promote responsible governance.')},
  {i:'heart-pulse',t:B('Quality Healthcare for Everyone'),d:B('Work towards accessible, affordable and quality healthcare facilities for every citizen.')},
  {i:'graduation-cap',t:B('Education and Knowledge'),d:B('Promote accessible, modern and quality education, scientific research and educational opportunities.')},
  {i:'briefcase',t:B('Employment and Economic Development'),d:B('Create opportunities for dignified employment, entrepreneurship, vocational training and economic growth.')},
  {i:'scale',t:B('Justice and Equality'),d:B("Promote equal application of law, accessible justice and protection of citizens' fundamental rights.")},
  {i:'home',t:B('Poverty Reduction and Social Welfare'),d:B('Develop social protection initiatives and improve access to essential public services.')},
  {i:'rocket',t:B('Youth Empowerment and National Development'),d:B('Encourage youth participation, leadership, skills development and constructive civic engagement.')},
  {i:'users',t:B('National Unity and Cultural Harmony'),d:B("Respect Pakistan's diverse communities, regional languages, traditions and cultural identities.")},
  {i:'leaf',t:B('Environmental Protection and Sustainable Development'),d:B('Promote environmental conservation, clean surroundings and responsible use of natural resources.')},
  {i:'landmark',t:B('National History, Heritage and Architecture'),d:B('Establish dedicated institutions for historical research, preservation of monuments, architecture, languages and cultural heritage.')}
  // Points 1-6 titles are DRAFT headings; replace t and add d:B('official English text','اردو متن'). tp:1 shows the pending badge.
 ],
 why:[
  ['landmark',B('Institutional reform','ادارہ جاتی اصلاحات')],
  ['heart-pulse',B('Public welfare and social development','عوامی فلاح اور سماجی ترقی')],
  ['graduation-cap',B('Better healthcare and education','بہتر صحت اور تعلیم')],
  ['briefcase',B('Employment and economic opportunity','روزگار اور معاشی مواقع')],
  ['search',B('Transparency and accountability','شفافیت اور احتساب')],
  ['users',B('National unity and equal rights','قومی اتحاد اور مساوی حقوق')],
  ['scroll',B("Protection of Pakistan's history, heritage and cultural identity",'پاکستان کی تاریخ، ورثے اور ثقافتی شناخت کا تحفظ')]
 ],
 heritage:[
  ['scroll',B('National History and Research Institute','قومی ادارہ برائے تاریخ و تحقیق'),B('Research, archives and public education on the nation’s history.','قوم کی تاریخ پر تحقیق، ریکارڈ اور عوامی آگاہی۔')],
  ['landmark',B('National Architecture and Heritage Authority','قومی اتھارٹی برائے فنِ تعمیر و ورثہ'),B('Protection and conservation of historical monuments and heritage sites.','تاریخی آثار اور ورثے کے مقامات کا تحفظ۔')],
  ['languages',B('National Languages and Cultural Institute','قومی ادارہ برائے زبانیں و ثقافت'),B('Promotion of national and regional languages, cultural traditions and arts.','قومی و علاقائی زبانوں، ثقافتی روایات اور فنون کا فروغ۔')]
 ],
 structure:[ // DRAFT - replace with your real structure
  [B('Founder / Chairperson','بانی / چیئرپرسن'),B('Overall leadership','مجموعی قیادت')],
  [B('Central Leadership','مرکزی قیادت'),B('Policy and strategy','پالیسی اور حکمتِ عملی')],
  [B('Department Heads','شعبہ جاتی سربراہان'),B('One head per department','ہر شعبے کا ایک سربراہ')],
  [B('Provincial and City Coordinators','صوبائی اور شہری کوآرڈینیٹرز'),B('Local organisation','مقامی تنظیم')],
  [B('Members and Volunteers','اراکین اور رضاکار'),B('Everyone who joins PRP','پی آر پی میں شامل ہر فرد')]
 ],
 depts:[ // DRAFT list - edit freely; also feeds the registration form
  ['heart-pulse',B('Health','صحت')],['graduation-cap',B('Education','تعلیم')],['briefcase',B('Youth and Employment','نوجوان و روزگار')],
  ['trending-up',B('Economy','معیشت')],['search',B('Transparency and Accountability','شفافیت و احتساب')],['scale',B('Law and Justice','قانون و انصاف')],
  ['landmark',B('Heritage and Culture','ورثہ و ثقافت')],['megaphone',B('Media and Outreach','میڈیا و رابطہ عامہ')]
 ],
 provinces:['Punjab','Sindh','Khyber Pakhtunkhwa','Balochistan','Islamabad Capital Territory','Gilgit-Baltistan','Azad Jammu & Kashmir'],
 ui:{
  pending:B('Awaiting official text','سرکاری متن کا انتظار'),
  mpend:B('Official description to be added by the party.','سرکاری وضاحت پارٹی کی جانب سے شامل کی جائے گی۔'),
  fpend:B('The original founding statement will be published here once supplied.','بانی بیان یہاں شائع کیا جائے گا۔'),
  vision:B('Our Vision for Pakistan','پاکستان کے لیے ہمارا وژن'),mission:B('Our Mission','ہمارا مشن'),
  tenpt:B('Our Ten-Point Manifesto','ہمارا دس نکاتی منشور'),why:B('Why Pakistan Reform Party?','پاکستان ریفارم پارٹی کیوں؟'),
  join:B('Join Pakistan Reform Party','پاکستان ریفارم پارٹی میں شامل ہوں'),joinp:B('Register as a member and help build a united, reformed Pakistan.','رکنیت کے لیے رجسٹر ہوں اور متحد، اصلاح شدہ پاکستان کی تعمیر میں حصہ لیں۔'),
  register:B('Register now','ابھی رجسٹر کریں'),read:B('Read the manifesto','منشور پڑھیں'),
  about:B('About PRP','پی آر پی کا تعارف'),structure:B('Organizational Structure','تنظیمی ڈھانچہ'),depts:B('Departments','شعبہ جات'),
  heritage:B('National History and Cultural Heritage','قومی تاریخ اور ثقافتی ورثہ'),
  heritagep:B('A nation that protects its monuments, languages, traditions and history protects its identity. PRP is committed to preserving them for future generations.','جو قوم اپنے آثار، زبانوں، روایات اور تاریخ کا تحفظ کرتی ہے وہ اپنی شناخت کا تحفظ کرتی ہے۔ پی آر پی انہیں آنے والی نسلوں کے لیے محفوظ رکھنے کے لیے پرعزم ہے۔'),
  draft:B('Draft structure: to be confirmed by the party.','ابتدائی ڈھانچہ: پارٹی کی تصدیق باقی ہے۔'),
  contact:B('Contact Us','ہم سے رابطہ'),send:B('Send message','پیغام بھیجیں'),
  f:{full_name:B('Full name','پورا نام'),email:B('Email','ای میل'),mobile:B('Mobile number','موبائل نمبر'),city:B('City','شہر'),province:B('Province','صوبہ'),education:B('Education','تعلیم'),profession:B('Profession','پیشہ'),skills:B('Skills','مہارتیں'),preferred_department:B('Preferred department','پسندیدہ شعبہ'),reason:B('Reason for joining','شمولیت کی وجہ'),name:B('Name','نام'),message:B('Message','پیغام')},
  consent:B('I consent to PRP storing and using my information to process my membership application.','میں اپنی معلومات کو رکنیت کی درخواست پر کارروائی کے لیے محفوظ اور استعمال کرنے کی اجازت دیتا/دیتی ہوں۔'),
  submit:B('Submit application','درخواست جمع کرائیں'),select:B('Select…','منتخب کریں…'),
  ok:B('Application received. Your application ID is','درخواست موصول ہو گئی۔ آپ کا درخواست نمبر ہے'),keep:B('Please save this ID.','براہ کرم یہ نمبر محفوظ رکھیں۔'),
  msgok:B('Message sent. Thank you.','پیغام بھیج دیا گیا۔ شکریہ۔'),
  noconf:B('The website database is not connected yet (config.js is empty), so nothing was saved.','ویب سائٹ کا ڈیٹا بیس ابھی منسلک نہیں (config.js خالی ہے)، اس لیے کچھ محفوظ نہیں ہوا۔'),
  bad:B('Please correct the highlighted fields.','براہ کرم نمایاں خانے درست کریں۔'),fail:B('Could not submit. Please try again.','جمع نہیں ہو سکا۔ دوبارہ کوشش کریں۔'),
  rights:B('© Pakistan Reform Party. All rights reserved.','© پاکستان ریفارم پارٹی۔ جملہ حقوق محفوظ ہیں۔')
 }
};
