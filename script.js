const closeButton = document.querySelector('.header__menu-close');
const mobileMenu = document.querySelector('.header__menu-container');
const openButton = document.querySelector('.header__menu-image');
const mobileMenuBackground = document.querySelector('.header__mobile-menu');

closeButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuBackground.classList.toggle('open')
})

openButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuBackground.classList.toggle('open')
})
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', handleScrollAnimation);

// Initial check for elements in the viewport
handleScrollAnimation();
