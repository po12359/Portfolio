`use strict`;

const navbar = document.querySelector(`#navbar`);
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector(`.home__container`);
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener(`scroll`, () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add(`navbar--dark`);
  } else {
    navbar.classList.remove(`navbar--dark`);
  }

  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});
// navbar click background-color event

// navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
//make home slowly fade to transparent as the window scrolls down
const homeContact = document.querySelector(`.home__contact`);

homeContact.addEventListener(`click`, () => {
  // const target = event.target;
  // const link = target.dataset.link;
  // if (link == null) {
  //   return;
  // }
  // console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: `smooth` });
  scrollIntoView(`#contact`, { behavior: `smooth`, block: `center` });
});

//show "arrow up" button when scolling down
const arrowUp = document.querySelector(`.arrow-up, .fas fa-arrow-up`);

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
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add(`arrow-up-dark`);
  } else {
    arrowUp.classList.remove(`arrow-up-dark`);
  }
});

// projects
const workBtnContainer = document.querySelector(`.work___categories`);
const projectsContanier = document.querySelector(`.work__projects`);
const projects = document.querySelectorAll(`.projects`);
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  //parentNode , work__categories??? ????????? ????????? ??????????????????
  // ?????? ????????? data-filter??? ????????? ?????????
  if (filter == null) {
    return;
  }
  // remove selection from the previous item adn selection the new one
  const active = document.querySelector(`.category__btn.selected`);

  active.classList.remove("selected");

  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");
  projectsContanier.classList.add(`anim-out`);

  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);

      if (filter === `*` || filter === project.dataset.type) {
        //true?????? ????????? ????????? false?????? ????????? ?????????
        project.classList.remove(`invisible`);
      } else {
        project.classList.add(`invisible`);
      }
    });
    projectsContanier.classList.remove(`anim-out`);
  }, 300);
  // let project;
  // for (let project of projects) {
  // }
});
// const options = {
//   root: null, // default viewport(????????? ????????? ??????)
//   rootMargin: `0px`, // default opx
//   threshold: 1, // 0~1
// };

// 1. ?????? ?????? ???????????? ?????? ???????????? ????????? ??????

// 1. ?????? ?????? ???????????? ????????????????????? ????????? ??????
// 2. IntersectionObserver??? ???????????? ?????? ???????????? ????????????
// 3. ???????????? ????????? ???????????? ?????? ???????????? ????????? ?????????
const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonials",
  "#contact",
];
// const sectionIds??? section??? id ?????? ????????? ????????? ??????.
const sections = sectionIds.map((id) => document.querySelector(id));
// id??? ?????? section tag??? new array??? ????????? ???
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);
console.log(navItems);
// data-link ${id}??? ?????? ???????????? new array??? ???????????????.

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: `smooth`, block: `center` });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}
let selectedNavIndex = 0;
// ????????? navbar??? ????????? ?????? ?????? variable = > js?????? ????????? 1??? ?????? 0 ??????!
//
let selectedNavItem = navItems[0];
//????????? navitem ????????? ????????? ??????  navitems[0] = ????????? ????????? ????????? ??????
function selectNavItem(selected) {
  selectedNavItem.classList.remove("active"); // ????????? ?????? ????????? narbaritem  ????????? ???????????? ??????.
  selectedNavItem = selected; // ????????? ????????? ?????? ????????? ????????? ?????? ????????? ????????? ??????.
  selectedNavItem.classList.add("active");
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      // entry??? ???????????? section => !entry??? ??????????????? ?????? section
      // index??? ???????????? ?????? target??? id
      const index = sectionIds.indexOf(`#${entry.target.id}`); // ???????????? element target??? id??? ????????? ??????
      console.log(index);
      // ??????????????? ????????? ????????? ???????????? ?????????
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

//3. ???????????? ????????? ???????????? ?????? ???????????? ????????? ?????????.

window.addEventListener(`wheel`, () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    Math.ceil(window.scrollY + window.innerHeight) >= document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  // obj[key] ??? key??? ????????? ????????????, obj.key??? key??? ????????? ???????????? ????????????.
  selectNavItem(navItems[selectedNavIndex]);
});
console.log(window.scrollY + window.innerHeight);
console.log(document.body.clientHeight);
