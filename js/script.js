function updateLangButtons() {
  const isArabic = document.body.classList.contains('lang-arabic');
  const text = isArabic ? 'EN' : 'AR';
  const btn1 = document.getElementById('langBtn');
  const btn2 = document.getElementById('langBtnMobile');
  if (btn1) btn1.textContent = text;
  if (btn2) btn2.textContent = text;
}

function initLanguageToggle() {
  const savedLang = localStorage.getItem('neura-lang');
  const isArabic = savedLang === 'ar';
  document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-arabic', isArabic);
  updateLangButtons();
}

function toggleLanguage() {
  const isArabic = !document.body.classList.contains('lang-arabic');
  document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-arabic', isArabic);
  localStorage.setItem('neura-lang', isArabic ? 'ar' : 'en');
  updateLangButtons();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

initLanguageToggle();
initSmoothScroll();
initScrollAnimations();
