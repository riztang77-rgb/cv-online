/* =========================================================
   KODENUSA — app.js
   Versi sederhana: seluruh JavaScript digabung menjadi 1 file.
   CSS tetap terpisah di css/style.css.
========================================================= */

/* ================= DATA ================= */
// =====================================================
// DATA WEBSITE
// Semua data contoh disimpan di sini agar mudah diedit.
// =====================================================
const PROVINCES = [
['Aceh',1800,5.55,95.32,8,'M. Rizky'],['Sumatera Utara',3200,2.12,99.55,12,'Dimas'],['Sumatera Barat',2100,-0.95,100.35,8,'Fikri'],['Riau',1900,0.51,101.45,7,'Andi'],['Jambi',1500,-1.61,103.61,6,'Raka'],['Sumatera Selatan',2500,-2.99,104.76,9,'Yoga'],['Bengkulu',1100,-3.79,102.26,4,'Arif'],['Lampung',2200,-5.43,105.26,8,'Nanda'],['Kepulauan Bangka Belitung',900,-2.13,106.11,3,'Fajar'],['Kepulauan Riau',1000,3.95,108.14,4,'Rian'],['DKI Jakarta',6200,-6.20,106.82,22,'Ahmad Fauzan'],['Jawa Barat',5600,-6.91,107.61,25,'Larasati Putri'],['Jawa Tengah',4700,-7.15,110.14,20,'Bimo Nugroho'],['DI Yogyakarta',2300,-7.80,110.36,9,'Sari Wulandari'],['Jawa Timur',5200,-7.25,112.75,24,'Rizal'],['Banten',3100,-6.12,106.15,13,'Dani'],['Bali',1800,-8.41,115.19,7,'Kadek Surya'],['Nusa Tenggara Barat',1300,-8.65,117.36,5,'Fauzi'],['Nusa Tenggara Timur',1200,-10.18,123.60,5,'Yosef'],['Kalimantan Barat',1500,-0.03,109.34,6,'Bayu'],['Kalimantan Tengah',1200,-2.21,113.92,5,'Ilham'],['Kalimantan Selatan',1600,-3.32,114.59,7,'Hendra'],['Kalimantan Timur',1900,0.54,116.42,8,'Rendi'],['Kalimantan Utara',700,3.07,116.04,3,'Aldi'],['Sulawesi Utara',1100,1.49,124.84,4,'Robby'],['Gorontalo',600,0.54,123.06,3,'Amin'],['Sulawesi Tengah',1000,-0.90,119.87,4,'Faris'],['Sulawesi Barat',650,-2.67,118.89,3,'Naufal'],['Sulawesi Selatan',2400,-5.14,119.41,10,'Akbar'],['Sulawesi Tenggara',900,-4.00,122.51,4,'Wahyu'],['Maluku',650,-3.70,128.18,3,'Rafi'],['Maluku Utara',500,0.79,127.38,2,'Iqbal'],['Papua Barat',500,-0.86,134.06,2,'Yanto'],['Papua Barat Daya',350,-1.34,130.90,2,'Dani'],['Papua',600,-4.27,137.00,3,'Eko'],['Papua Tengah',300,-3.50,136.00,2,'Rizki'],['Papua Pegunungan',250,-4.10,138.70,1,'Jefri'],['Papua Selatan',280,-7.50,139.50,2,'Beni']
].map((p,i)=>({n:p[0],members:p[1],lat:p[2],lng:p[3],cabang:p[4],koor:p[5]}));

const SKILLS=['Kewirausahaan','Teknologi','Desain','Pendidikan','Sosial','Fotografi'];
const MEMBERS=[
{name:'Fajar Ramadhan',id:'KN-1001',prov:'Jawa Barat',city:'Bandung',since:'2025',bio:'Aktif di bidang teknologi dan kewirausahaan.',skills:['Teknologi','Kewirausahaan']},
{name:'Kadek Surya',id:'KN-1002',prov:'Bali',city:'Denpasar',since:'2025',bio:'Suka kegiatan komunitas dan fotografi.',skills:['Fotografi','Sosial']},
{name:'Nadia Putri',id:'KN-1003',prov:'DKI Jakarta',city:'Jakarta',since:'2026',bio:'Relawan pendidikan.',skills:['Pendidikan','Sosial']},
{name:'Rizky Maulana',id:'KN-1004',prov:'Jawa Tengah',city:'Semarang',since:'2026',bio:'Pengembang web pemula.',skills:['Teknologi','Desain']},
{name:'Aulia Rahma',id:'KN-1005',prov:'Jawa Timur',city:'Surabaya',since:'2025',bio:'Penggerak kegiatan sosial.',skills:['Sosial','Pendidikan']},
{name:'Bima Pratama',id:'KN-1006',prov:'Sumatera Utara',city:'Medan',since:'2025',bio:'Pelaku UMKM dan mentor bisnis.',skills:['Kewirausahaan']},
{name:'Siti Nabila',id:'KN-1007',prov:'Sulawesi Selatan',city:'Makassar',since:'2026',bio:'Desainer dan fotografer komunitas.',skills:['Desain','Fotografi']},
{name:'Arman Hadi',id:'KN-1008',prov:'Kalimantan Timur',city:'Samarinda',since:'2026',bio:'Aktif dalam kegiatan teknologi.',skills:['Teknologi','Sosial']}
];

