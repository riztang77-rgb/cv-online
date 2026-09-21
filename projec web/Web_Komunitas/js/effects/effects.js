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
