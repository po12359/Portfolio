// # 자료구조

// - 비슷한 타입의 데이터(object)들을 묶어서 한곳에 보관해 놓는 것
// - 대부분의 프로그래밍 언어들은 동일한 타입의 object만 담을 수 있는데 JS는 동적타입언어라 이것저것 담을 수 있음, 그러나 동일한 타입만 담는 것을 규칙으로함.
// - 어떤 방식/형식으로 데이터를 담냐에 따라서 굉장히 많은 타입이 존재
// - 객체는 서로 연관된 특징과 행동들을 묶어 놓은것들을 의미함 (자료구조와 다름)
// - 삽입, 검색, 정렬, 삭제를 고려해서 자료구조중 가장 효율적인 것을 사용하는것이 중요
// - 자료구조중 하나가 **배열**이다.

// 1. Declaration (선언)

const arr1 = new Array();
const arr2 = [1, 2];

//
//
//
//
//
//
//. Index position (인덱스 위치)
const fruits = [`🍎`, `🍌`];
console.log(fruits); // > ["🍎", "🍌"]
console.log(fruits.length); // > 2
console.log(fruits[0]); // > 🍎
console.log(fruits[1]); // > 🍌
console.log(fruits[2]); // > undefined
console.log(fruits[fruits.length - 1]); // > 🍌 : 마지막 인덱스에 접근 할 때 방법.

//
//
//
///
///
//
//
//
//
//c 3. Looping over an array

// print all fruits
const fruits = [`🍎`, `🍌`];
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

//
//
//
//
//
//
//
//
//
// //
// ## 4. Addtion, deletion, copy

// - push, pop
// - unshift, shift
// - splice
// - concat

// push: 배열의 끝에 item 추가
fruits.push(`🍓`, `🍑`);
console.log(fruits);

// pop: 배열의 끝에 item 제거
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: 배열의 맨 앞에 item 추가
fruits.unshift(`🍓`, `🍑`);
console.log(fruits);

// shift: 배열의 맨 앞에 item 제거
fruits.shift();
fruits.shift();
console.log(fruits);

// splice: 인덱스 위치의 item 제거
fruits.push(`🍓`, `🍑`, `🍋`);
console.log(fruits); // > ["🍎", "🍌", "🍓", "🍑", "🍋"]
// fruits.splice(1); // > ["🍎"] : 2번째 인자를 생략하면 배열의 마지막 인덱스까지 지워버림
fruits.splice(1, 1);
console.log(fruits); // > ["🍎", "🍓", "🍑", "🍋"] : 1번 인덱스 🍌 제거됨
fruits.splice(1, 1, `🍏`, `🍉`);
console.log(fruits); // > ["🍎", "🍏", "🍉", "🍑", "🍋"] : 1번 인덱스 🍓 제거되고 그 위치에 🍏, 🍉 추가됨

// 두 배열 결합
const fruits2 = [`🌽`, `🥥`];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // > ["🍎", "🍏", "🍉", "🍑", "🍋", "🌽", "🥥"]

// shift, unshift 는 pop, push보다 느리다. (item들의 인덱스 이동이 일어나기 때문)

//
//
//
//
//
//
//
//
//
//
// ## 5. Searching (검색)

// - indexOf, lastIndexOf
// - includes

// indexOf: 인덱스 찾기
console.log(fruits); // > ["🍎", "🍏", "🍉", "🍑", "🍋"]
console.log(fruits.indexOf(`🍎`)); // > 0
console.log(fruits.indexOf(`🍉`)); // > 2
console.log(fruits.indexOf(`🍙`)); // > -1

// includes: 해당 item이 배열에 있는지 체크
console.log(fruits.includes(`🍉`)); // > true
console.log(fruits.includes(`🍙`)); // > false

// lastIndexOf
console.clear();
fruits.push(`🍎`);
console.log(fruits); // > ["🍎", "🍏", "🍉", "🍑", "🍋", "🍎"]
console.log(fruits.indexOf(`🍎`)); // > 0
console.log(fruits.lastIndexOf(`🍎`)); // > 5 : 배열의 끝에서 검색
