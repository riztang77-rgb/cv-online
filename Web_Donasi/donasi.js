/* =========================================================
   PELITA BERBAGI — donasi.js
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');

  const onScroll = () => {
    const scrolled = window.scrollY > 12;
    header.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('show', window.scrollY > 500);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });

  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });

  /* ---------- Active nav link on scroll (scrollspy) ---------- */
  const sections = document.querySelectorAll('main > section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => spyObserver.observe(sec));

  /* ---------- Animated counters (hero stats) ---------- */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = prefix + value.toFixed(decimals).replace('.', ',') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Animated progress bars ---------- */
  const bars = document.querySelectorAll('.progress-fill');

  const barObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.target + '%';
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(b => barObserver.observe(b));

  /* ---------- Campaign filter tabs ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const campaignCards = document.querySelectorAll('.campaign-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      campaignCards.forEach(card => {
        const match = filter === 'semua' || card.dataset.category === filter;
        card.classList.toggle('hide', !match);
      });
    });
  });

  /* ---------- Pages tabs (Halaman) ---------- */
  const pageTabs = document.querySelectorAll('.pages-tab');
  const pagePanels = document.querySelectorAll('.pages-panel');

  pageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      pageTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const target = 'page-' + tab.dataset.page;
      pagePanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === target);
      });
    });
  });

  /* ---------- FAQ accordion ---------- */
  const accItems = document.querySelectorAll('.acc-item');

  accItems.forEach(item => {
    const head = item.querySelector('.acc-head');
    head.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      accItems.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  /* ---------- Contact form validation ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  const validators = {
    'cf-name': (v) => v.trim().length >= 3,
    'cf-email': (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    'cf-subject': (v) => v.trim().length > 0,
    'cf-message': (v) => v.trim().length >= 5,
  };

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    Object.keys(validators).forEach(id => {
      const field = document.getElementById(id);
      const row = field.closest('.form-row');
      const ok = validators[id](field.value);
      row.classList.toggle('invalid', !ok);
      if (!ok) valid = false;
    });

    if (valid) {
      formSuccess.classList.add('show');
      contactForm.classList.add('sent');
      setTimeout(() => {
        contactForm.reset();
        contactForm.classList.remove('sent');
        formSuccess.classList.remove('show');
      }, 3500);
    }
  });

  /* clear invalid state as user types */
  contactForm.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.closest('.form-row').classList.remove('invalid');
    });
  });

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterSuccess.classList.add('show');
    newsletterForm.reset();
    setTimeout(() => newsletterSuccess.classList.remove('show'), 3500);
  });

});
