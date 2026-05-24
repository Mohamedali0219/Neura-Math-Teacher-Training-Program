document.getElementById('section-navbar').innerHTML = `
<nav class="navbar" id="navbar">
  <div class="container nav-container">
    <a href="#" class="nav-logo">
      <img src="images/logo_with_background.jpeg" alt="Neura Logo" class="nav-logo-img">
      <span class="nav-logo-text lang-en">Neura</span>
      <span class="nav-logo-text lang-ar">نيورا</span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="#hero"><span class="lang-en">Home</span><span class="lang-ar">الرئيسية</span></a></li>
      <li><a href="#benefits"><span class="lang-en">Benefits</span><span class="lang-ar">المميزات</span></a></li>
      <li><a href="#levels"><span class="lang-en">Levels</span><span class="lang-ar">المستويات</span></a></li>
      <li><a href="#method"><span class="lang-en">Method</span><span class="lang-ar">الطريقة</span></a></li>
      <li><a href="#cta"><span class="lang-en">Contact</span><span class="lang-ar">اتصل بنا</span></a></li>
    </ul>
    <div class="nav-actions">
      <button id="langBtn" class="lang-btn" onclick="toggleLanguage()">AR</button>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>`;

(function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });

  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    const allSections = document.querySelectorAll('section[id]');
    let current = '';
    allSections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href.includes(current)) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  if (document.readyState === 'complete') {
    updateActiveLink();
  } else {
    window.addEventListener('load', updateActiveLink);
  }
})();
