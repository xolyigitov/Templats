const menuBtn = document.querySelector('.menu-btn'),
  navigation = document.querySelector('.header-nav__list');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  navigation.classList.toggle('active')
})