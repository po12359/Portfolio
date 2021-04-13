"use strict";

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.gameField = document.querySelector(`.game__field`);
    this.fieldRect = gameField.getBoundingClientRect();
    this.field.addEventLiistener(`click`, this.onClick);
  }
  init() {
    gameField.innerHTML = ``;
    this._addItem(`carrot`, CARROT_COUNT, `img/carrot.png`);
    this._addItem(`bug`, CARROT_COUNT, `img/bug.png`);
  }
  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }
  onClick(e) {
    const target = e.target;
    if (target.matches(`.carrot`)) {
      target.remove();
      soundPlay(carrotSound);
      this.onItemClick && this.onItemClick(`carrot`);
    } else if (target.matches(`.bug`)) {
      this.onItemClick && this.onItemClick(`bug`);
    }
  }

  _addItem(className, num, src) {
    this.x1 = 0;
    this.y1 = 0; // (x,y) = (0,0)
    this.x2 = this.fieldRect.width - CARROT_SIZE;
    this.y2 = this.fieldRect.height - CARROT_SIZE;

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
}
