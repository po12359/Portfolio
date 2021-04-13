`use strict`;
import PopUp from "./popup.js";
import Field from "./fild.js";
const CARROT_COUNT = 10;
const CARROT_SIZE = 80;
const TIMER_SEC = 20;
//
//
const gameBtn = document.querySelector(`.game__btn`);
const gameScore = document.querySelector(`.game__score`);
const gameTimer = document.querySelector(`.game__timer`);
// sound
const carrotSound = new Audio(`./sound/carrot_pull.mp3`);
const bugSound = new Audio(`./sound/bug_pull.mp3`);
const winSound = new Audio(`./sound/game_win.mp3`);
const alertSound = new Audio(`./sound/alert.wav`);
const bgSound = new Audio(`./sound/bg.mp3`);
function soundPlay(sound) {
  sound.currentTiem = 0;
  sound.play();
}
function soundStop(sound) {
  sound.pause();
}

// 1 field icon make

let started = false;
let score = 0;
let timer = undefined;
const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  gameStart();
});
const gameField = new Field();
gameField.setClickListener(onItemClick);
function onItemClick(item) {
  if (!started) {
    return;
  }
  if (item === `carrot`) {
    score++;

    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    } else if (item === `bug`) {
      finishGame(false);
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

//2. icon in field
function itemInGame() {
  score = 0;
  gameScore.innerText = CARROT_COUNT;
}

//3. gamestartBtn
gameBtn.addEventListener(`click`, () => {
  if (started) {
    gameStop();
  } else {
    gameStart();
  }
});
function showStopBtn() {
  const icon = document.querySelector(`.fas`);
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gameBtn.style.visibility = `visible`;
}

//4. gamestart

function gameStart() {
  started = true;
  itemInGame();
  showStopBtn();
  showTimerAndScore();
  startGameTimer();
  soundPlay(bgSound);
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

// 5. gameStart => start Timer
function startGameTimer() {
  let remainingTimeSec = TIMER_SEC;
  upDateTimerSec(TIMER_SEC);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(score === CARROT_COUNT);
      return;
    }
    upDateTimerSec(--remainingTimeSec);
  }, 1000);
}

function upDateTimerSec(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  gameTimer.innerHTML = `${minutes}:${seconds}`;
}

// 5. gameStop

function gameStop() {
  started = false;
  hiddenStopBtn();
  gameFinishBanner.showWithText(`REPALY❓`);
  stopGameTimer();
  soundPlay(alertSound);
  soundStop(bgSound);
}

function hiddenStopBtn() {
  gameBtn.style.visibility = `hidden`;
}
function stopGameTimer() {
  clearInterval(timer);
}

// 6. finishgame
function finishGame(win) {
  started = false;
  if (win) {
    soundPlay(winSound);
  } else {
    soundPlay(bugSound);
  }
  hiddenStopBtn();
  stopGameTimer();
  soundStop(bgSound);
  gameFinishBanner.showWithText(win ? "YOU WON 🎉" : "YOU LOST 💩");
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}
