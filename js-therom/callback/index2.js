`use strict`;
console.log("1");
setTimeout(() => {
  console.log(`2`);
}, 2000);
console.log(`3`);

{
  function soSick() {
    setTimeout(3000);
  }
  soSick(() => console.log(`hello!`));
}
// 비동기
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log(new Date()), 3000);

//동기식
function printImmediately(print) {
  print();
}
printImmediately(() => console.log(`so fall`));
