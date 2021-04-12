`use strict`;

const plusIcon = document.querySelector(`.plus__icon`);
const plusText = document.querySelector(`.plus__text`);
const items = document.querySelector(`.items`);

function onAdd() {
  // 이벤트를 처리하는 함수이름엔 on을 넣는다.
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = plusText.value;
  if (text === ``) {
    plusText.focus();
    return;
  }
  //2. 새로운 아이템을 만든다(텍스트 + 삭제 버튼)
  const item = createItem(text);
  //3. items 컨테이너 안에 새롤운 아이템을 추가한다.
  items.appendChild(item);
  //4. 새로 추가된 아이템으로 스크로링
  items.scrollIntoView({ behavior: `smooth`, block: `center` });
  //5. plus__text를 초기화 한다.
  plusText.value = ``;
  // plusText.focus();
}
let id = 0;
function createItem(text) {
  const itemRow = document.createElement(`li`);
  itemRow.setAttribute(`class`, `item__row`);
  itemRow.setAttribute(`data-id`, id);
  itemRow.innerHTML = `
  <div class="item" >
        <span class="item__name">${text}</span>
        <button class="item__delete" >
        <i class="fas fa-trash-alt" data-id="${id}"></i>
        </button>
      </div>
      <div class="item__divider"></div>`;
  id++;

  return itemRow;
}

plusIcon.addEventListener(`click`, () => {
  onAdd();
});
plusText.addEventListener(`keypress`, (event) => {
  if (event.key === `Enter`) {
    onAdd();
  }
});
items.addEventListener(`click`, (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDelted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDelted.remove();
  }
});
