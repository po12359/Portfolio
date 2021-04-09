// const vertical = document.querySelector(`.vertical`);
// const horizontal = document.querySelector(`.horizontal`);
// const target = document.querySelector(`.target`);
// const tag = document.querySelector(`.tag`);

// document.addEventListener(`mousemove`, (event) => {
//   const x = `${event.clientX}px`;
//   const y = `${event.clientY}px`;

//   vertical.style.left = `${x}`;
//   horizontal.style.top = `${y}`;
//   target.style.left = `${x}`;
//   target.style.top = `${y}`;
//   tag.style.top = `${y}`;
//   tag.style.left = `${x}`;

//   tag.innerHTML = `${x}, ${y}`
// });

const horizontal = document.querySelector(`.horizontal`);
const vertical = document.querySelector(`.vertical`);
const target = document.querySelector(`.target`);
const tag = document.querySelector(`.tag`);

document.addEventListener(`mousemove`, (event) => {
  const x = `${event.clientX}`;
  const y = `${event.clientY}`;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;

  tag.innerHTML = `${x}px,${y}px`;
});
