`use strict`;

import * as sound from "./sound-text.js";
const CARROT_SIZE = 80;
export default class Field {
  //constructor = 붕어빵틀
  // 당근갯수,벌레갯수,dom의 field요소와 field의 이벤트 요소를
  // 실행할 수 있는 붕어빵틀을 만들었어
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    //무엇을 생산할꺼야? 난 당근갯수랑, 벌레갯수를 만들어낼거야.
    this.gameField = document.querySelector(`.game__field`);
    this.fieldRect = this.gameField.getBoundingClientRect();
    this.onClick = this.onClick.bind(this);
    //field의 dom요소를 가지고 와서 생산한다.
    this.gameField.addEventListener(`click`, this.onClick);
  }
  setClickListner(onItemClick) {
    this.onItemClick = onItemClick;
    /*  onItemClick = (e) => {
    if (!this.started) {
      return;
    }
    if (e === `.carrot`) {
      this.score++;
      this.updateScoreBoard();
      if (this.score === this.carrotCount) {
        score가 선언한 당근갯수랑 똑같으면 이긴 함수를 선언한다.
        this.finish(true);
      }
    } else if (e === `.bug`) {
      this.finish(false);
    }
  };
 */
  }
  init() {
    this.gameField.innerHTML = ``; //gamefield를 undifeind로 만들어 줘
    this._addItem(`carrot`, this.carrotCount, `img/carrot.png`);
    this._addItem(`bug`, this.bugCount, `img/bug.png`);
  }
  //프라이빗한 함수란 뜻으로 외부에서 사용하지 않을거란 뜻이다.
  _addItem(className, num, src) {
    const x1 = 0;
    const y1 = 0; // (x,y) = (0,0)
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;

    for (let i = 0; i < num; i++) {
      const img = document.createElement(`img`);
      img.setAttribute(`class`, className);
      img.setAttribute(`src`, src);
      img.style.position = `absolute`; // free positon
      img.style.cursor = `pointer`;
      this.gameField.appendChild(img); // img in field
      const x = randomNumber(x1, x2); // x == width
      const y = randomNumber(y1, y2); // y == height
      img.style.top = `${y}px`;
      img.style.left = `${x}px`;
    }
  }
  onClick(e) {
    const target = e.target;
    if (target.matches(`.carrot`)) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(`.carrot`);
    } else if (target.matches(`.bug`)) {
      this.onItemClick && this.onItemClick(`.bug`);
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
