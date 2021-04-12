`use strict`;
const horizontal = document.querySelector(`.horizontal`);
const vartical = document.querySelector(`.vartical`);
const target = document.querySelector(`.target`);
const tag = document.querySelector(`.tag`);
const targetRect = target.getBoundingClientRect();
const targetHarfHeight = targetRect.height / 2;
const targetWidth = target.width / 2;
document.addEventListener(`mousemove`, (event) => {
  const y = event.clientY;
  const x = event.clientX;

  horizontal.style.transform = `trasnlateY(${y}px)`;
  vertical.style.transform = `trasnlateX(${x}px)`;
  target.style.transform = `trasnlate(${x - targetWidth}px,${
    y - targetHarfHeight
  }px)`;
  tag.style.transform = `trasnlate(${x}px,${y}px)`;

  tag.innerHTML = `${x}px,${y}px`;
});
