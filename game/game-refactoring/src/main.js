"use strict";
import PopUp from "./popup.js";
import * as sound from "./sound.js";
import { GameBuilder, Reason } from "./game.js";

const game = new GameBuilder()
  .gameDuration(3)
  .carrotCount(1)
  .bugCount(1)
  .build();
const gameFinishBanner = new PopUp();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.win:
      message = "YOU WON 🎉";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST 💩";
      sound.playLost();
      break;
    case Reason.cancel:
      message = "Replay❓";
      sound.playAlert();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
