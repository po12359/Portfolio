`use strict`;

const fruits = [`a`, `b`, `c`];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {
  console.log(fruit);
}
fruits.forEach((fruit) => {
  console.log(fruit);
});

fruits.push(`d`, `e`);
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.shift(0);
console.log(fruits);
fruits.unshift(0);
console.log(fruits);

fruits.push(`f`, `h`, `r`, `k`);
fruits.unshift(`a`);
console.log(fruits);
fruits.splice(1, 5);
console.log(fruits);

const fruits2 = [`dd`, `ww`];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
