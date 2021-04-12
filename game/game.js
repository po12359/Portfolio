"use strict";

const CARROT_SIZE = 80;
//당근 img의 크기
const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;
//타이머 시간

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect(); //field의 정보
const gameBtn = document.querySelector(".game__button");
const timerIndicator = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop-up__message");
const popUpRefresh = document.querySelector(".pop-up__refresh");

const carrotSound = new Audio("./sound/carrot_pull.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/bg.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");

let started = false;
let score = 0;
let timer = undefined;

field.addEventListener("click", onFieldClick);
//field를 클릭할시 이벤트함수를 실행해줘
function onFieldClick(event) {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches(".carrot")) {
    // web apis로 string이 제대로 선택되었는지 확인
    // 당근!!
    target.remove();
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    finishGame(false);
  }
}
// 당근이 제대로 선택되었으면
// 당근을 지워조!!
// 그리고 스코어에 1을 추가해!!
// 그리고 당근사운드를 실행해!!
// 그리고 스코어가 남은 캐럿수랑 같으면 게임을 이겼다고해
/* 벌레를 선택하면 게임을 실패했다고 해*/
gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});
//게임진행을 하지 않고 있으면 게임을 멈추고  아니면 계속 게임을 시작해
popUpRefresh.addEventListener("click", () => {
  startGame();
  hidePopUp();
  /*다시 시작 버튼을 누르면 게임을 시작하고
  팝업창을 숨겨줘 */
});

function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
  /*게임을 시작하면 
  보여줘 멈추는 버튼과 타이머와 스코어판을
  그리고 시작해 타이머를 
  그리고 시작사운드를 시작해
  */
}
function initGame() {
  score = 0;
  field.innerHTML = "";
  gameScore.innerText = CARROT_COUNT;
  // 벌레와 당근을 생성한뒤 field에 추가해줌
  addItem("carrot", CARROT_COUNT, "img/carrot.png");
  addItem("bug", BUG_COUNT, "img/bug.png");
  /* 스코어가 0이면 필드에 아무것도 없어. 그런데 게임스코어에 당근갯수가 추가되면
   당근과 벌레의 아이템을 추가해줘 */
}
function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  //field의 시작점
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  //field의 끝
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`; //x좌표는 x1 ~ x2
    item.style.top = `${y}px`; //y좌표는 y1 ~ y2
    field.appendChild(item);
  }
  //조건문 for만큼 아이템을 추가해!!!!
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// 게임을 중지시킨 경우
function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  showPopUpWithText("REPLAY❓");
  playSound(alertSound);
  stopSound(bgSound);
  /*게임을 중지시키고 게임이 멈추면 타이머를 멈추고 게임버튼을 숨기고 
  팝업창을 보여주고 경고사운드를 키고 시작사운드를 멈춰고 */
}
// 게임의 결과가 나온경우 졌거나 이겼거나
function finishGame(win) {
  started = false;
  hideGameButton();
  if (win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  showPopUpWithText(win ? "YOU WON 🎉" : "YOU LOST 💩");
  /* 게임이 끝나면 이겼으면 이긴 사운드를 아니면 벌레사운드를 틀어줘
  그리고 타이머를 멈추고 시작사운드를 멈춰 
  그리고 팝업창에 이겼으면 이긴 텍스를 지면 진 텍스를 켜줘 */
}

function showStopButton() {
  const icon = gameBtn.querySelector(".fas");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gameBtn.style.visibility = "visible";
  //스탑버튼을 만들건데 (게임을 시작했을 때)
  //시작버튼을 누르면 스탑버튼이 나와 (클래스를 이용)
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
  //게임이 끝나면 버튼을 숨겨줭!!!!
}

function showTimerAndScore() {
  timerIndicator.style.visibility = "visible";
  gameScore.style.visibility = "visible";
  //게임이 시작하면 스코어랑 타이머를 출력해줘!!
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC; //20sec
  updateTimerText(remainingTimeSec); //타이머 시간을 20초로 적어줘
  timer = setInterval(() => {
    //setinterval 일정한 간격으로 실행한다.
    if (remainingTimeSec <= 0) {
      clearInterval(timer); // clearinterval은 중지시키는 api
      finishGame(score === CARROT_COUNT);
      return;
    } //만약 시간이 0이면 중지시키고 피니시게임 함수에 당근 갯수를 전달해줘
    updateTimerText(--remainingTimeSec);
    //그리고 타이머시간을 계속 줄일거야!
  }, 1000);
  /*  */
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  //Math.floor() 메소드는 인수로 전달받은 값과 같거나
  //작은 수 중에서 가장 큰 정수를 반환합니다.
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerIndicator.innerHTML = `${minutes}:${seconds}`;
}

function showPopUpWithText(text) {
  popUpText.innerText = text;
  popUp.classList.remove("pop-up--hide");
  /*보여줘  팝업창에 내가 쓴 텍스트를 추가해주고 숨기는 클라스를 지워줘*/
}

function hidePopUp() {
  popUp.classList.add("pop-up--hide");
}
//팝업창을 숨겨줘

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
  //스코어 보드에 당근갯수랑 스코어를 빼서 출력해
}

// addItem("carrot", CARROT_COUNT, "img/carrot.png");
// addItem("bug", BUG_COUNT, "img/bug.png");
