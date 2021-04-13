`use strict`;
const CARROT_COUNT = 10;
const CARROT_SIZE = 80;
const TIMER_SEC = 20;
//
//
const gameField = document.querySelector(`.game__field`);
const gameBtn = document.querySelector(`.game__btn`);
const gameScore = document.querySelector(`.game__score`);
const fieldRect = gameField.getBoundingClientRect();
const gameTimer = document.querySelector(`.game__timer`);
const popUp = document.querySelector(`.pop__up`);
const popUpMessage = document.querySelector(`.pop__up-message`);
const popUpReplay = document.querySelector(`.pop__up-replay`);
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

function addItem(className, num, src) {
  const x1 = 0;
  const y1 = 0; // (x,y) = (0,0)
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < num; i++) {
    const img = document.createElement(`img`);
    img.setAttribute(`class`, className);
    img.setAttribute(`src`, src);
    img.style.position = `absolute`; // free positon
    img.style.cursor = `pointer`;
    gameField.appendChild(img); // img in field
    const x = randomNumber(x1, x2); // x == width
    const y = randomNumber(y1, y2); // y == height
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
  }
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

//2. icon in fieldd
function itemInGame() {
  score = 0;
  gameField.innerHTML = ``;
  gameScore.innerText = CARROT_COUNT;
  addItem(`carrot`, CARROT_COUNT, `img/carrot.png`);
  addItem(`bug`, CARROT_COUNT, `img/bug.png`);
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
  strated = false;
  hiddenStopBtn();
  showPopUpWithText(`REPALY❓`);
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
function showPopUpWithText(text) {
  popUp.classList.remove(`pop__up-hide`);
  popUpMessage.innerText = text;
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
  showPopUpWithText(win ? "YOU WON 🎉" : "YOU LOST 💩");
}

function hiddenPopUp() {
  popUp.classList.add("pop__up-hide");
}

// 7. popUp replay

popUpReplay.addEventListener(`click`, () => {
  gameStart();
  hiddenPopUp();
});

// 8. field click event

gameField.addEventListener(`click`, onFieldClick);
function onFieldClick(e) {
  if (!started) {
    return;
  }
  const target = e.target;
  if (target.matches(`.carrot`)) {
    target.remove();
    score++;
    soundPlay(carrotSound);
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches(`.bug`)) {
    finishGame(false);
  }
}
function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}
