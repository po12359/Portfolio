`use strict`;
import * as sound from "./sound-text.js";
import Field from "./field-text.js";
const TIMER_SEC = 20;
export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    //
    this.gameBtn = document.querySelector(`.game__btn`);
    this.gameBtn.addEventListener(`click`, () => {
      if (this.started) {
        this.stop();
      } else {
        this.start();
      }
    });
    this.gameScore = document.querySelector(`.game__score`);
    this.gameTimer = document.querySelector(`.game__timer`);
    //
    this.field = new Field(this.carrotCount, this.bugCount);
    this.field.setClickListner(this.onItemClick);
    //
    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }
  onItemClick = (e) => {
    if (!this.started) {
      return;
    }
    if (e === `.carrot`) {
      this.score++;
      this.updateScoreBoard();
      if (this.score === this.carrotCount) {
        this.finish(true);
      }
    } else if (e === `.bug`) {
      this.finish(false);
    }
  };

  updateScoreBoard() {
    this.gameScore.innerText = this.carrotCount - this.score;
  }
  start() {
    this.started = true;
    this.itemInGame();
    this.showStopBtn();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBackground();
  }

  showTimerAndScore() {
    this.gameTimer.style.visibility = "visible";
    this.gameScore.style.visibility = "visible";
  }
  setGameListener(onGameStop) {
    this.onGameStop = onGameStop;
  }
  stop() {
    this.started = false;
    this.hiddenStopBtn();
    this.stopGameTimer();
    sound.playAlert();
    sound.playBackground();
    this.onGameStop && this.onGameStop(`cancel`);
  }
  startGameTimer() {
    let remainingTimeSec = TIMER_SEC;
    this.upDateTimerSec(TIMER_SEC);
    this.timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        clearInterval(this.timer);
        this.finish(this.score === this.carrotCount);
        return;
      }
      this.upDateTimerSec(--remainingTimeSec);
    }, 1000);
  }

  upDateTimerSec(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    this.gameTimer.innerHTML = `${minutes}:${seconds}`;
  }

  showStopBtn() {
    const icon = document.querySelector(`.fas`);
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
    this.gameBtn.style.visibility = `visible`;
  }

  itemInGame() {
    this.score = 0;
    this.field.init();
    this.gameScore.innerText = this.carrotCount;
  }

  finish(win) {
    this.started = false;
    if (win) {
      sound.playWin();
    } else {
      sound.playBug();
    }
    this.hiddenStopBtn();
    this.stopGameTimer();
    sound.stopBackground();
    this.onGameStop && this.onGameStop(win ? "win" : "lose");
  }

  hiddenStopBtn() {
    this.gameBtn.style.visibility = `hidden`;
  }
  stopGameTimer() {
    clearInterval(this.timer);
  }
}
