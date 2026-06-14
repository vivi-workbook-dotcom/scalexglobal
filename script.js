/* ScaleX Global — shared JS */

// Nav scroll shadow
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile hamburger
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
}

// FAQ accordion
document.querySelectorAll('.faq__item').forEach(item => {
  const btn = item.querySelector('.faq__q');
  if (btn) {
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  }
});

// Contact form submit
const form = document.querySelector('.js-contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sent! We\'ll be in touch within 48 hours.';
    btn.disabled = true;
    btn.style.background = '#22c55e';
    btn.style.borderColor = '#22c55e';
  });
}

// Mark active nav link
const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === current || (current === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
