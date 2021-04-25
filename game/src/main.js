`use strict`;
// string을 obj로 얼려!!!!
const Reason = Object.freeze({
  win: `win`,
  lose: `lose`,
  cancel: `cancel`,
});

// game variable

let level = 1;
let timer;
let started;
let score = 0;
const carrot_count = 4;
const bug_count = 4;
let timer_sec = 5;
const CARRTO_SIZE = 80;
// game title
const gameStage = document.querySelector(`.game__stage`);
// game
const gameTimer = document.querySelector(`.game__timer`);
const gameScore = document.querySelector(`.game__score`);
const gaemBtn = document.querySelector(`.game__button`);
// field
const field = document.querySelector(`.game__field`);

const fieldRect = field.getBoundingClientRect();
//popup
const popUp = document.querySelector(`.pop-up`);
const refreshBtn = document.querySelector(`.pop-up__refresh`);
const message = document.querySelector(`.pop-up__message`);
// sound
const carrot = new Audio(`./sound/carrot_pull.mp3`);
const bug = new Audio(`./sound/bug_pull.mp3`);
const bg = new Audio(`./sound/bg.mp3`);
const win = new Audio(`./sound/game_win.mp3`);
const alert = new Audio(`./sound/alert.wav`);
function playSound(name) {
  name.play();
}
function stopSound(name) {
  name.pause();
}

// game btn event
gaemBtn.addEventListener(`click`, () => {
  if (started) {
    gameStart();
  } else if (!started) {
    stopGame(Reason.lose);
  }
});

// start game event

function gameStart() {
  started = true;
  showStopBtn();
  showTimerAndScore();
  startTimer(level);
  initGame(level);
  playSound(bg);
}

// showStopBtn() => ok!!
function showStopBtn() {
  const icon = document.querySelector(`.fas`);
  icon.classList.add(`fa-stop`);
  icon.classList.remove(`fa-play`);
  gaemBtn.style.visibility = `visible`;
}

// level add item
function initGame(level) {
  /* if (level === 1) {
    carrot_count;
    timer_sec;
  }

  if (level === 2) {
    carrot_count += 5;
    timer_sec += 3;
  }

  if (level === 3) {
    carrot_count += 10;
    timer_sec += 5;
  }

  if (level === 4) {
    carrot_count += 15;
    timer_sec += 8;
  }

  if (level === 5) {
    carrot_count += 12;
    timer_sec += 11;
  }*/
  score = 0;
  gameScore.textContent = carrot_count;
  field.innerHTML = ``;
  addItem(`carrot`, carrot_count, `img/carrot.png`);
  addItem(`bug`, bug_count, `img/bug.png`);
}

function addItem(className, count, src) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARRTO_SIZE;
  const y2 = fieldRect.height - CARRTO_SIZE;
  for (let i = 0; i < count; i++) {
    const img = document.createElement(`img`);
    img.setAttribute(`class`, className);
    img.setAttribute(`src`, src);
    img.style.position = `absolute`;
    const x = upDateImg(x1, x2);
    const y = upDateImg(y1, y2);
    img.style.transform = `translate(${x}px, ${y}px)`;
    field.appendChild(img);
  }
}

function upDateImg(min, max) {
  return Math.random * (max - min) + min;
}

function showTimerAndScore() {
  gameTimer.style.visibility = `visible`;
  gameScore.style.visibility = `visible`;
}
// timer
function startTimer(level) {
  if (level) {
    const remainingTime = timer_sec;

    updateTimer(remainingTime);
    timer = setInterval(() => {
      if (timer_sec === 0) {
        stopGame(Reason.cancel);
        stopSound(bg);
        return;
      }
      updateTimer(--remainingTime);
    }, 1000);
  }
}

function updateTimer(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.textContent = `${minutes}:${seconds}`;
}
// game stop
function stopGame(reason) {
  started = false;
  hideStopBtn();
  stopTimer();
  showPopUpWithText(reason);
  stopSound(bg);
}

function hideStopBtn() {
  gaemBtn.style.visibility = `hidden`;
}
function stopTimer() {
  clearInterval(timer);
}
// popup
function showPopUpWithText(reason) {
  popUp.classList.remove(`pop-up--hide`);
  message.textContent = reason;
}

function nextStageBtn(reason) {
  if (reason === Reason.win) {
    const icon = document.querySelector(`.replay`);
    icon.classList.add(`fab fa-canadian-maple-leaf`);
    icon.className.remove(`fas fa-reply-all`);
  }
}

field.addEventListener(`click`, (e) => {
  if (!started) {
    return;
  }
  const target = e.target;
  if (target === `.carrot`) {
    target.remove();
    score++;
    playSound(carrot);
    if (score === carrot_count) {
      stopGame(Reason.win);
    }
  } else if (target === `.bug`) {
    stopGame(Reason.lose);
  }
});