const avatar=name=>`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=152A52&color=fff&size=160`;
const img=(text)=>`https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80`;
const NEWS=[
{id:1,cat:'Pengumuman',title:'Komunitas Nusantara Membuka Program Kolaborasi Nasional',excerpt:'Program baru untuk memperkuat jejaring antarwilayah.',date:'15 Agu 2026',views:1240,img:img()},
{id:2,cat:'Artikel',title:'Membangun Komunitas Digital yang Sehat',excerpt:'Tips sederhana membuat ruang digital yang aktif dan nyaman.',date:'12 Agu 2026',views:980,img:img()},
{id:3,cat:'Prestasi',title:'Anggota Jawa Barat Raih Prestasi Nasional',excerpt:'Capaian membanggakan dari anggota komunitas.',date:'08 Agu 2026',views:870,img:img()},
{id:4,cat:'Berita',title:'Cabang Baru Hadir di Kalimantan',excerpt:'Jaringan komunitas terus bertambah.',date:'05 Agu 2026',views:720,img:img()},
{id:5,cat:'Artikel',title:'Kolaborasi Lintas Provinsi',excerpt:'Ide dan kegiatan dapat berkembang melalui kolaborasi.',date:'01 Agu 2026',views:610,img:img()}
];
const today=new Date();
const EVENTS=[
{id:1,title:'Webinar Kewirausahaan Digital',date:new Date(2026,7,20,19),loc:'Online · Zoom',peserta:90,kuota:120,done:false,img:img(),desc:'Webinar membahas strategi memulai usaha digital untuk anggota komunitas.'},
{id:2,title:'Temu Nasional Komunitas',date:new Date(2026,7,28,9),loc:'Jakarta Pusat',peserta:210,kuota:300,done:false,img:img(),desc:'Pertemuan nasional dan forum kolaborasi antarwilayah.'},
{id:3,title:'Pelatihan Coding Pemula',date:new Date(2026,8,5,10),loc:'Bandung',peserta:48,kuota:60,done:false,img:img(),desc:'Belajar dasar HTML, CSS, dan JavaScript.'},
{id:4,title:'Bakti Sosial Nusantara',date:new Date(2026,6,12,8),loc:'Yogyakarta',peserta:100,kuota:100,done:true,img:img(),desc:'Kegiatan sosial bersama anggota.'}
];
const POSTS=[
{id:1,author:'Fajar Ramadhan',prov:'Jawa Barat',avatar:avatar('Fajar Ramadhan'),time:'2 jam lalu',cat:'Teknologi',text:'Ada yang mau diskusi tentang #WebDevelopment dan @Kadek?',likes:24,liked:false,bookmark:false,comments:[{a:'Kadek Surya',t:'Gas, saya ikut!'}],poll:null},
{id:2,author:'Kadek Surya',prov:'Bali',avatar:avatar('Kadek Surya'),time:'5 jam lalu',cat:'Event',text:'Menurut kalian kegiatan nasional berikutnya sebaiknya diadakan di mana?',likes:31,liked:false,bookmark:false,comments:[],poll:{voted:false,options:[{t:'Jawa',v:12},{t:'Sumatera',v:8},{t:'Kalimantan',v:5},{t:'Sulawesi',v:6}]}},
{id:3,author:'Nadia Putri',prov:'DKI Jakarta',avatar:avatar('Nadia Putri'),time:'Kemarin',cat:'Umum',text:'Selamat datang anggota baru. Semoga kita bisa saling membantu.',likes:18,liked:false,bookmark:false,comments:[],poll:null}
];
const ACHIEVEMENTS=[{prov:'Jawa Barat',title:'Juara Nasional Coding',name:'Rizky Maulana',desc:'Meraih posisi terbaik pada kompetisi coding nasional.',img:avatar('Rizky Maulana')},{prov:'Bali',title:'Relawan Inspiratif',name:'Kadek Surya',desc:'Aktif menggerakkan kegiatan sosial.',img:avatar('Kadek Surya')},{prov:'DKI Jakarta',title:'Inovator Muda',name:'Nadia Putri',desc:'Membuat program edukasi komunitas.',img:avatar('Nadia Putri')}];
const GALLERY=[{img:img(),cap:'Temu Komunitas',daerah:'Jawa Barat',type:'foto'},{img:img(),cap:'Kegiatan Sosial',daerah:'Bali',type:'foto'},{img:img(),cap:'Pelatihan Digital',daerah:'DKI Jakarta',type:'video'},{img:img(),cap:'Forum Wilayah',daerah:'Jawa Tengah',type:'foto'},{img:img(),cap:'Gathering',daerah:'Sulawesi Selatan',type:'foto'}];
const DOCS=[{name:'AD/ART Komunitas Nusantara',cat:'Organisasi',icon:'fa-file-pdf'},{name:'SK Kepengurusan 2026',cat:'Kepengurusan',icon:'fa-file-lines'},{name:'Formulir Pendaftaran Anggota',cat:'Keanggotaan',icon:'fa-file-signature'}];
const newsViewState={};
const followState={};
const bookmarkMember={};
let currentUser=null;

