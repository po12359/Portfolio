`use strict`;

const ITEM_COUNT = 3;
const CARROT_SIZE = 80;
const TIME_SEC = 5;

let score = 0;
let timer;
let started = false;
let level = 1;
// game
const gameBtn = document.querySelector(`.game__button`);
const gameScore = document.querySelector(`.game__score`);
const gameTimer = document.querySelector(`.game__timer`);
const gameLevel = document.querySelector(`.game__level`);
// field
const field = document.querySelector(`.game__field`);
const fieldRect = field.getBoundingClientRect();
//popup
const popUp = document.querySelector(`pop-up`);
const popUpRefres = document.querySelector(`.pop-up__refresh`);
const popUpMessage = document.querySelector(`.pop-up__message`);

// 필드에 아이템 넣기!!!

function additem(className, count, src) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement(`img`);
    item.setAttribute(`class`, className);
    item.setAttribute(`src`, src);
    item.style.position = `absolute`;
    const x = randomNum(x1, x2);
    const y = randomNum(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNum(min, max) {
  return Math.random() * (max + min) - min;
}

function initGame(level) {
  if (level === 1) {
    ITEM_COUNT = 3;
    TIME_SEC = 5;
  }
  if (level === 2) {
    ITEM_COUNT += 3;
    TIME_SEC += 2;
  }
  if (level === 3) {
    ITEM_COUNT += 3;
    TIME_SEC += 2;
  }

  if (level === 4) {
    ITEM_COUNT += 3;
    TIME_SEC += 2;
  }
  if (level === 5) {
    ITEM_COUNT += 3;
    TIME_SEC += 2;
  }
  score = 0;
  field.innerHTML = ``;
  gameTimer.textContent = ITEM_COUNT;
  additem(`carrot`, ITEM_COUNT, `./img/carrot.png`);
  additem(`carrot`, ITEM_COUNT, `./img/bug.png`);
}

// game start

function startGame() {
  started = true;
  showStopBtn();
  showBox();
  startTimer();
  initGame(level);
}
