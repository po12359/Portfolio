`use strict`;
import PopUp from "./popup-text.js";
import Game from "./game-text.js";

const gameFinishiBanner = new PopUp();
gameFinishiBanner.setClickListener(() => {
  game.start();
});

const game = new Game(20, 20, 20);
game.setGameListener((reason) => {
  let message;
  switch (reason) {
    case `win`:
      message = `YOU WON`;
      break;
    case `lose`:
      message = `YOU LOSE`;
      break;
    case `cancel`:
      message = `Replay`;
      break;
    default:
      throw new Error(`get out here!`);
  }
  gameFinishiBanner.showWithText(message);
});
