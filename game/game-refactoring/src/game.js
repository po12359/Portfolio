`use strict`;

import Field from "./field.js";
import * as sound from "./sound.js";
export const Reason = Object.freeze({
  win: `win`,
  lose: `lose`,
  cancle: `cancle`,
});
export class GameBuilder {
  withGameDuration(duraition) {
    this.duraition = duraition;
    return this;
  }

  withCarrotCount(count) {
    this.carrotCount = count;
    return this;
  }
  withBugCount(count) {
    this.bugCount = count;
    return this;
  }
  build() {
    return new Game(this.carrotCount, this.bugCount, this.duraition);
  }
}
const level =
  //
  [{ level1: 1 }, { level2: 2 }, { level3: 3 }, { level4: 4 }, { level5: 5 }];
class Game {
  constructor(carrotcount, bugcount, duraition) {
    this.carrotcount = carrotcount;
    this.bugcount = bugcount;
    this.duraition = duraition;
    this.gameField = new Field(this.carrotcount, this.bugcount);
    this.gameField.setItemClickListener(this.itemClickRemove);
    this.gameBtn = document.querySelector(`.game__button`);
    this.gameTimer = document.querySelector(`.game__timer`);
    this.gameScore = document.querySelector(`.game__score`);
    this.score = 0;
    this.timer = undefined;
    this.started = false;
    this.gameBtn.addEventListener(`click`, () => {
      this.started ? this.stop(Reason.cancle) : this.start();
      // started = true => gamestop()
      // started = false => gameStart()
    });
  }
  setNavbarBtn(showOnBtn) {
    this.showOnBtn = showOnBtn;
  }
  setGameStopBtn(stopOnClick) {
    this.stopOnClick = stopOnClick;
  }
  start() {
    this.started = true;
    this.init();
    this.showStopBtn();
    this.showTiemrAndScore();
    this.startTimer();
    sound.background();
  }

  nextStage() {
    this.started = true;
    this.init(level);
    this.showStopBtn();
    this.showTiemrAndScore();
    this.startTimer();
    sound.background();
  }
  init(level) {
    if (level === 1) {
      this.gameField.itemInIt(this.carrotcount, this.bugcount);
    }
    if (level === 2) {
      this.gameField.itemInIt(this.carrotcount + 2, this.bugcount + 2);
    }
    if (level === 3) {
      this.gameField.itemInIt(this.carrotcount + 4, this.bugcount + 4);
    }
    if (level === 4) {
      this.gameField.itemInIt(this.carrotcount + 4, this.bugcount + 4);
    }
    this.score = 0;
    this.gameScore.innerText = this.carrotcount;
    this.gameField.itemIn(this.carrotcount, this.bugcount);
  }
  showStopBtn() {
    this.gameBtn.style.visibility = `visible`;
    let icon = document.querySelector(`.fas`);
    icon.classList.add(`fa-stop`);
    icon.classList.remove(`fa-play`);
  }

  showTiemrAndScore() {
    this.gameTimer.style.visibility = `visible`;
    this.gameScore.style.visibility = `visible`;
  }
  startTimer() {
    let reminingTimer = this.duraition;
    this.updateTimerSec(reminingTimer);
    this.timer = setInterval(() => {
      if (reminingTimer <= 0) {
        clearInterval(this.timer);
        this.stop(Reason.cancle);
        sound.bug();
        return;
      }
      this.updateTimerSec(--reminingTimer);
    }, 1000);
  }
  updateTimerSec(sec) {
    const minutes = Math.floor(sec / 60); // 1/60 = 0.000 = 0
    const seconds = sec % 60; // sec= 65 65/65 = 1.5 => 1 = minutes 0.5 = seconds
    this.gameTimer.textContent = `${minutes}:${seconds}`;
  }

  stop(reason) {
    this.started = false;
    this.stopTimer();
    this.hideBtn();
    sound.backgroundStop();
    this.stopOnClick && this.stopOnClick(reason);
  }
  itemClickRemove = (item) => {
    if (!this.started) {
      return;
    }
    if (item === `.carrot`) {
      //target.matches(`.carrot`) => css seloector가 일치하면 가지고 오는 api
      this.score++;
      this.upDateScoreBoard();
      if (this.score === this.carrotcount) {
        this.stop(Reason.win);
      }
    } else if (item === `.bug`) {
      this.stop(Reason.lose);
    }
  };

  upDateScoreBoard() {
    this.gameScore.textContent = this.carrotcount - this.score;
  }

  stopTimer() {
    clearInterval(this.timer);
  }
  hideBtn() {
    this.gameBtn.style.visibility = `hidden`;
  }
}
