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
