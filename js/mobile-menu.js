(() => {
  const refs = {
    openMenuBtn: document.querySelector('.site-nav__open'),
    closeMenuBtn: document.querySelector('.site-nav__close'),
    menu: document.querySelector('.mobile-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();