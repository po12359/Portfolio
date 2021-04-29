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

// 1. 모든 섹션 요소들과 메뉴아이템들을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다
const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonials",
  "#contact",
];
// const sectionIds는 section의 id 값을 배열로 가지고 왔다.
const sections = sectionIds.map((id) => document.querySelector(id));
// id를 가진 section tag를 new array로 만들어 줌
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);
console.log(navItems);
// data-link ${id}를 가진 요소들로 new array를 만들어줬다.

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: `smooth`, block: `center` });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}
let selectedNavIndex = 0;
// 선택한 navbar의 순서를 담고 있는 variable = > js에서 처음은 1이 아닌 0 이다!
//
let selectedNavItem = navItems[0];
//선택된 navitem 요소를 가지고 온다  navitems[0] = 첫번째 요소를 가지고 온다
function selectNavItem(selected) {
  selectedNavItem.classList.remove("active"); // 지우는 이유 처음엔 narbaritem  전체가 선택되어 진다.
  selectedNavItem = selected; // 그리고 인자로 받은 정확한 위치를 가진 요소를 가지고 온다.
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
      // entry는 빠져나간 section => !entry는 빠져나가지 않은 section
      // index는 빠져나지 않은 target의 id
      const index = sectionIds.indexOf(`#${entry.target.id}`); // 빠져나간 element target의 id를 가지고 온다
      console.log(index);
      // 스크롤링이 아래로 되어서 페이지가 올라옴
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

//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

window.addEventListener(`wheel`, () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    Math.ceil(window.scrollY + window.innerHeight) >= document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  // obj[key] 는 key를 변수로 접근하고, obj.key는 key를 객체의 속성으로 접근한다.
  selectNavItem(navItems[selectedNavIndex]);
});
console.log(window.scrollY + window.innerHeight);
console.log(document.body.clientHeight);
