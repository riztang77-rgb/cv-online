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
