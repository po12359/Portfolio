`use strict`;

const plus = document.querySelector(`plus__icon`);
const list = document.querySelector(`.list`);

const listName = list.createElement(`div[class="list__name]`);
plus.addEventListener(`click`, () => {
  listName.setAttribute(`class`, `list__name`);
});
