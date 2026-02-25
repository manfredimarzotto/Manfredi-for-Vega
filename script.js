// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var navRight = document.querySelector('.nav__right');
  if (!toggle || !navRight) return;

  toggle.addEventListener('click', function () {
    var isOpen = navRight.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navRight.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navRight.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
