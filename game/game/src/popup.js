`use strict`;

export default class PopUp {
  //exprot = class를 외부에서도 읽ㅇ를 수 있다.
  constructor() {
    this.popUp = document.querySelector(`.pop__up`);
    this.popUpMessage = document.querySelector(`.pop__up-message`);
    this.popUpReplay = document.querySelector(`.pop__up-replay`);
    this.popUpReplay.addEventListener(`click`, () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }
  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUp.classList.remove("pop__up-hide");
    this.popUpMessage.innerText = text;
  }
  hide() {
    this.popUp.classList.add("pop__up-hide");
  }
}
