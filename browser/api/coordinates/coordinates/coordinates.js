`use strict`;

const horizontal = document.querySelector(`.horizontal`);
const vertical = document.querySelector(`.vertical`);
const target = document.querySelector(`.target`);
const tag = document.querySelector(`.tag`);
//top and left는 계속해서 새로운 layout을 생성해야 하기 때문에 translate 사용 권장
addEventListener(`load`, () => {
  const targetRest = target.getBoundingClientRect();
  const targetHarfWidth = targetRest.width / 2;
  const targetHarfHeigh = targetRest.height / 2;

  document.addEventListener(`mousemove`, (event) => {
    const x = `${event.clientX}`;
    const y = `${event.clientY}`;

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHarfWidth}px, ${
      y - targetHarfHeigh
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;

    tag.innerHTML = `${x}px, ${y}px`;
  });
});
