// added in ES5
// use this for Vanilla Javascript.
"use strict";

// let (added in ES6)
let name = `ellie`;
console.log(name); // > ellie
name = `hello`;
console.log(name); // > hello

//variable let은 재할당 ok!!!!!

// 1. Block Scope

// let (added in ES6)
let globalName = `global name`;
//
//
//
{
  let name = `ellie`;
  console.log(name); // > ellie
  name = `hello`;
  console.log(name); // > hello
  console.log(globalName); // > global name : 전역 변수 이므로 어느 위치에서든 사용 가능
}
console.log(name); // > error : name 은 변수 선언을 한 {} 내부에서만 사용 가능
console.log(globalName); // > global name

// var (쓰지마라 !)
// var hoisting (변수를 어디에 선언했느냐에 상관없이 항상 가장 위로 선언을 끌어 올려주는 것)
// hoisting : 끌어 올려주다
console.log(age); // > undefined
age = 4;
console.log(age); // > 4
var age;

// has no block scope (블록 범위가 없음)
{
  var age = 4;
}
console.log(age); // > 4 : 블록 안에 변수를 선언해도 아무대서나 사용이 가능함, 스코프 무시

// 2. constent

// 가능한 한 const를 사용하십시오.
// 변수를 변경해야하는 경우에만 let을 사용하십시오.
const maxNumber = 5;
maxNumber = 111; // > error : Uncaught TypeError: Assignment to constant variable.

//

/*const 자료형 일 때,
불변 데이터 유형 : primitive, 고정 된 객체 (예: object.freeze())
변경 가능한 데이터 유형 : 기본적으로 모든 객체(object)는 JS에서 변경 가능합니다.

const 자료형을 선호하는 이유는 다음과 같다.
- security (보안)
- thread safety (스레드 안전성)
- reduce human mistakes (인간의 실수 감소)*/

//

// 3. variable type

// primitive, single item: number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// speicla numeric values: infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = `not a number` / 2;
console.log(infinity); // > Infinity
console.log(negativeInfinity); // > -Infinity
console.log(nAn); // > NaN

// string
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // `${}` -> template literals (string)

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
// let x = undefined
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// - create unique identifiers for objects (개체에 대한 고유 식별자 생성)
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // > false : 동일한 string을 작성해도 다른 symbol로 만들어짐
// - string 이 같을떄 동일한 심볼을 만들고 싶으면..
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // > true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // > error
console.log(
  `value: ${symbol1.description}, type: ${typeof symbol1.description}`
);

// object
// - real-life object, data structure
const ellie = { name: `ellie`, age: 20 };
ellie.age = 21; // 변경됨
// ellie = { name: `gunwoo`, age: 28 }; // > error : Uncaught TypeError: Assignment to constant variable.
// const ellie에 대한 재할당은 가능하지만  ellie를 재선언하는 건  불가능하다!!
// 재선언이 가능한 건 오직 오직 오로직!!!! vriable 뿐!
console.log(ellie);

// 4. Dynamic typing: dynamically typed language
// javascript는 동적인 언어이다!!!

let text = `hello`;
console.log(text.charAt(0)); // > h
console.log(`value: ${text}, type: ${typeof text}`); // > type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // > type: number
text = `7` + 5;
console.log(`value: ${text}, type: ${typeof text}`); // > type: string
text = `8` / `2`;
console.log(`value: ${text}, type: ${typeof text}`); // > type: number
// console.log(text.charAt(0)); // > error : Uncaught TypeError: text.charAt is not a function

// js는 runtime(실행 중)에서 type이 정해지는 데 이때 error가 가자 가장 많이 발생 발생!!!
