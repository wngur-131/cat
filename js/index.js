// Set Header Design
const headerEl = document.querySelector('.header');
const headerHeight = headerEl.clientHeight;
const visualHeight = document.querySelector('.visual').clientHeight;
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY < visualHeight - headerHeight) {
    headerEl.classList.add('transparent');
  } else {
    headerEl.classList.remove('transparent');
  }
}, 100));