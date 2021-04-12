`use strict`;
const horizontal = document.querySelector(`.horizontal`);
const vertical = document.querySelector(`.vertical`);
const target = document.querySelector(`.target`);
const tag = document.querySelector(`.tag`);
addEventListener(`load`, () => {
  const targetRest = target.getBoundingClientRect();
  const targetHalfHeight = targetRest.height / 2;
  const targetHalfWidth = targetRest.width / 2;

  document.addEventListener(`mousemove`, (event) => {
    const x = `${event.clientX}`;
    const y = `${event.clientY}`;

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px,${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px,${y}px)`;

    tag.innerHTML = `${x}px,${y}px`;
  });
});
