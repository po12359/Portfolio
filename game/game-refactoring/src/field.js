`use strict`;

import * as sound from "./sound.js";
const CARROT_SIZE = 80;
export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.gameField = document.querySelector(`.game__field`);
    this.fieldRect = this.gameField.getBoundingClientRect();
    this.gameField.addEventListener(`click`, this.onClick);
  }
  setItemClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }
  addItem(className, num, src) {
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
  itemIn() {
    this.gameField.innerHTML = ``;
    this.addItem(`carrot`, this.carrotCount, `img/carrot.png`);
    this.addItem(`bug`, this.bugCount, `img/bug.png`);
  }

  itemInIt(a, b) {
    this.gameField.innerHTML = ``;
    this.addItem(`carrot`, a, `img/carrot.png`);
    this.addItem(`bug`, b, `img/bug.png`);
  }
  onClick = (e) => {
    const target = e.target;
    if (target.matches(`.carrot`)) {
      target.remove();
      sound.carrot();
      this.onItemClick && this.onItemClick(`.carrot`);
    } else if (target.matches(`.bug`)) {
      sound.bug();
      this.onItemClick && this.onItemClick(`.bug`);
    }
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
