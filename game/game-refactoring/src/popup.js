`use strict`;
export default class PopUp {
  constructor() {
    this.popUp = document.querySelector(`.pop-up`);
    this.popUpRefresh = document.querySelector(`.pop-up__refresh`);
    this.popUpMessage = document.querySelector(`.pop-up__message`);
    this.popUpNextStage = document.querySelector(`.pop-up__nextStage`);
    this.popUpRefresh.addEventListener(`click`, () => {
      this.hide();
      this.onClick && this.onClick();
    });
  }

  clickListener(onClick) {
    this.onClick = onClick;
  }
  nextClickListener(onClick) {
    this.onClick = onClick;
  }
  showWithText(text) {
    this.popUp.classList.remove(`hide`);
    this.popUpMessage.textContent = text;
  }

  hide() {
    this.popUp.classList.add(`hide`);
  }
}
