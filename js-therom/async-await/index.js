// # async & await

// - 프로미스 체이닝을 계속 하다보면 코드의 가독성이 떨어짐
// - async 와 await는 Promise를 간결/간편하고 동기적으로 실행되는것 처럼 보이게 만들어주는 API
// - async 와 await는 새로운 것이 추가 된게 아니라, 기존에 존재하는 Promise 위에 조금 더 간편한 API를 제공함 이런 것을 syntactic sugar 라고 한다 (Class도 마찬가지..)

// # 비동기 처리를 반드시 해야하는 이유

// - JS 엔진은 블록({})안에 코드를 동기적으로 실행(처리) 함
// - 시간이 오래 걸리는 코드를 비동기 처리를 전혀 하지 않으면, 다음 코드에 문제가 발생할 수 있음
// - 예를 들어 서버에서 data를 받아와서 웹페이지에 출력하는 시나리오가 있다
// - data를 받아 오는데 10초가 걸림, 근데 비동기 처리를 안하면 텅 빈 data를 출력 해버림
// - **Promise 상황극**: 내가 언제 유저의 data를 받아 올진 모르겠지만 내가 약속할께, Promise라는 object를 가지고 있으면, 여기에 니가 then 이라는 콜백함수만 등록해 놓으면, 유저의 data가 준비 되는대로 니가 등록한 콜백함수를 불러줄께

// ## 1. async

// ### 1.1 기존 방식(Promise)

// 1. 함수 선언식
async function fetchUser() {
  return `ellie`;
}

// 2. 함수 표현식
const fetchUser = async function () {
  return `ellie`;
};

// 3. 화살표 함수
const fetchUser = async () => {
  return `ellie`;
};

// fetchUser().then(data => console.log(data)); // 함수로 바로 호출
const user = fetchUser(); // 변수에 할당해서 호출
user.then((data) => console.log(data));
console.log(user);

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
//

//   ## 2. await

// ### 2.1 기존 방식(Promise)

// - 콜백 지옥이 떠오름..
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getApple() {
  return delay(1000).then(() => `🍎`);
}
function getBanana() {
  return delay(1000).then(() => `🍌`);
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then((result) => console.log(result));

// ### 2.2 await 사용 (error 처리: try/catch문)

// - await는 async 함수 내부에만 사용 가능
// - getApple과 getBanana는 서로 독립적인 코드인데 순차적으로 실행됨 → 비효율
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw new Error(`error: apple`); // error 발생
  return `🍎`;
}
async function getBanana() {
  await delay(1000);
  // throw new Error(`error: banana`);
  return `🍌`;
}

async function pickFruits() {
  let apple = null;
  try {
    apple = await getApple();
  } catch (error) {
    console.log(error);
  }
  let banana = null;
  try {
    banana = await getBanana();
  } catch (error) {
    console.log(error);
  }
  return `${apple} + ${banana}`;
}
pickFruits().then((result) => console.log(result));

//
//
//
//
//
//
//
//
// 2.3 await 병렬 처리
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return `🍎`;
}
async function getBanana() {
  await delay(1000);
  return `🍌`;
}

// 방법 1: 무식한 코드
async function pickFruits() {
  // 프로미스 객체는 선언 즉시 바로 실행됨
  // getApple과 getBanana는 병렬(독립적)로 실행됨
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 동기화
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then((result) => console.log(result));

// 방법 2: Promise APIs 사용
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => {
    return fruits.join(` + `);
  });
  // return Promise.all([getApple(), getBanana()]);
}
pickAllFruits().then(console.log);

// 번외: 비동기 처리중 먼저 리턴하는 녀석만 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
