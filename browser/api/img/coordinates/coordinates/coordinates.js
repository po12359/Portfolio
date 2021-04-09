const horizontal = document.querySelector(`.horizontal`);
const vertical = document.querySelector(`.vertical`);
const target = document.querySelector(`.target`);
const tag = document.querySelector(`.tag`);
addEventListener(`load`, () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfHeight = targetRect.height / 2;
  const targetHalfWidth = targetRect.width / 2;
  document.addEventListener(`mousemove`, (event) => {
    const x = `${event.clientX}`;
    const y = `${event.clientY}`;
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px,${
      y - targetHalfHeight
    }px)`;
    // horizontal.style.top = `${y}px`;
    // vertical.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // tag.style.left = `${x}px`;

    tag.innerHTML = `${x}px+${y}px`;

    tag.style.transform = `translate(${x}px,${y}px)`;
  });
});
