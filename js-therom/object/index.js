/* # Objects

- JS의 데이터 타입 중 하나
- 관련 데이터/함수 집합체
- JS의 거의 모든 객체는 Object의 인스턴스 입니다
- 객체 는 key와 value의 집합체 (object = { key : value };)
- 하나의 properties는 key:vlaue로 구성됨*/

"user strict";

//
//
//
//
//
//1. Literals and properties

const obj1 = {}; // 'obect literal' 문법
const obj2 = new Object(); // 'object constructor' 문법

function print(person) {
  console.log(person.name);
  //console.log(const person = {name: `ellie})
  console.log(person.age);
}

const ellie = { name: `ellie`, age: 4 };
print(ellie); // > ellie \n 4

// dynamically typed(동적 타입) language
// can add properties later (나중에 속성 추가 가능)
ellie.hasJob = true;
console.log(ellie.hasJob); // > true

// can delete properties later (나중에 속성 삭제 가능)
delete ellie.hasJob;
console.log(ellie.hasJob); // > undefined

//
//
//
//
//
//
//
// ## 2. Computed(계산된) properties

// - object['key']
// - 동적으로 key의 value를 받아와야 할 때 유용한 방법v

const ellie = { name: `ellie`, age: 4 };
console.log(ellie.name); // 코딩하는 그 순간, 원하는 key가 명확할때 '.' 을 사용
console.log(ellie["name"]); // 어떤 key가 필요할지 모를때, 런타임에서 결정될때 사용
ellie["hasJob"] = true; // 쌉가능
console.log(ellie.hasJob); // > true

function printValue(obj, key) {
  // console.log(obj.key); // > undefined
  console.log(obj[key]);
}

printValue(ellie, `name`); // > ellie
printValue(ellie, `age`); // > 4

//
///
//
//
//
//
//
// ## 3. Property shorthand (단축 속성명)

// - key와 value 의 이름이 동일하다면 간단하게 정의할 수 있다

function makePerson(name, age) {
  // 기존 방식
  // return {
  //   name: name,
  //   age: age
  // }

  // shorhand 방식
  return {
    name,
    age,
  };
}
const person1 = makePerson(`gunwoo`, 28.8);
console.log(person1); // > {name: "gunwoo", age: 28.8}

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

// ## 5. in operator

// - 해당 object에 key를 체크하는 연산자
// - key in obj

console.log(`name` in ellie); // > true
console.log(`age` in ellie); // > true
console.log(`random` in ellie); // > false
console.log(ellie.random); // > undefined

//
//
//
//
//
//
//
///
//
//
//
//
//
//
// ## 6. for in, for of 문

// - 이건 .. 걍 해보면 이해됨

// for (key in obj)
for (const key in ellie) {
  console.log(key); // > name \n age \n hasJob
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (const value of array) {
  console.log(value); // > 1 \n 2 \n 4 \n 5
}

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
//
// ## 7. Cloning (복제)

// - Object.assign(targetObj, [obj1, obj2, obj3 ...])
// - Object.assign은 얕은 복사이다

const user = { name: `gunwoo`, age: `28` };
const user2 = user; // 같은 주소를 바라보고 있음 (복제X)
console.log(user); // > {name: "gunwoo", age:"28"}

const user3 = Object.assign({}, user); // 얕은 복사 : 최상위 속성만 복사됨, 그 외의 속성은 복사되지 않음 즉, 수정시 서로 영향을 줌
console.log(user3); // > {name: "gunwoo", age:"28"}

// another example
const fruit1 = { color: `red`, point: 200 };
const fruit2 = { color: `blue`, size: `big` };
const mixed = Object.assign({}, fruit1, fruit2); // <- 방향으로 덮어 씌워짐
console.log(mixed); // > {color: "blue", point: 200, size: "big"}
