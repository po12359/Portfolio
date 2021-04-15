`use strict`;
const horizontal = document.querySelector(`.x`);
const vertical = document.querySelector(`.y`);
const target = document.querySelector(`.target`);
const tag = document.querySelector(`.tag`);
const targetRect = target.getBoundingClientRect();
const targetWidth = targetRect.width / 2;
const targetHeight = targetRect.height / 2;

window.addEventListener(`mousemove`, (e) => {
  const x = e.clientX;
  const y = e.clientY;
  tag.innerText = `${x}px,${y}px`;

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x - targetWidth}px,${
    y - targetHeight
  }px)`;
  tag.style.transform = `translate(${x}px,${y}px)`;
});
