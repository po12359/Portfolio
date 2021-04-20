`use strict`;
// scroll
const scroll = document.querySelector(`.scroll`);
const scrollBy = document.querySelector(`.scroll-by`);
const scrollTo = document.querySelector(`.scroll-to`);
const scrollInTo = document.querySelector(`.scroll-into`);
const icon = document.querySelector(`.icon`);
const items = document.querySelector(`.scroll__items`);
const itemsHeight = items.getBoundingClientRect().height;
const apple = document.querySelector(`.apple`);
scrollBy.addEventListener(`click`, () => {
  items.scrollBy({ top: 20, behavior: `smooth` });
});
scrollTo.addEventListener(`click`, () => {
  items.scrollTo({ top: 0, behavior: "smooth" });
});
scrollInTo.addEventListener(`click`, () => {
  apple.scrollIntoView({ block: "center", behavior: "smooth" });
});
// coodinates

const coordinates = document.querySelector(`.coordinates-items`);
const coordiantesRect = coordinates.getBoundingClientRect();
const height = coordiantesRect.height;
const width = coordiantesRect.width;
const coordinatesCursor = document.querySelector(`#coordinates__cursor`);
const coordinatesX = document.querySelector(`.x`);
const coordinatesY = document.querySelector(`.y`);
const coordiantesText = document.querySelector(`.coordinates__text`);

coordinates.addEventListener(`mousemove`, (e) => {
  const x = e.clientX;
  const y = e.clientY;
  coordiantesText.innerText = `${x}px, ${y}px`;
  coordinatesCursor.style.left = e.pageX + "px";
  coordinatesCursor.style.top = e.pageY + "px";
});
// shopping - list
const shoppingContainer = document.querySelector(`.shopping__container`);
const itemsInput = document.querySelector(`.items__input`);
const itemsPlus = document.querySelector(`.items__plus`);
const itemsTrash = document.querySelector(`.items__trash`);
function addItem() {
  // item plus
  const text = itemsInput.value;
  // item Update
  const items = updateItem(text);
  // item in container
  shoppingContainer.appendChild(items);
  // input reset
  itemsInput.value = ``;
  itemsInput.focus();
}

function updateItem(e) {
  // list make
  const itemList = document.createElement(`li`);
  itemList.setAttribute(`class`, `shopping__item`);
  const itemBox = document.createElement(`div`);
  itemBox.setAttribute(`class`, `shopping__item-box`);
  // list span make
  const item = document.createElement(`span`);
  item.textContent = e;
  // list in button
  const button = document.createElement(`button`);
  button.setAttribute(`class`, `shopping__trash`);
  button.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  button.addEventListener(`click`, () => {
    shoppingContainer.removeChild(itemList);
  });
  itemBox.appendChild(item);
  itemBox.appendChild(button);
  itemList.appendChild(itemBox);
  return itemList;
}

itemsPlus.addEventListener(`click`, () => {
  addItem();
});
itemsInput.addEventListener(`keypress`, (e) => {
  if (e.key === `Enter`) {
    addItem();
  }
});
itemsTrash.addEventListener(`click`, () => {
  shoppingContainer.innerHTML = ``;
});
