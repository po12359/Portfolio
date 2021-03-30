// # HTTP (HyperText Transfer Protocol)

// - 하이퍼텍스트 전송 프로토콜
// - 하이퍼텍스트는 웹사이트에서 이용되어지는 Rink들만 얘기하는 것이 아니라 모든 리소스(문서, 이미지 파일 등)를 포함한다
// - 브라우저 위에서 동작하고 있는 웹사이트나 웹APP 같은 Client들이 어떻게 Server와 통신할수 있는지를 정의 한 것을 HTTP라 한다
// - HTTP를 이용해서 Sever에서 Data를 요청해서 받아올 수 있는 방법으로는 AJAX라는 것이 있다.

// # AJAX (Asynchronous Javascript And XML)

// - 비동기 Javascript, XML
// - 웹페이지에서 동적으로 Sever에게 Data를 주고 받을 수 있는 기술을 의미
// - 대표적인 브라우저 API로는 XMLHttpRequest, fetch 가 존재함
// - AJAX로 Data를 주고 받을 때의 포맷으로 JSON을 많이 사용함

// # JSON (JavaScript Object Notation)

// - Javascript 객체 표기법 (Object {key:value})
// - 가장 간단한 데이터 교환 형식
// - 가벼운 텍스트 기반 구조
// - 읽기 쉬움
// - key-value 의 쌍으로 이루어져 있음
// - 네트워크 연결 간 데이터 직렬화(serialize) 및 전송에 사용
// - 독립적 인 프로그래밍 언어 및 플랫폼 (=프로그래밍 언어나 플랫폼에 상관 없이 쓸 수 있음)

//     거의 모든 언어가 JSON → Object(해당 언어의 문법에 맞춰서..), Object → JSON 으로 변환하는 것을 지원함

// - 아래 2개의 그림만 이해하면 됨

//
//
//
//
//
//
//
///
//
// ## 1. Object to(→) JSON

// - JSON.stringify()

const rabbit = {
  name: `tori`,
  color: `white`,
  size: null,
  birthDate: new Date(),
  // symbol: Symbol(`id`), // JS에만 존재하는 data라서 serialize 되지 않는다
  // 객체 내부에 화살표 함수를 정의하면 this는 전역객체를 가리킴(window)
  // 아래의 함수 문법은 jump: function()과 같음
  jump() {
    // 함수는 object의 data가 아니기 때문에 serialize 되지 않는다
    // why? funtion의 선언은 === let name 오키도키????
    // 값이 나온 것이 아니야!!!!! 호출을 해야해 호출을!
    console.log(`${this.name} can jump!`);
  },
};

let json = JSON.stringify(true); // 불린값
console.log(json);

json = JSON.stringify([`apple`, `banana`]); // 배열
console.log(json);

json = JSON.stringify(rabbit); // 객체
console.log(json);

json = JSON.stringify(rabbit, [`name`, `color`]); // 원하는 key의 값만 serialize 할 수 있음
// 데이터화 하고 싶은 object의 key를 가지고 와서 데이터화 시킨다.
// 해석 : 나는 json을 이용해서 object의 key인 rabbit 안에 있는 value인 name과 color를 가지고 data로만들거얌!!
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  // 콜백함수 방법
  // console.log(`key: ${key}, value: ${value}`);
  // if (key === `name` ) {
  //   return `ellie`;
  // } else {
  //   return value
  // }
  return key === `name` ? `ellie` : value;
});
console.log(json);

// ## 2. JSON to(→) Object

// - JSON.parse()

json = JSON.stringify(rabbit);
// 이건 rabbit안 에있는 key 전부를 데이터화 시키겠다는 뜻이지!!!
console.log(json);

// 여기서 부터 보샘
let obj = JSON.parse(json);
console.log(obj);
// obj.jump(); // > error : stringify 할 때, 함수는 serializee 되지 않아서 jump는 존재하지  않는 메서드임
// console.log(rabbit.birthDate.getDate()); // > 날짜 '일' 이 출력됨
// 아직 object인 rabbit은 출력 씹가능!!!
// console.log(obj.birthDate.getDate()); // > error : serializee된 birthDate는 string 이기 때문에 당연히 getDate API가 호출 안됨

obj = JSON.parse(json, (key, value) => {
  // console.log(`key: ${key}, value: ${value}`);
  return key === `birthDate` ? new Date(value) : value;
});
console.log(obj);
console.log(obj.birthDate.getDate()); // > 날짜 '일' 이 출력됨 : 위에 콜백함수로 string을 JS의 API로 수정해서 deserialize 했기 때문에 잘 동작함
