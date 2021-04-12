"use stirct";
//이미지 랜덤 배치
const CARROT__SIZE = 80;
const filed = document.querySelector(`.game__filed`);
const filedRect = filed.getBoundingClientRect();

function inItGame() {
  //벌레와 당근을 생성한 후 필드에 추가해준다.
  addItems(`carrot`, 5, `img/carrot.png`);
  addItems(`bug`, 5, `img/bug.png`);
}
function addItems(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = filedRect.width - CARROT__SIZE;
  const y2 = filedRect.height - CARROT__SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement(`img`);
    item.setAttribute(`class`, className);
    item.setAttribute(`src`, imgPath);
    item.style.position = `absolute`;
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    filed.appendChild(item);
  }
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
inItGame();

// 게임시작하기
