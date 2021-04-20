"use strict";
"use strict";

import { GameBuilder, FinishReason, StopReason } from "./gameControl.js";
import Banner from "./finishBanner.js";
import * as sound from "./sound.js";

const finishBanner = new Banner();

let Stage = 1;

const gameStarter = (level) => {
  const IconCount = level * 2;
  const Duration = level + 4;
  const game = new GameBuilder() //
    .iconCount(IconCount)
    .gameDuration(Duration)
    .build();
  finishBannerFunc(game);
  return game;
};

gameStarter(Stage);
// stage가 중첩되서 실행되는 이유는 아무래도... main.js에서 gameStarter(stage)
// 가 노출되어있기 때문이 아닌가 싶다.
// 근데 리플레이버튼은 중첩없이 잘 돌아간다. 그이유는?
//

function finishBannerFunc(game) {
  game.onFinishBannerEvent((reason) => {
    finishBanner.hideNextStageBtn();
    switch (reason) {
      case FinishReason.win:
        finishBanner.show("win");
        sound.playWinSound();
        finishBanner.showNextStageBtn();
        break;
      case FinishReason.bug:
        finishBanner.show("lose");
        break;
      case FinishReason.timeout:
        finishBanner.show("timeout");
        sound.playLoseSound();
        break;
      case StopReason.start:
        finishBanner.hide();
        break;
      case StopReason.pause:
        finishBanner.show("restart");
        break;
      default:
        throw new Error("unvalid reason");
    }
  });

  finishBanner.setOnNextStageClick(gameStarter);

  finishBanner.setOnReplayClick(game.startFromTheVeryFirst.bind(game));
}

// 왜이렇게 replay랑 finish가 중복되서 실행되는거지?
// 백업한거랑 비교하고나서 알았다

// 그렇기 떄문에 항상 기존의 코드에서 실험하고자할때 기존 코드를 백업하고 , 문제가 생길경우 기존 코드와 비교해가며 버그를 찾아내자!

// 중복되는 이유를 비교해가면서 알아내면 next버튼을 클릭했을때
// 이전 stage가 또다시 실행되는것을 막을 수 있는 방법을 발견할 지 모른다.

// 그 이유는 startFromTheVeryFirst 함수에서 stopGameTimer가 실행되었기 때문.
// finish게임에서 stopTimer하기때문에 다시 시간을 멈출필요가 없는데 startFromTheVeryFirst에서 시간을 또다시 초기화했기 때문에
// finish와 replay가 중복으로 발생했던것이다. 왜그런걸까?

// 클래스를 취소 할 수 있는 방법이 또 있을까?
// static?
