export default class Banner {
  constructor() {
    this.Stage = 1;
    this.finishBanner = document.querySelector(".popup");
    this.gameResult = this.finishBanner.querySelector("span");
    this.replayBtn = document.querySelector(".replay");
    this.nextStageBtn = document.querySelector(".next_stage");
    this.replayBtn.addEventListener("click", () => {
      console.log(`replayBtn`);
      this.OnReplayClick && this.OnReplayClick();
      // console.log(this.OnReplayClick());
      // 아 이거를 로그하는것만으로도 실행이 되는구나.. 그래서 리플레이가 무한반복된거구나
      this.hide();
    });
    this.nextStageBtn.addEventListener("click", (event) => {
      this.Stage += 1;
      console.log(`nextStageBtn`);
      this.onNextBtnClick &&
        this.onNextBtnClick(this.Stage).startFromTheVeryFirst();
      this.onNextBtnClick(this.Stage).updateStage(this.Stage);
      this.hide();
    });
  }

  setOnReplayClick(func) {
    this.OnReplayClick = func;
  }

  setOnNextStageClick(func) {
    this.onNextBtnClick = func;
  }

  hide() {
    this.finishBanner.classList.add("non_display");
  }

  show(result) {
    this.finishBanner.classList.remove("non_display");
    let message;
    switch (result) {
      case "win":
        message = "you won!  replay?🎉";
        break;
      case "lose":
        message = "You clicked the bug😝 wanna play again?";
        break;
      case "timeout":
        message = `Time out..😅 Wanna play again?`;
        break;
      case "restart":
        message = `Restart?`;
        break;
      default:
        throw new Error("unvalid mesage");
    }
    this.gameResult.innerHTML = message;
  }

  hideNextStageBtn() {
    this.nextStageBtn.classList.add("non_display");
  }

  showNextStageBtn() {
    this.nextStageBtn.classList.remove("non_display");
  }
}
