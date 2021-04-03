`use strict`;

const navbar = document.querySelector(`#navbar`);
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector(`.home__container`);
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener(`scroll`, () => {
  console.log(window.scrollY);
  console.log(`navbarHeight : ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add(`navbar--dark`);
  } else {
    navbar.classList.remove(`navbar--dark`);
  }
  console.log(`homeHeight : ${homeHeight}`);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const navbarMenu = document.querySelector(`.navbar__menu`);

navbar.addEventListener(`click`, (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: `smooth` });
  scrollIntoView(link);
});
//make home slowly fade to transparent as the window scrolls down
const homeContact = document.querySelector(`.home__contacat`);

home.addEventListener(`click`, () => {
  // const target = event.target;
  // const link = target.dataset.link;
  // if (link == null) {
  //   return;
  // }
  // console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: `smooth` });
  scrollIntoView(`#contact`);
});

//show "arrow up" button when scolling down
const arrowUp = document.querySelector(`.arrow-up, .fas fa-arrow-up`);
const arrowUpHeight = arrowUp.getBoundingClientRect().height;

arrowUp.addEventListener(`click`, () => {
  // const target = event.target;
  // const link = target.dataset.link;
  // if (link == null) {
  //   return;
  // }
  // console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: `smooth` });
  scrollIntoView(`#home`);
});

document.addEventListener(`scroll`, () => {
  console.log(arrowUpHeight);
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add(`arrow-up-dark`);
  } else {
    arrowUp.classList.remove(`arrow-up-dark`);
  }
});
// projects
const workBtnContainer = document.querySelector(`.work___categories`);
const pojectsContanier = document.querySelector(`.work__projects`);
const projects = document.querySelectorAll(`.projects`);
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  console.log(filter);
  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === `*` || filter === project.dataset.type) {
      project.classList.remove(`invisible`);
    } else {
      project.classList.add(`invisible`);
    }
  });
  // let project;
  // for (let project of projects) {
  // }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: `smooth` });
}
