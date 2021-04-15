`use strict`;

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector(`.pop__up`);
    this.popUpMessage = document.querySelector(`.pop__up-message`);
    this.popUpReplay = document.querySelector(`.pop__up-replay`);
    // dom component의 popup을 가지고 온다.
    this.popUpReplay.addEventListener(`click`, () => {
      this.onClick && this.onClick();
      //setClickListener을 가지고 온다.
      this.hide();
    });
  }
  setClickListener(onClick) {
    this.onClick = onClick;
    //mian.js의 secClickListenr에서 start()를 받아와서
    // onClick 변수에 넣어준다.(onClick이 true일 때)
  }
  hide() {
    this.popUp.classList.add(`pop__up-hide`);
  }
  showWithText(text) {
    this.popUp.classList.remove(`pop__up-hide`);
    this.popUpMessage.innerText = text;
  }
}
