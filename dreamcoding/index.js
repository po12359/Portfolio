`use strict`;
const navbar = document.querySelector(`#navbar`);
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector(`.home__container`);
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener(`scroll`, () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add(`navbar--dark`);
  } else {
    navbar.classList.remove(`navbar--dark`);
  }
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
//widow.scrooly 현재 스크롤의 위치를 알려주는
//getboundingclientrect : 보여지는 화면의 크기 ,
// offsegwidth : 속성값으로 저장된 크기

// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(`.navbar__menu`);
navbarMenu.addEventListener(`click`, (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: `smooth` });
});

const contact = document.querySelector(`.home__contact`);
contact.addEventListener(`click`, (event) => {
  const target = event.target; //home__contact
  const link = target.dataset.link; //contact
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: `smooth` });
});

// document.addEventListener(`scroll`, () => {
//   console.log(window.scrollY);

// });
