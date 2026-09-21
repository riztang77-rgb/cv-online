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
