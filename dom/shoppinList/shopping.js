`use strict`;
const plusIcon = document.querySelector(`.shopping__plus`);
const shopping = document.querySelector(`.shopping`);
const input = document.querySelector(".input__shopping");
function addItem() {
  const text = input.value;
  const items = creatItem(text);
  shopping.appendChild(items);
  input.value = ``;
  input.focus();
}

function creatItem(item) {
  const list = document.createElement(`li`);
  list.setAttribute(`class`, `shopping__list`);
  const box = document.createElement(`div`);
  box.setAttribute(`class`, `shopping__list-box`);
  const name = document.createElement(`span`);
  name.innerText = item;
  name.setAttribute(`class`, `shopping__list-name`);
  const btn = document.createElement(`button`);
  btn.setAttribute(`class`, `shopping__btn-trash`);
  btn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  btn.addEventListener(`click`, () => {
    shopping.removeChild(list);
  });
  box.appendChild(name);
  box.appendChild(btn);
  list.appendChild(box);
  return list;
}

plusIcon.addEventListener(`click`, () => {
  addItem();
});

input.addEventListener(`keypress`, (e) => {
  if (e.key === `Enter`) {
    addItem();
  }
});
