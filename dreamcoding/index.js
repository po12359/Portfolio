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

// navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
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

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: `smooth` });
}

// projects
const workBtnContainer = document.querySelector(`.work___categories`);
const projectsContanier = document.querySelector(`.work__projects`);
const projects = document.querySelectorAll(`.projects`);
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  //parentNode , work__categories의 자식인 숫자도 포함시켜준다
  // 내가 선언한 data-filter를 변수에 넣어주
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
        //true라면 사진을 지우고 false라면 사진을 남긴다
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
//   root: null, // default viewport(윈도우 부분이 기본)
//   rootMargin: `0px`, // default opx
//   threshold: 1, // 0~1
// };

// 1. 모든 섹션 요소들과 메뉴 아이템을 가지고 온다
// 2. intersectionObserver를 이용해서 모든 섹션들을 관찰한다.
//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
