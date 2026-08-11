// OSOBNOSTI PRO TŘINEC — sdílené chování webu

// Hlavička: velká nahoře, po odrolování se zmenší (sticky drží CSS)
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Panorama pod hero: jedna fotka, střídá se při každém načtení stránky
(function () {
  var rotator = document.getElementById('panoRotator');
  if (!rotator) return;
  var slides = rotator.querySelectorAll('.pano-slide');
  if (slides.length < 2) return;
  var i = 0;
  try {
    i = parseInt(localStorage.getItem('panoIdx') || '0', 10) % slides.length;
    localStorage.setItem('panoIdx', String((i + 1) % slides.length));
  } catch (e) { /* private mode — zůstane první fotka */ }
  slides.forEach(function (s) { s.classList.remove('active'); });
  slides[i].classList.add('active');
})();

// Rotace kandidátů v hero kartě
(function () {
  var rotator = document.getElementById('heroRotator');
  if (!rotator) return;
  var slides = rotator.querySelectorAll('.portrait-slide');
  if (slides.length < 2) return;
  var i = 0;
  setInterval(function () {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 5000);
})();

// Slider top 9 kandidátů (jen na stránkách, kde je)
(function () {
  var slider = document.getElementById('candSlider');
  if (!slider) return;
  var track = slider.querySelector('.cand-track');
  var cards = track.children;
  var i = 0, timer;

  function visible() {
    var w = slider.querySelector('.cand-viewport').offsetWidth;
    return Math.max(1, Math.floor(w / cards[0].offsetWidth));
  }
  function show(n) {
    var max = cards.length - visible();
    i = Math.min(Math.max(n, 0), max);
    if (n > max) i = 0; // ze začátku
    track.style.transform = 'translateX(-' + (i * cards[0].offsetWidth) + 'px)';
  }
  function auto() { timer = setInterval(function () { show(i + 1); }, 4000); }

  slider.querySelector('.prev').addEventListener('click', function () { show(i - 1); });
  slider.querySelector('.next').addEventListener('click', function () { show(i + 1); });
  slider.addEventListener('mouseenter', function () { clearInterval(timer); });
  slider.addEventListener('mouseleave', auto);
  window.addEventListener('resize', function () { show(i); });
  auto();
})();
