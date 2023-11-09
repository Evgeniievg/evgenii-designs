const closeButton = document.querySelector('.header__menu-close');
const mobileMenu = document.querySelector('.header__menu-container');
const openButton = document.querySelector('.header__menu-image');
const mobileMenuBackground = document.querySelector('.header__mobile-menu');
const menuElement = document.querySelectorAll('.header__element');
const firstProjectLink = document.querySelector('.projects__subtitle_type_first');
const secondProjectLink = document.querySelector('.projects__subtitle_type_second');
const firstProject = document.querySelector('.first-project');
const secondProject = document.querySelector('.second-project');
const closePopupButton = document.querySelector('.first-project__close')
const closeSecondPopupButton = document.querySelector('.second-project__close')


firstProjectLink.addEventListener('click', () => {
  firstProject.classList.toggle('open')
})

secondProjectLink.addEventListener('click', () => {
  secondProject.classList.toggle('open')
})

closePopupButton.addEventListener('click', () => {
  firstProject.classList.remove('open')
})

closeSecondPopupButton.addEventListener('click', () => {
  secondProject.classList.remove('open')
})

menuElement.forEach((e) => e.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  mobileMenuBackground.classList.remove('open')
}))

closeButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuBackground.classList.toggle('open')
})

openButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuBackground.classList.toggle('open')
})
