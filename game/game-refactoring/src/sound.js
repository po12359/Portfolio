`use strict`;
// sound
const carrotSound = new Audio(`sound/carrot_pull.mp3`);
const bugSound = new Audio(`sound/bug_pull.mp3`);
const alertSound = new Audio(`sound/alert.wav`);
const bgSound = new Audio(`sound/bg.mp3`);
const winSound = new Audio(`sound/game_win.mp3`);
function playSound(item) {
  item.play();
}
export function carrot() {
  playSound(carrotSound);
}

export function bug() {
  playSound(bugSound);
}

export function alert() {
  playSound(alertSound);
}

export function background() {
  playSound(bgSound);
}

export function win() {
  playSound(winSound);
}

export function backgroundStop() {
  bgSound.pause();
}
