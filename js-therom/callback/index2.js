`use strict`;

console.log(`1`);
setTimeout(() => {
  console.log(`2`);
}, 1000);
console.log(`3`);

function printImmediately(print) {
  print();
}
printImmediately(() => console.log(`hello`));
