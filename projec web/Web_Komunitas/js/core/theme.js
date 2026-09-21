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
