`use strict`;
import PopUp from "./popup.js";
import * as sound from "./sound.js";
import { GameBuilder, Reason } from "./game.js";

const game = new GameBuilder()
  .withCarrotCount(3)
  .withBugCount(3)
  .withGameDuration(10)
  .build();

const popUp = new PopUp();
game.setGameStopBtn((reason) => {
  let message;
  switch (reason) {
    case Reason.win:
      message = `Next Level👍`;
      sound.win();
      break;
    case Reason.lose:
      message = `You Lose👎`;
      sound.bug();
      break;
    case Reason.cancle:
      message = `Replay❓`;
      sound.alert();
      break;
  }
  popUp.showWithText(message);
});
popUp.clickListener(() => {
  game.start();
});
