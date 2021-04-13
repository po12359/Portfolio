"use strict";
// default = > 파일(모듈)안에서의 유일한 export
export default class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpMessage = document.querySelector(".pop-up__message");
    this.popUpRefreshBtn = document.querySelector(".pop-up__refresh");
    //array function을 사용한 이유는 바인드하려고 !!
    //바인딩이란 this.function을 callback으로 사용하면 this는 사라져버린다. 그래서 array functio으로 호출하거나 나머지는 mdn으로 검색 고고
    this.popUpRefreshBtn.addEventListener("click", () => {
      this._hide();
      /*if(onClick){
        this.onclick();
      } */
      this.onClick && this.onClick();
      //true면 onClick 함수를 실행한다.
      // gameFinishBanner.setClickListener(() => {
      //   game.start();
      // });
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  } // popup class에 등록된 onclick이란 변수에 onclick이란 콜백함수를 등록

  showWithText(text) {
    this.popUpMessage.innerText = text;
    this.popUp.classList.remove("hide");
  }

  _hide() {
    this.popUp.classList.add("hide");
  }
}
