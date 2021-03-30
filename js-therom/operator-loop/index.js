//
//
//
//
//
//
//
//
//
// ## 1. String concatenation(문자열 연결)

console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:
'''''
1 + 2 = ${1 + 2}`);
console.log("ellie's \n\tbook");

//
//
//
//
//
//

// ## 2. numberic operators

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1); // 나머지
console.log(1 ** 1); // 제곱

//
//
//
//
// ## 3. incremnet / decrenmnet Operator

// ++ / --
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // > 3, 3 : 바로 업데이트 되서 할당

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // > 3, 4 : 할당 해놓고 업데이트

// 마이너스도 같음

// #### 4. Assignment(할당) operators

// =
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//
//
//
//
// ## 5. Comparison(비교) operators

console.log(10 < 6); // > false
console.log(10 <= 6); // > false
console.log(10 > 6); // > true
console.log(10 >= 6); // > true

//
//
//
//
//
//
// ## 6. Logical(논리적) operators

const value1 = true;
const value2 = 4 < 2; // > flase

// || (or), 첫 번째 true 값을 찾습니다.
console.log(`or: ${value1 || value2 || check()}`); // > value1에서 멈춤

// && (and), 첫 번째 false 값을 찾습니다.
console.log(`or: ${value1 && value2 && check()}`); // > value2에서 멈춤

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("♬");
  }
  return true;
}

// ! (not)
console.log(!value1); // > false

//
//
//
//

// ## 7. Equality(평등) operators

const stringFive = `5`;
const numberFive = 5;

// 느슨한 equality, type 변환 포함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// 엄격한 equality, type 변환 없음
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// Equality 연산을 할 때는, ===, !== 를 사용하자

// reference(주소)에 의한 object equality
const ellie1 = { name: `ellie`, age: 20 };
const ellie2 = { name: `ellie`, age: 20 };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // > false
console.log(ellie1 === ellie2); // > false
console.log(ellie1 == ellie3); // > true
console.log(ellie1 === ellie3); // > true

// object는 메모리에 탑제 될 때,
// 주소가 저장되므로 같은 data를 할당 해도 비교시 false가 된다.

// equality - 퀴즈
console.log(0 == false); // > true
console.log(0 === false); // > false
console.log("" == false); // > true
console.log("" === false); // > false
console.log(null == undefined); // > true
console.log(null === undefined); // > false

//
//
//
// ## 8. Conditional(조건부) operators

const name = `df`;
if (name === `ellie`) {
  console.log(`Welcome, Ellie!`);
} else if (name === `coder`) {
  console.log(`You are amazing coder`);
} else {
  console.log(`unkwnon`);
}

//
//
//
// ## 9. Ternary(삼항) operators

// 조건 ? value1 : value2;
const name = `df`;
console.log(name === `ellie` ? `yes` : `no`); // > no :
// 조건이 true면 ':' 기준 왼쪽 값 출력, false면 오른쪽 값 출력

///
//
//
///
//
// ## 10. Switch statement(스위치 문)

// 여러 if 검사에 사용
// 열거 형 값(enum-like value) 확인에 사용
// TS에서 여러 type 검사에 사용
const browser = `IE`;
switch (browser) {
  case `IE`:
    console.log(`go away!`);
    break;
  case `Chrome`:
  case `Firefox`:
    console.log(`love you!`);
    break;
  default:
    console.log(`some all!`);
    break;
}

//
//
//
//
//
//
// ## 11. Loops

// while loop
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop
// {} 안에 코드가 한 번 실행 되고 조건을 체크함
let i = 3;
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop
// for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--) {
  // 인라인 변수 선언
  console.log(`inline variable for: ${i}`);
}

// Q1. 0에서 10까지 반복하고 짝수 만 인쇄 (continue 사용)
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// Q2. 0에서 10까지 반복하고 8에 도달 할 때까지 숫자를 인쇄합니다 (break 사용)
for (let i = 0; i <= 10; i++) {
  // console.log(`break: ${i}`);
  // if (i === 8) break;
  if (i > 8) break;
  console.log(`break: ${i}`);
}
