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
