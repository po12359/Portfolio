`use strict`;

const plusIcon = document.querySelector(`.plus__icon`);
const plusText = document.querySelector(`.plus__text`);
const items = document.querySelector(`.items`);

addEventListener(`load`, () => {
  function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = plusText.value;
    //2. 새로운 아이템을 만든다(텍스트 + 삭제 버튼)
    const item = createItem(text);
    //3. items 컨테이너 안에 새롤운 아이템을 추가한다.
    items.appendChild(item);
    //4. plus__text를 초기화 한다.
    plusText.value = ``;
    plusText.focus();
  }
  function createItem(text) {
    const itemRow = document.createElement(`li`);
    itemRow.setAttribute(`class`, `item__row`);

    const item = document.createElement(`div`);
    itemRow.setAttribute(`class`, `item`);
    const name = document.createElement(`span`);
    name.setAttribute(`class`, `item__name`);
    name.innerHTML = text;
    const deleteBtn = document.createElement(`button`);
    deleteBtn.setAttribute(`class`, `item__delete`);
    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteBtn.addEventListener(`click`, () => {
      items.removeChild(itemRow);
    });
    const itemDivider = document.createElement(`div`);
    itemDivider.setAttribute(`class`, `item__divider`);

    item.appendChild(name);
    item.appendChild(deleteBtn);
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
  }

  plusIcon.addEventListener(`click`, () => {
    onAdd();
  });
});