/* ================= CORE ================= */
// =====================================================
// UTILITAS
// =====================================================
function timeAgo(){return 'baru saja';}
function fmtDate(d){return d.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'});}
function toggleDropdown(id){
 document.querySelectorAll('.dropdown-panel').forEach(p=>{if(p.id!==id)p.classList.remove('show');});
 const el=document.getElementById(id); if(el)el.classList.toggle('show');
}
document.addEventListener('click',e=>{if(!e.target.closest('.nc-actions'))document.querySelectorAll('.dropdown-panel').forEach(p=>p.classList.remove('show'));});
// =====================================================
// NAVIGASI HALAMAN
// =====================================================
function showPage(name){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 const target=document.getElementById('page-'+name); if(target)target.classList.add('active');
 document.querySelectorAll('.nc-links a').forEach(a=>a.classList.toggle('active',a.dataset.page===name));
 window.scrollTo({top:0,behavior:'auto'});
 const nav=document.getElementById('navLinks'); if(nav)nav.classList.remove('mobileShow');
 if(window.AOS) setTimeout(()=>AOS.refreshHard(),80);
 if(name==='wilayah' && window.map) setTimeout(()=>map.invalidateSize(),150);
 if(name==='dash-anggota') renderMemberDashboardLists();
 if(name==='dash-admin') renderAdminTables();
}
function showDashPanel(id,el){
 const parent=el.closest('.dash-side');
 if(!parent)return;
 parent.querySelectorAll('a').forEach(a=>a.classList.remove('active')); el.classList.add('active');
 const container=parent.nextElementSibling; container.querySelectorAll('.dash-panel').forEach(p=>p.classList.remove('active'));
 const panel=document.getElementById(id); if(panel)panel.classList.add('active');
}
// =====================================================
// MODE TERANG / GELAP
// =====================================================
function toggleTheme(){
 const html=document.documentElement;
 const dark=html.getAttribute('data-theme')==='dark';
 html.setAttribute('data-theme',dark?'light':'dark');
 const btn=document.getElementById('themeBtn'); if(btn)btn.innerHTML=dark?'<i class="fa-solid fa-moon"></i>':'<i class="fa-solid fa-sun"></i>';
 const sw=document.getElementById('darkSwitch'); if(sw)sw.checked=!dark;
}

/* ================= AUTH ================= */
// =====================================================
// LOGIN, DAFTAR, PROFIL
// =====================================================
function renderAuthArea(){
 const el=document.getElementById('authArea'); if(!el)return;
 if(currentUser){
  el.innerHTML=`<div class="dropdown" style="position:relative"><button class="icon-btn" onclick="toggleDropdown('userPanel')"><img src="${avatar(currentUser.name)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover"></button><div class="dropdown-panel" id="userPanel"><div style="padding:10px"><b>${currentUser.name}</b><div style="font-size:.72rem;color:var(--text-mut)">${currentUser.role==='admin'?'Administrator':'Anggota'} · ${currentUser.prov}</div></div><a href="#" class="notif-item" onclick="showPage('${currentUser.role==='admin'?'dash-admin':'dash-anggota'}');return false"><i class="fa-solid fa-gauge"></i> Dashboard</a><a href="#" class="notif-item" onclick="openMyCard();return false"><i class="fa-regular fa-id-card"></i> Kartu Anggota</a><a href="#" class="notif-item" onclick="logoutUser();return false"><i class="fa-solid fa-right-from-bracket"></i> Keluar</a></div></div>`;
 }else{
  el.innerHTML='<button class="btn-nc btn-ghost-nc" onclick="openLogin()">Masuk</button><button class="btn-nc btn-primary-nc" onclick="openRegister()">Daftar</button>';
 }
}
function openLogin(){
 Swal.fire({title:'Masuk ke Akun',html:'<input id="swal-email" class="swal2-input" placeholder="Email"><input id="swal-pass" type="password" class="swal2-input" placeholder="Kata Sandi"><select id="swal-role" class="swal2-input"><option value="member">Masuk sebagai Anggota</option><option value="admin">Masuk sebagai Admin (demo)</option></select>',confirmButtonText:'Masuk',confirmButtonColor:'#C1272D',showCancelButton:true,cancelButtonText:'Batal',preConfirm:()=>{const email=document.getElementById('swal-email').value.trim();const role=document.getElementById('swal-role').value;if(!email){Swal.showValidationMessage('Email wajib diisi');return false;}return {email,role};}}).then(r=>{if(r.isConfirmed)loginAs(r.value.role,r.value.email.split('@')[0]);});
}
function openRegister(){
 Swal.fire({title:'Gabung Komunitas Nusantara',html:`<input id="swal-nama" class="swal2-input" placeholder="Nama Lengkap"><input id="swal-email2" class="swal2-input" placeholder="Email"><select id="swal-prov" class="swal2-input">${PROVINCES.map(p=>`<option>${p.n}</option>`).join('')}</select>`,confirmButtonText:'Daftar',confirmButtonColor:'#152A52',showCancelButton:true,cancelButtonText:'Batal',preConfirm:()=>{const nama=document.getElementById('swal-nama').value.trim();const prov=document.getElementById('swal-prov').value;if(!nama){Swal.showValidationMessage('Nama wajib diisi');return false;}return {nama,prov};}}).then(r=>{if(r.isConfirmed){currentUser={name:r.value.nama,role:'member',prov:r.value.prov,id:'KN-'+(1000+Math.floor(Math.random()*8999)),city:'-',bio:'Anggota baru komunitas.',skills:[]};renderAuthArea();fillProfileForm();Swal.fire({icon:'success',title:'Pendaftaran Berhasil!',text:`Selamat datang, ${currentUser.name}. ID: ${currentUser.id}`,confirmButtonColor:'#152A52'});}});
}
function loginAs(role,namePart){
 const sample=role==='admin'?{name:'Admin Pusat',prov:'DKI Jakarta'}:{name:namePart.charAt(0).toUpperCase()+namePart.slice(1),prov:MEMBERS[Math.floor(Math.random()*MEMBERS.length)].prov};
 currentUser={name:sample.name,role,prov:sample.prov,id:role==='admin'?'ADM-0001':'KN-'+(1000+Math.floor(Math.random()*8999)),city:'-',bio:'Anggota aktif komunitas nusantara.',skills:['Kewirausahaan']};
 renderAuthArea();fillProfileForm();renderAdminTables();Swal.fire({icon:'success',title:'Berhasil Masuk',text:`Halo, ${currentUser.name}!`,timer:1400,showConfirmButton:false});
}
function logoutUser(){currentUser=null;renderAuthArea();showPage('beranda');Swal.fire({icon:'info',title:'Kamu telah keluar',timer:1100,showConfirmButton:false});}
function requireLogin(cb){if(currentUser){cb();return;}Swal.fire({icon:'warning',title:'Masuk diperlukan',text:'Silakan masuk atau daftar terlebih dahulu.',confirmButtonColor:'#152A52'}).then(r=>{if(r.isConfirmed)openLogin();});}
function fillProfileForm(){if(!currentUser)return;const n=document.getElementById('profNama');const b=document.getElementById('profBio');const l=document.getElementById('profLoc');const s=document.getElementById('profSkill');if(n)n.value=currentUser.name;if(b)b.value=currentUser.bio;if(l)l.value=currentUser.prov;if(s)s.value=currentUser.skills.join(', ');}
function saveProfile(){if(!currentUser)return;currentUser.name=document.getElementById('profNama').value;currentUser.bio=document.getElementById('profBio').value;currentUser.prov=document.getElementById('profLoc').value;currentUser.skills=document.getElementById('profSkill').value.split(',').map(x=>x.trim()).filter(Boolean);renderAuthArea();Swal.fire({icon:'success',title:'Profil diperbarui',timer:1200,showConfirmButton:false});}
function openMyCard(){const u=currentUser||{name:'Tamu Nusantara',id:'KN-0000',prov:'-',since:'2026'};Swal.fire({title:'Kartu Anggota Digital',html:`<div class="digicard" style="margin:auto;text-align:left"><b>${u.name}</b><div style="font-size:.75rem;margin-top:4px">${u.prov}</div><div class="mono" style="margin-top:25px">${u.id}</div><div style="font-size:.65rem;margin-top:8px">Anggota Sejak ${u.since||'2026'}</div></div>`,confirmButtonText:'Tutup',confirmButtonColor:'#152A52'});}

/* ================= PAGES ================= */
// =====================================================
// BERANDA
// =====================================================
function animateCounter(id,target,suffix=''){const el=document.getElementById(id);if(!el)return;let n=0;const step=Math.max(1,Math.ceil(target/50));const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer);}el.textContent=n.toLocaleString('id-ID')+suffix;},25);}
function initHeroStats(){animateCounter('statAnggota',PROVINCES.reduce((a,p)=>a+p.members,0),'+');animateCounter('statProvinsi',38);animateCounter('statEvent',EVENTS.length*14);animateCounter('statPost',POSTS.length*87);const activities=['Fajar Ramadhan baru saja bergabung dari Jawa Barat','Kadek Surya memposting foto baru di forum','Webinar Kewirausahaan mencapai 90% kuota','Cabang Pontianak menambahkan anggota baru'];let i=0;setInterval(()=>{i=(i+1)%activities.length;const el=document.getElementById('liveActivity');if(el)el.textContent=activities[i];},3200);}
function buildNetworkSvg(){const svg=document.getElementById('networkSvg');if(!svg)return;let h='';const pts=[];for(let i=0;i<16;i++){const a=i/16*Math.PI*2;pts.push({x:200+Math.cos(a)*150*(.6+Math.random()*.4),y:210+Math.sin(a)*150*(.6+Math.random()*.4)});}pts.forEach((p,i)=>{const q=pts[(i+3)%pts.length];h+=`<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="rgba(199,151,42,.28)"/>`});pts.forEach(p=>h+=`<circle cx="${p.x}" cy="${p.y}" r="4" fill="#C7972A"><animate attributeName="opacity" values=".3;1;.3" dur="2s" repeatCount="indefinite"/></circle>`);h+='<circle cx="200" cy="210" r="8" fill="#C1272D"><animate attributeName="r" values="6;11;6" dur="2s" repeatCount="indefinite"/></circle>';svg.innerHTML=h;}
function renderNewsSlider(){const wrap=document.getElementById('newsSliderWrap');if(!wrap)return;wrap.innerHTML=NEWS.map(n=>`<div class="swiper-slide"><div class="card-nc" style="padding:0;overflow:hidden" onclick="openNewsDetail(${n.id})"><img src="${n.img}" style="width:100%;height:190px;object-fit:cover"><div style="padding:18px"><span class="tag-pill red">${n.cat}</span><h4>${n.title}</h4><small>${n.date} · ${n.views} dilihat</small></div></div></div>`).join('');if(window.Swiper)new Swiper('.newsSwiper',{slidesPerView:1.15,spaceBetween:18,breakpoints:{768:{slidesPerView:2.3},1200:{slidesPerView:3.2}},pagination:{el:'.newsSwiper .swiper-pagination',clickable:true}});}
function renderPulauChart(){if(!window.Chart)return;const groups={'Jawa':['DKI Jakarta','Jawa Barat','Banten','Jawa Tengah','DI Yogyakarta','Jawa Timur'],'Sumatera':['Aceh','Sumatera Utara','Sumatera Barat','Riau','Kepulauan Riau','Jambi','Sumatera Selatan','Bangka Belitung','Bengkulu','Lampung'],'Kalimantan':['Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Timur','Kalimantan Utara'],'Sulawesi':['Sulawesi Utara','Gorontalo','Sulawesi Tengah','Sulawesi Barat','Sulawesi Selatan','Sulawesi Tenggara'],'Bali & Nusra':['Bali','Nusa Tenggara Barat','Nusa Tenggara Timur'],'Maluku & Papua':['Maluku','Maluku Utara','Papua Barat','Papua Barat Daya','Papua','Papua Tengah','Papua Pegunungan','Papua Selatan']};const labels=Object.keys(groups),data=labels.map(g=>groups[g].reduce((a,n)=>a+(PROVINCES.find(p=>p.n===n)?.members||0),0)),colors=['#152A52','#C1272D','#C7972A','#1E8E5A','#24406F','#8a3ffc'];new Chart(document.getElementById('chartPulau'),{type:'doughnut',data:{labels,datasets:[{data,backgroundColor:colors,borderWidth:0}]},options:{plugins:{legend:{display:false}},cutout:'62%'}});document.getElementById('pulauLegend').innerHTML=labels.map((x,i)=>`<div style="display:flex;gap:8px;margin-bottom:8px"><span style="width:12px;height:12px;background:${colors[i]};border-radius:3px"></span>${x}<b style="margin-left:auto">${data[i].toLocaleString('id-ID')}</b></div>`).join('');}
// =====================================================
// ANGGOTA
// =====================================================
function fillMemberFilters(){const p=document.getElementById('memberProvFilter');const s=document.getElementById('memberSkillFilter');if(p)PROVINCES.forEach(x=>p.insertAdjacentHTML('beforeend',`<option value="${x.n}">${x.n}</option>`));if(s)SKILLS.forEach(x=>s.insertAdjacentHTML('beforeend',`<option value="${x}">${x}</option>`));}
function renderMembers(){const q=(document.getElementById('memberSearch')?.value||'').toLowerCase();const prov=document.getElementById('memberProvFilter')?.value||'';const skill=document.getElementById('memberSkillFilter')?.value||'';const list=MEMBERS.filter(m=>(m.name.toLowerCase().includes(q)||m.id.toLowerCase().includes(q))&&(!prov||m.prov===prov)&&(!skill||m.skills.includes(skill)));const grid=document.getElementById('memberGrid');if(!grid)return;grid.innerHTML=list.map(m=>`<div class="col-6 col-md-4 col-lg-3"><div class="card-nc member-card"><i class="fa-regular fa-bookmark bookmark-ico ${bookmarkMember[m.id]?'active':''}" style="position:absolute;top:14px;right:14px" onclick="toggleBookmarkMember('${m.id}',this)"></i><div class="avatar-wrap"><img src="${avatar(m.name)}"></div><h4>${m.name}</h4><div class="idnum mono">${m.id}</div><div class="loc"><i class="fa-solid fa-location-dot"></i> ${m.city}, ${m.prov}</div><div>${m.skills.map(s=>`<span class="skill-chip">${s}</span>`).join('')}</div><button class="follow-btn ${followState[m.id]?'following':''}" onclick="toggleFollow('${m.id}',this)">${followState[m.id]?'✓ Mengikuti':'+ Ikuti'}</button><button class="btn-nc btn-ghost-nc" style="width:100%;margin-top:8px" onclick="openMemberProfile(${JSON.stringify(m).replace(/"/g,'&quot;')})">Lihat Profil</button></div></div>`).join('')||'<p class="section-sub">Tidak ada anggota yang cocok.</p>';}
function toggleFollow(id,btn){followState[id]=!followState[id];btn.classList.toggle('following');btn.textContent=followState[id]?'✓ Mengikuti':'+ Ikuti';}
function toggleBookmarkMember(id,el){bookmarkMember[id]=!bookmarkMember[id];el.classList.toggle('active');}
function openMemberProfile(m){Swal.fire({title:m.name,imageUrl:avatar(m.name),imageWidth:80,html:`<div style="text-align:left"><p class="mono">${m.id}</p><p>${m.city}, ${m.prov}</p><p>${m.bio}</p><div>${m.skills.map(s=>`<span class="skill-chip">${s}</span>`).join('')}</div></div>`,confirmButtonText:'Tutup',confirmButtonColor:'#152A52'});}
// =====================================================
// WILAYAH / PETA
// =====================================================
let map=null,markerRefs={};
function initMap(){if(!window.L)return;map=L.map('peta-indonesia',{scrollWheelZoom:false}).setView([-2.2,118],4.6);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);PROVINCES.forEach(p=>{const marker=L.circleMarker([p.lat,p.lng],{radius:6+Math.sqrt(p.members)/8,fillColor:'#C1272D',color:'#C7972A',weight:1.5,fillOpacity:.75}).addTo(map);marker.bindPopup(`<b>${p.n}</b><br>${p.members.toLocaleString('id-ID')} anggota · ${p.cabang} cabang<br>Koordinator: ${p.koor}`);markerRefs[p.n]=marker;});const kmap=L.map('kontak-map',{scrollWheelZoom:false,zoomControl:false}).setView([-6.1944,106.8229],13);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(kmap);L.marker([-6.1944,106.8229]).addTo(kmap).bindPopup('Sekretariat Komunitas Nusantara');}
function renderProvList(){const q=(document.getElementById('provSearch')?.value||'').toLowerCase();const list=PROVINCES.filter(p=>p.n.toLowerCase().includes(q)).sort((a,b)=>b.members-a.members);document.getElementById('provList').innerHTML=list.map(p=>`<div class="prov-item" onclick="flyToProvince('${p.n}')"><div><b>${p.n}</b><div style="font-size:.72rem;color:var(--text-mut)">${p.cabang} cabang · ${p.koor}</div></div><div class="cnt mono">${p.members.toLocaleString('id-ID')}</div></div>`).join('');}
function flyToProvince(name){const p=PROVINCES.find(x=>x.n===name);if(!p||!map)return;showPage('wilayah');map.flyTo([p.lat,p.lng],7,{duration:1.1});markerRefs[name]?.openPopup();}
// =====================================================
// FORUM
// =====================================================
const FORUM_CATS=['Semua','Umum','Teknologi','Event','Prestasi','Wilayah'];let activeForumCat='Semua';
function renderForumChips(){document.getElementById('forumCatChips').innerHTML=FORUM_CATS.map(c=>`<button class="chip-btn ${c===activeForumCat?'active':''}" onclick="setForumCat('${c}')">${c}</button>`).join('');}
function setForumCat(c){activeForumCat=c;renderForumChips();renderForum();}
function formatPostText(t){return t.replace(/@([A-Za-z]+)/g,'<span class="mention">@$1</span>').replace(/#([A-Za-z0-9]+)/g,'<span class="hashtag">#$1</span>');}
function renderForum(){const q=(document.getElementById('forumSearch')?.value||'').toLowerCase();const list=POSTS.filter(p=>(activeForumCat==='Semua'||p.cat===activeForumCat)&&(p.text.toLowerCase().includes(q)||p.author.toLowerCase().includes(q)));document.getElementById('forumFeed').innerHTML=list.map(p=>`<div class="post-card"><div class="post-head"><img src="${p.avatar}"><div><b>${p.author}</b> <span class="tag-pill blue">${p.cat}</span><div class="meta">${p.prov} · ${p.time}</div></div></div><div class="post-body">${formatPostText(p.text)}</div>${p.poll?renderPoll(p):''}<div class="post-actions"><span onclick="toggleLike(${p.id})">❤ <span class="likeCount">${p.likes}</span></span><span onclick="toggleComment(${p.id})">💬 ${p.comments.length} Komentar</span><span onclick="toggleBookmarkPost(${p.id})">🔖 ${p.bookmark?'Tersimpan':'Simpan'}</span></div><div class="comment-box" id="comments-${p.id}">${p.comments.map(c=>`<div class="comment-item"><b>${c.a}:</b> ${c.t}</div>`).join('')}<div style="display:flex;gap:8px;margin-top:8px"><input id="cinput-${p.id}" placeholder="Tulis komentar…" style="flex:1;padding:8px"><button class="mini-btn" onclick="addComment(${p.id})">Kirim</button></div></div></div>`).join('')||'<p class="section-sub">Belum ada postingan.</p>';}
function renderPoll(p){const total=p.poll.options.reduce((a,o)=>a+o.v,0)||1;return `<div style="margin-bottom:10px">${p.poll.options.map((o,i)=>{const pct=Math.round(o.v/total*100);return `<div class="poll-opt" onclick="votePoll(${p.id},${i})"><div class="poll-fill" style="width:${p.poll.voted?pct:0}%"></div><span>${o.t} ${p.poll.voted?`<b>${pct}%</b>`:''}</span></div>`}).join('')}</div>`;}
function votePoll(id,i){const p=POSTS.find(x=>x.id===id);if(!p.poll.voted){p.poll.options[i].v++;p.poll.voted=true;renderForum();}}
function toggleLike(id){const p=POSTS.find(x=>x.id===id);p.liked=!p.liked;p.likes+=p.liked?1:-1;renderForum();}
function toggleBookmarkPost(id){const p=POSTS.find(x=>x.id===id);p.bookmark=!p.bookmark;renderForum();}
function toggleComment(id){document.getElementById('comments-'+id)?.classList.toggle('show');}
function addComment(id){const input=document.getElementById('cinput-'+id);if(!input?.value.trim())return;const p=POSTS.find(x=>x.id===id);p.comments.push({a:currentUser?currentUser.name:'Tamu',t:input.value.trim()});renderForum();document.getElementById('comments-'+id)?.classList.add('show');}
function submitPost(){requireLogin(()=>{const text=document.getElementById('newPostText').value.trim();if(!text){Swal.fire({icon:'warning',title:'Tulis sesuatu dulu ya',timer:1100,showConfirmButton:false});return;}POSTS.unshift({id:Date.now(),author:currentUser.name,prov:currentUser.prov,avatar:avatar(currentUser.name),time:'baru saja',cat:document.getElementById('newPostCat').value,text,likes:0,liked:false,bookmark:false,comments:[],poll:null});document.getElementById('newPostText').value='';renderForum();Swal.fire({icon:'success',title:'Postingan dipublikasikan',timer:1000,showConfirmButton:false});});}
// =====================================================
// BERITA
// =====================================================
const NEWS_CATS=['Semua','Pengumuman','Artikel','Prestasi','Berita'];let activeNewsCat='Semua';
function renderNewsChips(){document.getElementById('newsCatChips').innerHTML=NEWS_CATS.map(c=>`<button class="chip-btn ${c===activeNewsCat?'active':''}" onclick="setNewsCat('${c}')">${c}</button>`).join('');}
function setNewsCat(c){activeNewsCat=c;renderNewsChips();renderNews();}
function renderNews(){const q=(document.getElementById('newsSearch')?.value||'').toLowerCase();const list=NEWS.filter(n=>(activeNewsCat==='Semua'||n.cat===activeNewsCat)&&n.title.toLowerCase().includes(q));document.getElementById('newsGrid').innerHTML=list.map(n=>`<div class="col-md-6 col-lg-4"><div class="card-nc" style="padding:0;overflow:hidden;cursor:pointer" onclick="openNewsDetail(${n.id})"><img src="${n.img}" style="width:100%;height:180px;object-fit:cover"><div style="padding:18px"><span class="tag-pill red">${n.cat}</span><h4>${n.title}</h4><p style="font-size:.82rem;color:var(--text-mut)">${n.excerpt}</p><small>${newsViewState[n.id]||n.views} dilihat · ${n.date}</small></div></div></div>`).join('');}
function openNewsDetail(id){const n=NEWS.find(x=>x.id===id);newsViewState[id]=(newsViewState[id]||n.views)+1;renderNews();Swal.fire({title:n.title,imageUrl:n.img,imageHeight:220,html:`<p style="text-align:left">${n.excerpt} Artikel ini merupakan contoh konten demo.</p><small>${n.date} · ${newsViewState[id]} kali dilihat</small>`,confirmButtonText:'Tutup',confirmButtonColor:'#152A52',width:560});}
// =====================================================
// EVENT
// =====================================================
function eventCardHtml(e){const pct=Math.round(e.peserta/e.kuota*100);return `<div class="col-md-6"><div class="card-nc event-card"><img src="${e.img}" style="width:100%;height:150px;object-fit:cover;border-radius:10px;margin-bottom:12px"><div style="display:flex;gap:12px"><div class="event-date-badge"><div class="d">${e.date.getDate()}</div><div class="m">${e.date.toLocaleDateString('id-ID',{month:'short'})}</div></div><div><h4 style="font-size:.95rem">${e.title}</h4><small>${e.loc}</small></div></div><div class="progress-nc"><div class="bar" style="width:${pct}%"></div></div><small>${e.peserta}/${e.kuota} peserta</small><button class="btn-nc btn-primary-nc" style="width:100%;margin-top:12px" onclick="openEventDetail(${e.id})">Lihat Detail</button></div></div>`;}
function renderEventGrid(){document.getElementById('eventGrid').innerHTML=EVENTS.map(eventCardHtml).join('');}
function renderHomeEvents(){document.getElementById('homeEventGrid').innerHTML=EVENTS.filter(e=>!e.done).slice(0,3).map(eventCardHtml).join('');}
function renderCalendar(){const cal=document.getElementById('eventCalendar');const y=today.getFullYear(),m=today.getMonth(),first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate(),eventDays=EVENTS.filter(e=>e.date.getMonth()===m&&e.date.getFullYear()===y).map(e=>e.date.getDate());let html='';for(let i=0;i<first;i++)html+='<div class="cell" style="opacity:.25"></div>';for(let d=1;d<=days;d++)html+=`<div class="cell ${eventDays.includes(d)?'has-event':''}">${d}${eventDays.includes(d)?'<div class="dot"></div>':''}</div>`;cal.innerHTML=html;}
function openEventDetail(id){const e=EVENTS.find(x=>x.id===id);Swal.fire({title:e.title,imageUrl:e.img,imageHeight:200,html:`<div style="text-align:left"><p>${e.desc}</p><p>📍 ${e.loc} · ${fmtDate(e.date)}</p><p>Kuota: ${e.peserta}/${e.kuota}</p></div>`,showCancelButton:!e.done,confirmButtonText:e.done?'Tutup':'Daftar Sekarang',cancelButtonText:'Tutup',confirmButtonColor:'#C1272D'}).then(r=>{if(r.isConfirmed&&!e.done)requireLogin(()=>{if(e.peserta>=e.kuota)return Swal.fire({icon:'error',title:'Kuota Penuh'});e.peserta++;renderEventGrid();renderHomeEvents();renderCalendar();Swal.fire({icon:'success',title:'Pendaftaran Berhasil',timer:1200,showConfirmButton:false});});});}
// =====================================================
// GALERI
// =====================================================
let activeGalFilter='Semua',lightboxIndex=0,lightboxList=[];
function renderGalFilters(){const list=['Semua',...new Set(GALLERY.map(g=>g.daerah))];document.getElementById('galeriFilterBar').innerHTML=list.map(x=>`<button class="chip-btn ${x===activeGalFilter?'active':''}" onclick="setGalFilter('${x}')">${x}</button>`).join('');}
function setGalFilter(x){activeGalFilter=x;renderGalFilters();renderGallery();}
function renderGallery(){lightboxList=activeGalFilter==='Semua'?GALLERY:GALLERY.filter(g=>g.daerah===activeGalFilter);document.getElementById('galleryGrid').innerHTML=lightboxList.map((g,i)=>`<div class="gallery-item" onclick="openLightbox(${i})"><img src="${g.img}" loading="lazy">${g.type==='video'?'<div class="play">▶</div>':''}<div class="overlay">${g.cap} · ${g.daerah}</div></div>`).join('');}
function openLightbox(i){lightboxIndex=i;document.getElementById('lightboxImg').src=lightboxList[i].img;document.getElementById('lightbox').classList.add('show');}
function closeLightbox(){document.getElementById('lightbox').classList.remove('show');}
function navLightbox(dir){lightboxIndex=(lightboxIndex+dir+lightboxList.length)%lightboxList.length;document.getElementById('lightboxImg').src=lightboxList[lightboxIndex].img;}
// =====================================================
// PRESTASI, STRUKTUR, DOKUMEN, KONTAK
// =====================================================
function renderAchievements(){document.getElementById('prestasiGrid').innerHTML=ACHIEVEMENTS.map(a=>`<div class="col-md-6 col-lg-4"><div class="card-nc" style="text-align:center"><img src="${a.img}" style="width:76px;height:76px;border-radius:50%"><h4>${a.title}</h4><span class="tag-pill">${a.prov}</span><p style="color:var(--text-mut)">${a.name}<br>${a.desc}</p></div></div>`).join('');}
function renderOrgChart(){const sample=PROVINCES.slice(0,6);document.getElementById('orgTree').innerHTML=`<div class="org-row"><div class="org-card"><img src="${avatar('Ahmad Fauzan')}"><b>Ahmad Fauzan</b><div class="role">Ketua Umum</div></div></div><div class="org-connector"></div><div class="org-row"><div class="org-card"><img src="${avatar('Larasati Putri')}"><b>Larasati Putri</b><div class="role">Wakil Ketua</div></div><div class="org-card"><img src="${avatar('Bimo Nugroho')}"><b>Bimo Nugroho</b><div class="role">Sekretaris</div></div><div class="org-card"><img src="${avatar('Sari Wulandari')}"><b>Sari Wulandari</b><div class="role">Bendahara</div></div></div><div class="org-connector"></div><div class="eyebrow">Koordinator Wilayah</div><div class="org-row">${sample.map(p=>`<div class="org-card"><img src="${avatar(p.koor)}"><b>${p.koor}</b><div class="role">${p.n}</div></div>`).join('')}</div>`;}
function renderDocs(){document.getElementById('docList').innerHTML=DOCS.map(d=>`<div class="doc-row"><div class="ico"><i class="fa-solid ${d.icon}"></i></div><div style="flex:1"><b>${d.name}</b><br><span class="tag-pill blue">${d.cat}</span></div><button class="btn-nc btn-ghost-nc" onclick="Swal.fire({icon:'info',title:'Simulasi Unduhan',text:'${d.name} sedang diunduh (demo).',confirmButtonColor:'#152A52'})">⬇ Unduh</button></div>`).join('');}
function submitContact(e){e.preventDefault();Swal.fire({icon:'success',title:'Pesan Terkirim',text:'Terima kasih, tim kami akan segera merespons.',confirmButtonColor:'#152A52'});e.target.reset();}

/* ================= DASHBOARD ================= */
// =====================================================
// DASHBOARD
// =====================================================
function renderMemberDashboardLists(){const a=document.getElementById('aktivitasList');if(a)a.innerHTML=['Mengikuti event Webinar Kewirausahaan Digital','Memberi komentar di forum #KompetisiCoding','Mengunggah foto ke Galeri Jawa Barat','Bergabung dengan cabang Bandung'].map(x=>`<div class="post-card">✓ ${x}</div>`).join('');const e=document.getElementById('myEventList');if(e)e.innerHTML=EVENTS.slice(0,3).map(x=>eventCardHtml(x)).join('');const p=document.getElementById('myPostList');if(p)p.innerHTML=POSTS.slice(0,3).map(x=>`<div class="post-card">${formatPostText(x.text)}<div class="post-actions">❤ ${x.likes}</div></div>`).join('');const n=document.getElementById('myNotifList');if(n)n.innerHTML='<div class="post-card">Tidak ada notifikasi baru.</div>';const pr=document.getElementById('myPrestasiList');if(pr)pr.innerHTML=ACHIEVEMENTS.map(x=>`<div class="col-md-4"><div class="card-nc"><b>${x.title}</b></div></div>`).join('');}
function renderAdminTables(){const sa=document.getElementById('admStatAnggota');const se=document.getElementById('admStatEvent');const sp=document.getElementById('admStatPost');if(sa)sa.textContent=MEMBERS.length*130+' +';if(se)se.textContent=EVENTS.filter(e=>!e.done).length;if(sp)sp.textContent=POSTS.length*46;const rows=(id,html)=>{const el=document.getElementById(id);if(el)el.innerHTML=html;};rows('admMemberTable',MEMBERS.map(m=>`<tr><td>${m.id}</td><td>${m.name}</td><td>${m.prov}</td><td>Aktif</td><td><button class="mini-btn" onclick="adminNotify('Data diperbarui')">✎</button></td></tr>`).join(''));rows('admPengurusTable',[['Ahmad Fauzan','Ketua Umum'],['Larasati Putri','Wakil Ketua'],['Bimo Nugroho','Sekretaris'],['Sari Wulandari','Bendahara']].map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>Pusat</td><td>✓</td></tr>`).join(''));rows('admWilayahTable',PROVINCES.map(p=>`<tr><td>${p.n}</td><td>${p.members.toLocaleString('id-ID')}</td><td>${p.cabang}</td><td>${p.koor}</td><td><button class="mini-btn" onclick="flyToProvince('${p.n}')">Map</button></td></tr>`).join(''));rows('admForumTable',POSTS.map(p=>`<tr><td>${p.text}</td><td>${p.author}</td><td>${p.cat}</td><td>${p.likes}</td><td>—</td></tr>`).join(''));rows('admBeritaTable',NEWS.map(n=>`<tr><td>${n.title}</td><td>${n.cat}</td><td>${newsViewState[n.id]||n.views}</td><td>✎</td></tr>`).join(''));rows('admEventTable',EVENTS.map(e=>`<tr><td>${e.title}</td><td>${fmtDate(e.date)}</td><td>${e.peserta}/${e.kuota}</td><td>✎</td></tr>`).join(''));rows('admGaleriTable',GALLERY.map(g=>`<tr><td>${g.cap}</td><td>${g.type}</td><td>${g.daerah}</td><td>—</td></tr>`).join(''));rows('admDokumenTable',DOCS.map(d=>`<tr><td>${d.name}</td><td>${d.cat}</td><td>✎</td></tr>`).join(''));}
function adminNotify(msg){Swal.fire({icon:'success',title:msg,timer:1000,showConfirmButton:false});}
function adminConfirmDelete(what){Swal.fire({icon:'warning',title:'Yakin hapus?',text:`Data ${what} akan dihapus (demo).`,showCancelButton:true,confirmButtonText:'Hapus',confirmButtonColor:'#C1272D'});}
function exportLaporan(){Swal.fire({icon:'success',title:'Laporan sedang diekspor',text:'Ini masih simulasi.',confirmButtonColor:'#152A52'});}
function renderMemberChart(){if(!window.Chart)return;const c=document.getElementById('chartMemberActivity');if(c)new Chart(c,{type:'line',data:{labels:['Feb','Mar','Apr','Mei','Jun','Jul','Ags'],datasets:[{data:[4,7,5,9,12,8,14],borderColor:'#C1272D',backgroundColor:'rgba(193,39,45,.12)',fill:true,tension:.4}]},options:{plugins:{legend:{display:false}}}});}
function renderAdminCharts(){if(!window.Chart)return;new Chart(document.getElementById('chartAdminTren'),{type:'bar',data:{labels:['Feb','Mar','Apr','Mei','Jun','Jul','Ags'],datasets:[{label:'Anggota Baru',data:[120,180,150,210,260,300,280],backgroundColor:'#152A52'},{label:'Postingan Forum',data:[80,95,110,130,150,175,190],backgroundColor:'#C7972A'}]},options:{plugins:{legend:{position:'bottom'}}}});new Chart(document.getElementById('chartAdminKategori'),{type:'pie',data:{labels:['Umum','Teknologi','Event','Prestasi','Wilayah'],datasets:[{data:[30,25,20,15,10],backgroundColor:['#152A52','#C1272D','#C7972A','#1E8E5A','#24406F']}]},options:{plugins:{legend:{position:'bottom'}}}});}

/* ================= EFFECTS ================= */
// =====================================================
// ANIMASI SEDERHANA
// =====================================================
function initEffects(){
 const bar=document.createElement('div');bar.className='scroll-progress';document.body.appendChild(bar);
 const orbs=document.createElement('div');orbs.className='bg-orbs';orbs.innerHTML='<div class="orb orb-1"></div><div class="orb orb-2"></div><div class="orb orb-3"></div>';document.body.prepend(orbs);
 window.addEventListener('scroll',()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;bar.style.width=(max? h.scrollTop/max*100:0)+'%';document.querySelector('.navbar-nc')?.classList.toggle('scrolled',h.scrollTop>40);document.getElementById('backTop')?.classList.toggle('show',h.scrollTop>500);},{passive:true});
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal-in');observer.unobserve(e.target);}}),{threshold:.12});
 document.querySelectorAll('.section-title,.section-sub,.card-nc,.post-card,.gallery-item,.org-card,.doc-row').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
}

/* ================= STARTUP ================= */
// =====================================================
// APP.JS — FILE UTAMA
// Di sini hanya ada urutan menjalankan website.
// =====================================================
window.addEventListener('load',()=>{
 const loader=document.getElementById('loader');if(loader)setTimeout(()=>loader.style.display='none',400);
 if(window.AOS)AOS.init({duration:650,once:true,easing:'ease-out-cubic'});
 renderAuthArea();
 document.getElementById('notifList').innerHTML='<div class="notif-item">🔔 Ada komentar baru di forum.</div><div class="notif-item">📅 Webinar dimulai 3 hari lagi.</div>';
 fillMemberFilters();renderMembers();initMap();renderProvList();renderForumChips();renderForum();renderNewsChips();renderNews();renderEventGrid();renderHomeEvents();renderCalendar();renderAchievements();renderGalFilters();renderGallery();renderOrgChart();renderDocs();renderNewsSlider();initHeroStats();buildNetworkSvg();renderPulauChart();renderMemberDashboardLists();renderMemberChart();renderAdminTables();renderAdminCharts();initEffects();
});
