document.addEventListener('DOMContentLoaded', () => {

    // 1. Wishlist Heart Toggle
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');

    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = btn.querySelector('i');
            
            if (icon.classList.contains('ri-heart-line')) {
                icon.classList.remove('ri-heart-line');
                icon.classList.add('ri-heart-fill');
                icon.style.color = '#e53e3e';
            } else {
                icon.classList.remove('ri-heart-fill');
                icon.classList.add('ri-heart-line');
                icon.style.color = 'inherit';
            }
        });
    });

    // 2. Newsletter Submit Handling
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih telah berlangganan buletin Wanderly!');
            newsletterForm.reset();
        });
    }

    // 3. Search Button Action
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert('Mencari perjalanan & paket yang tersedia...');
        });
    }

    // 4. Hotel Book Small Button Action
    const bookBtns = document.querySelectorAll('.btn-book-sm');
    bookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Mengalihkan ke halaman pemesanan hotel...');
        });
    });

    // 5. Navbar Active Link Indicator on Scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

});