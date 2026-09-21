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
