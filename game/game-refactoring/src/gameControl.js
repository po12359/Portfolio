"use strict";
import * as sound from "./sound.js";
import Field from "./playField.js";

export const FinishReason = Object.freeze({
  win: "win",
  bug: "bug",
  timeout: "timeout",
});

export const StopReason = Object.freeze({
  start: "start",
  pause: "pause",
});

export class GameBuilder {
  iconCount(count) {
    this.count = count;
    return this;
  }
  gameDuration(duration) {
    this.duration = duration;
    return this;
  }

  build() {
    return new Game(this.count, this.duration);
  }
}

class Game {
  constructor(iconCount, gameDuration) {
    this.iconCount = iconCount;
    this.gameDuration = gameDuration;
    this.gameDurationRefresh = gameDuration;

    this.IconCount;
    this.DurationCount;

    this.playBtn = document.querySelector(".play_button");
    this.countSpan = document.querySelector(".count");
    this.stage = document.querySelector(".stage");

    this.intervalId;
    this.veryFirstStart = true;

    this.field = new Field();
    this.field.setIconClickEvent(this.fieldIconClick.bind(this));

    this.playBtn.addEventListener("click", (event) => {
      if (this.veryFirstStart) {
        this.startFromTheVeryFirst();
      } else if (!this.veryFirstStart) {
        if (this.pressedBtn(event) === "fa-play") {
          console.log(`Playagain`);
          this.pauseToStart(StopReason.start);
        } else if (this.pressedBtn(event) === "fa-pause") {
          console.log(`pause`);
          this.startToPause(StopReason.pause);
        }
      }
    });
  }

  // 여기도 바인딩? yep
  startFromTheVeryFirst() {
    console.log("start");
    // 와..... 이거이거 오래걸렸다.refresh랑 pausetostart랑 시간타이머가 겹쳐서 계속 오류났는데 이렇게 해결했다.
    // 사실 기존에 time을 새로 설정했었는데 그걸 잘 생각했다면 이건 금방 생각해냈을텐데.
    // 새로운 신박한걸 생각하지 말고 기존에 있는것을 토대로 어떻게 다시 재구성할지 생각하자.
    this.gameDuration = this.gameDurationRefresh;
    this.startTimer();
    // this.stopGameTimer();
    this.showPlayBtn();
    this.gameBtnChange("pause");
    sound.playBgFromTheStart();
    this.field.displayAllIcon(this.iconCount);
    this.countCarrotFunc();
    this.veryFirstStart = false;
  }

  startToPause(reason) {
    this.gameBtnChange("play");
    sound.stopBgSound();
    this.stopGameTimer();
    this.onFinishBanner && this.onFinishBanner(reason);
  }

  pauseToStart(reason) {
    this.gameBtnChange("pause");
    sound.playBgSound();
    this.startTimer();
    //pause에서 start로 넘어갈때는 duration을 초기화하면 안됨
    this.onFinishBanner && this.onFinishBanner(reason);
  }

  finish(reason) {
    this.hidePlayBtn();
    this.stopGameTimer();
    sound.stopBgSound();
    console.log(reason);
    this.onFinishBanner && this.onFinishBanner(reason);
    console.log("finish");
    return;
  }

  onFinishBannerEvent(func) {
    this.onFinishBanner = func;
  }

  // 여기도 바인딩? yep
  fieldIconClick(icon) {
    if (icon === "carrot") {
      this.countCarrotFunc();
    } else if (icon === "bug") {
      this.finish(FinishReason.bug);
      //여기서도 '왜 배경음악중지가 없는데 배경음악이 중지될까?' 라는 의문이 들면 이전 알고리즘으로 차근차근 올라가보자
    }
  }

  updateTimer(count) {
    const timeDisplay = document.querySelector(".time_display");
    timeDisplay.innerHTML = count < 10 ? `00:0${count}` : `00:${count}`;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.gameDuration < 0) {
        this.finish(FinishReason.timeout);
        // this.stop
        return;
      }
      this.updateTimer(this.gameDuration);
      --this.gameDuration;
    }, 1000);
  }

  stopGameTimer() {
    clearInterval(this.intervalId);
  }

  countCarrotFunc() {
    const carrotCount = this.field.carrotCount.length;
    if (carrotCount < 1) {
      this.finish(FinishReason.win);
      this.countSpan.innerHTML = carrotCount;
    } else {
      this.countSpan.innerHTML = carrotCount;
    }
  }

  gameBtnChange(btn) {
    let button;
    switch (btn) {
      case "play":
        button = `<i class="fas fa-play"></i>`;
        break;
      case "pause":
        button = `<i class="fas fa-pause"></i>`;
        break;
      default:
        throw new Error("unvalid button");
    }
    this.playBtn.innerHTML = button;
  }

  showPlayBtn() {
    this.playBtn.style.visibility = "visible";
  }

  hidePlayBtn() {
    this.playBtn.style.visibility = "hidden";
  }

  pressedBtn(event) {
    const whichBtn = event.target.classList[1];
    return whichBtn;
  }

  updateStage(stageNum) {
    this.stage.innerHTML = `Stage ${stageNum}`;
  }
}
