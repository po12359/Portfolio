`use strict`;

let symblo1 = Symbol(`1`);
let symblo2 = Symbol(`1`);
let symblo3 = Symbol(`1`);
let symblo4 = Symbol(`1`);
let symblo5 = Symbol(`1`);
let symblo6 = Symbol(`1`);
let symblo7 = Symbol(`1`);
let symblo8 = Symbol(`1`);
let symblo9 = Symbol(`1`);
console.log(
  (((((((symblo1 === symblo2) === symblo3) === symblo4) === symblo5) ===
    symblo6) ===
    symblo7) ===
    symblo8) ===
    symblo9
);

symblo1 = Symbol.for(`1`);
symblo2 = Symbol.for(`1`);
symblo3 = Symbol.for(`1`);
symblo4 = Symbol.for(`1`);
symblo5 = Symbol.for(`1`);
symblo6 = Symbol.for(`1`);
symblo7 = Symbol.for(`1`);
symblo8 = Symbol.for(`1`);
symblo9 = Symbol.for(`1`);
console.log(
  (((((((symblo1 === symblo2) === symblo3) === symblo4) === symblo5) ===
    symblo6) ===
    symblo7) ===
    symblo8) ===
    symblo9
);
let use = Symbol(124124);
let sss = Symbol(123121);
let sfsd = Symbol(1123121);
let feq = Symbol(!2312);
feq = Symbol(2133);
feq = Symbol(21131213);
feq = Symbol(1231312321);
console.log(feq);

let sex = Symbol.for(`sex`);
let sax = Symbol.for(`sex`);
console.log(sex === sax);

let call = Symbol(`sex`);
let carr = Symbol(`sex`);
console.log(call === carr);

call = Symbol.for(`ccc`);
carr = Symbol.for(`ccc`);
console.log(call === carr);
call = `sexsexssexxs`;
console.log(call.charAt(1));
console.log(call.charAt());

let aaa = `phone `;
let ccc = `sex `;
console.log(aaa + ccc);
console.log(`value : ${aaa.charAt(0) + ccc}, type : ${typeof ccc}`);

let counter = 1;
let increment = counter++;
console.log(`value : ${increment}, counter : ${counter}`);
let decrenment = counter--;
console.log(`value : ${decrenment}, counter : ${counter}`);

const value1 = false;
const value2 = 1 < 0;
console.log(`or : ${value1 || value2 || callback()}`);
console.log(`and : ${value1 && value2 && callback()}`);
function callback() {
  for (let i = 0; i < 3; i++) {
    return true;
  }
}
console.log(`or : ${!value1 && !value2 && callback()}`);
console.log(`or : ${value1 || value2 || !callback()}`);

let name = `df`;
if (name === `ellie`) {
  console.log(`get out`);
} else if (name === `chan` || name == `df`) {
  console.log(`come here`);
} else {
  console.log(`sex!`);
}
console.log(name === `df` ? `ellie` : `claa`);
switch (name) {
  case `ffff`:
    console.log(`wellcome to hotel`);
    break;
  case `df`:
    console.log(`fffffffff`);
    break;
}

let six = 6;
while (six < 10) {
  console.log(six);
  six++;
}

for (six = 7; six > 0; six--) {
  console.log(six);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1, 3, 3, 3, 25, 5, 6, 34];
for (let i = 0; i < array.length; i++) {
  console.log(array);
}

for (let i = 1; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
for (let i = 0; i < 11; i++) {
  if (i === 9) {
    break;
  }
  console.log(i);
}
for (let j = 0; j < 9; j++) {
  console.log(j);
}

const saxsax = { name: `ellie` };
function sexsex(a) {
  a.name = `jone`;
}

sexsex(saxsax);
console.log(saxsax);

const callcall = { name: `callcall` };
function callcockc(a) {
  a.name = `whffk`;
}

callcockc(callcall);
console.log(callcall);

const chart = { age: 19 };
function callshot(a) {
  a.age = 222;
}

callshot(chart);
console.log(chart);

const sexsax = { age: 123 };
function naration(a) {
  a.age = new Date();
}
naration(sexsax);
console.log(sexsax);

const park = { age: 123 };
function parkcahn(a) {
  a.age = new Date();
}

parkcahn(park);
console.log(park);

const sexsexsex = { age: 12321425314, name: `park chan yeong` };
function sexsexsexsex() {
  this.age = new Date();
  this.name = "suzy";
}

sexsexsexsex(sexsexsex);
console.log(sexsexsex);

let calumn = { age: 123, name: `sana`, date: `1999.99.99` };

function nocknock(obj) {
  obj.age = 19;
  obj.name = `은별아 존나 사랑해`;
}

nocknock(calumn);
console.log(calumn);

function printHello(a, b) {
  console.log(a);
  console.log(b);
  console.log(`name : ${a}, b : ${b} `);
}

printHello(`은별`);

function house(age, name, sex) {
  console.log(age);
  console.log(name);
  console.log(sex);
  console.log(`${age}와 ${sex}를 가진 ${name}을 존나 사랑해!!!!!`);
}

house(19, `은별`, `female`);

const args = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function argment(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (let arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => {
    console.log(arg);
  });
}

argment(args);

function printArgs(...name) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
  for (let nam of name) {
    console.log(nam);
  }
  name.forEach((nam) => {
    console.log(nam);
  });
}

printArgs(`은별`, `은별이`, `은별아`, `suzy`, `sana`, `은별이 존나 따랑해!!!`);

function printHello(...cockes) {
  for (let i = 0; i < cockes.length; i++) {
    console.log(cockes[i]);
  }
}

printHello({ name: `suzy` }, { name: `boke` }, navgation());

function navgation() {
  console.log(`sexy 은별`);
}

function printEarly(name) {
  if (name === `iu`) {
    return `suzy`;
  } else {
    console.log(`은별양`);
  }
}
const hello = printEarly(`suzy`);
console.log(hello);

function cockacola(cocka) {
  if (cocka === `펩시`) {
    return `넌 진정한 콜라의 맛을 몰라!!!!`;
  } else if (cocka === `사이다`) {
    return `넌 진정한 탄산의 맛을 몰라!!!`;
  } else {
    return `역시 넌 콜라의 맛을 알아!!!`;
  }
}
const newthing = cockacola(`코카콜라`);
console.log(newthing);

let stars = `은별잉`;
console.log(stars.charAt(0));

function actor() {
  console.log(`은별이`);
}

actor();
let chocolate = actor();
let milk = chocolate;
console.log(milk);

let meet = function nono() {
  console.log(`shurt up!`);
};
meet();

function sum(a, b) {
  return a + b;
}

let sum1 = sum(1, 3);
console.log(sum1);

// let sum2 = sum1;
// console.log(sum2(1, 2));
function nameInfo(name, sox, age) {
  if (name === `suzy`) {
    sox();
  } else {
    age();
  }
}

const sox = function print() {
  console.log(`female`);
};
const age = function print2() {
  console.log(19);
};

nameInfo(`suzy`, sox, age);

function randomQuiz(answer, printYes, printNo) {
  if (answer === `i love you`) {
    printYes();
  } else {
    printNo();
  }
}

let printYes = function print() {
  console.log(`yes!!!`);
};
let printNo = function print2() {
  console.log(`no!!!!`);
};

randomQuiz(`i love you`, printYes, printNo);
randomQuiz(`wrong`, printYes, printNo);

function classAce(score, sex, role) {
  score > 72 && sex === `female` ? role() : console.log(`${"you're stupid!"}`);
}

let role = function print() {
  console.log("you're ace!!");
};

classAce(10, `male`, role);
classAce(80, `male`, role);
classAce(90, `female`, role);
classAce(12, `female`, role);
classAce(90, `male`, role);

class Person {
  constructor(age, name, birthDay) {
    this.age = age;
    this.name = name;
    this.birthDay = birthDay;
  }
  date() {
    console.log(`${this.birthDay}`);
  }
}

let chanel = new Person(19, `은별`, new Date());
console.log(chanel.age);
console.log(chanel.birthDay);
chanel.date();

{
  class Shape {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }
    get width() {
      return this._width;
    }
    set width(value) {
      this._width = value < 0 ? 0 : value;
    }
  }
  let shape = new Shape(-10, 10, `red`);
  console.log(shape);
  console.log(shape.width * shape.height);
}

class Article {
  static rabit = {
    color: `red`,
    age: 19,
    name: `name`,
  };

  static jump() {
    console.log(`이 토끼는 ${Article.rabbit}를 가지고 있어!`);
  }
}

console.log(Article.rabit);
Article.jump();

class DreamCoding {
  static dream = `dreamcoding`;

  static method() {
    console.log(`${DreamCoding.dream}을 꿈꾸다 `);
  }
}

console.log(DreamCoding.dream);
DreamCoding.method();

class Coder {
  static nextClear = [1, 2, 3, 4, 5, 6, 7, 8, `javascript`];

  static java() {
    console.log(`javascript를 열심히 배우자 ${Coder.nextClear}`);
  }
}
console.log(Coder.nextClear);
Coder.java();

class People {
  constructor(age, name, birthDay) {
    this.age = age;
    this.name = name;
    this.birthDay = birthDay;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const people = new People(-1, `suzy`, new Date());
console.log(people.age);
console.log(people);

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`shape color : ${this.color}`);
  }
  getArea() {
    return this.width * this.height;
  }
}

const shape = new Shape(10, 10, `red`);
console.log(shape);
shape.draw();
console.log(shape.getArea());

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const triangle = new Triangle(20, 10, `red`);
triangle.draw();
console.log(triangle.getArea());

class Rectangle extends Shape {
  draw() {
    console.log(`삼각형`);
  }
}

const rectangle = new Rectangle(1, 4, `빨강`);
rectangle.draw();
console.log(rectangle.getArea() / 2);

console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);

class Coffee {
  constructor(bean, temperature, musin) {
    this.bean = bean;
    this.temperature = temperature;
    this.musin = musin;
  }
  musinsa() {
    console.log(`이 원두는 ${this.bean}이야.`);
  }
}

let coffee = new Coffee(`ethiopia`, 21, `라마르조꼬`);
coffee.musinsa();
console.log(coffee.bean);
console.log(coffee);

function print(person) {
  console.log(person);
  console.log(person.name);
  console.log(person.age);
  console.log(person.sex);
}

const printt = { name: `suzy`, age: 19, sex: `female` };
print(printt);

function music(obj) {
  console.log(obj.job);
  console.log(obj.faumus);
  console.log(obj.enter);
  console.log(obj.name);
}

const singer = {
  job: `singer`,
  famus: `very`,
  enter: `yg`,
  name: `blackpink`,
};
music(singer);

function newClear(ghost) {
  console.log(ghost.name);
  console.log(ghost.bar);
  console.log(ghost.sex);
  console.log(ghost);
}

const bread = {
  name: "ghost",
  bar: "98%",
  sex: `male`,
};

newClear(bread);

const nora = { ss: `ss`, aa: `aa`, bbb: `bb`, nora: `nora` };
const flex = { ss: `nora`, aa: `avdsdsa`, cc: `fasdfdsa` };
const faewffe = Object.assign({}, nora, flex);
console.log(faewffe);
const fffafdas = Object.assign({}, flex, nora);
console.log(fffafdas);

const sexyGirls = {
  twice: `sana`,
  blackpink: `jennie`,
  girlsGeneration: `jessica`,
  wondergirls: `sohee`,
};
const sexyGuys = {
  BTS: `누구?`,
  동방신기: `최강창민`,
  bigbang: `g-dragon`,
  superjunior: `신동`,
};
const sexyPeople = Object.assign({}, sexyGuys, sexyGirls);
console.log(sexyPeople);
const sexyPerson = Object.assign({}, sexyGirls);
console.log(sexyPerson);

const dog = {
  name: `아롱`,
  age: 19,
  dogInfo: `슈나우저`,
  birthDay: new Date(),
  cute() {
    console.log(`${this.name}`);
  },
};

let json = JSON.stringify(dog, [`name`, `age`]);
console.log(json);
json = JSON.stringify(dog);
console.log(json);
json = JSON.stringify(dog, [`birthDay`]);
console.log(json);
dog.cute();
json = JSON.stringify(dog);
let parse = JSON.parse(json);
console.log(parse);

parse = JSON.parse(json, (key, value) => {
  return key === `birthDay` ? new Date(value) : value;
});
console.log(parse.birthDay.getDate());

parse = JSON.parse(json, (key, value) => {
  return key === `birthDay` ? new Date(value) : value;
});
21;
console.log(parse.birthDay.getDate());

const nextArray = [1, 2, 3, 4];
console.log(nextArray[1]);
console.log(nextArray[3]);
console.log(nextArray[nextArray.length - 1]);
console.log(nextArray[0]);
console.log(nextArray.length);

const furitsArray =
  //
  [`🍟`, `🍔`, `🧇`, `🥪`, `🍞`, `🍿`, `🍞`, `🥪`, `🥗`];
for (let i = 0; i < furitsArray.length; i++) {
  console.log(furitsArray[i]);
}
for (let furitArray of furitsArray) {
  console.log(furitArray);
}

furitsArray.forEach((furitArray) => {
  console.log(furitArray);
});

furitsArray.splice(3, 1);
console.log(furitsArray);

furitsArray.splice(3, 3);
console.log(furitsArray);

let fruit2 = [1, 2, 3];
let newFurit = furitsArray.concat(fruit2);
console.log(newFurit);

{
  let join = [1, 2, 3, 4, 5];
  console.log(join.join());
  let result = join.join(`,`);
  console.log(result);
}
{
  let split = [`apple`, `peach`, `banana`, `pear`];
  console.log(split.join());
  let cons = split.join(`,`);
  console.log(cons);
}
{
  let observe = [1, 2, 3, 4, 5];
  console.log(observe.reverse());
  let result = observe.reverse();
  console.log(result);
}
{
  let observe = [12, 124, 5234, 532412];
  console.log(observe.reverse());
}
{
  let observe = [12, 124, 5234, 532412, 123, 2341, 435];
  console.log(observe.slice(2));
} //5234, 532412, 123, 2341, 435

{
  let observe = [12, 124, 5234, 532412, 123, 2341, 435];
  console.log(observe.slice(2, 4));
} //[5234, 532412]

{
  let observe = [12, 124, 5234, 532412, 123, 2341, 435];
  console.log(observe.slice(2, 5));
} //[5234, 532412, 123]

let object = [12, 213, 21, 432, 532, 5321, 42];
let slic = object.slice(1, 3);
console.log(slic); //213 , 21 ,432

let ccccc = [12, 321, 4, 3, 12, 21, 143, 241];
const reqreq = ccccc.splice(1, 3); // 21 143 241
console.log(reqreq);
const array2 = [1, 2, 3, 4, 5];
let superball = array2.slice(1, 5);
console.log(superball);

// class Student {
//   constructor(name, age, enrolled, score) {
//     this.name = name;
//     this.age = age;
//     this.enrolled = enrolled;
//     this.score = score;
//   }
// }

// const students = [
//   new Student(`chan`, 19, true, 71),
//   new Student(`mike`, 18, true, 62),
//   new Student(`minji`, 14, false, 40),
//   new Student(`miju`, 18, true, 89),
//   new Student(`sana`, 19, true, 99),
// ];
// let result = students.find((student) => student.score === 99);
// console.log(result);
// result = students.filter((student) => student.enrolled);
// console.log(result);

// result = students.map((student) => student.score);
// console.log(result);
// result = students.some((student) => (student.score < 50 ? true : false));
// console.log(result);
// result = students.every((student) => (!student.score >= 50 ? true : false));
// console.log(result);

// result = students.reduce(function (acc, value) {
//   console.log(acc);
//   console.log(value);
//   return acc + value.score;
// }, 0);
// console.log(result);

// result = students.reduce((acc, value) => {
//   return acc + value.age;
// }, 0);
// console.log(result);

// result = students.reduce((acc, value) => {
//   return acc + value.age;
// }, 0);
// console.log(result);

// result = students.reduce((acc, value) => {
//   return acc + value;
// }, 0);

// result = students //
//   .map((student) => student.score)
//   .sort(function (a, b) {
//     return b - a;
//   })
//   .join(`,`);

// console.log(result);

function printLater(print, timeout) {
  setTimeout(print, timeout);
}

printLater(() => console.log(`h2`), 1000);

// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     if (id === `ellie` && password === `123`) {
//       onSuccess(id);
//     } else {
//       onError(new Error(`get out here`));
//     }
//   }
//   getUser(user, onSuccess, onError) {
//     if (user === `ellie`) {
//       onSuccess({ name: `ellie`, role: `admin` });
//     } else {
//       onError(new Error(`get out here`));
//     }
//   }
// }
// let id = `ellie`;
// let password = `123`;

// let userStorage = new UserStorage();
// userStorage.loginUser(
//   id,
//   password,
//   (id) => {
//     userStorage.getUser(
//       id,
//       (user) => console.log(`${user.name} and ${user.role}`),
//       (error) => console.log(error)
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

class ClassSutent {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new ClassSutent(`chan`, 19, true, 80),
  new ClassSutent(`min`, 21, false, 62),
  new ClassSutent(`sana`, 20, false, 46),
  new ClassSutent(`miju`, 25, true, 99),
  new ClassSutent(`rose`, 17, true, 56),
];

let result = students.find((student) => student.score === 99);
console.log(result);
result = students.filter((student) => student.enrolled);
console.log(result);
result = students.map((student) => student.score > 80);
console.log(result);
result = students.filter((student) => student.score === 99);
console.log(result);
result = students.map((student) => student.enrolled);
console.log(result);
result = students.reduce(function (acc, value) {
  return acc + value.age;
}, 0);
console.log(result);

// class UserCallback {
//   loginUser(id, password, onSuccess, onError) {
//     if (id === `ellie` && password === `123`) {
//       onSuccess(id);
//     } else {
//       onError(new Error(`print : error`));
//     }
//   }

//   getUser(user, onSuccess, onError) {
//     if (user === `ellie`) {
//       onSuccess({ name: `ellie`, role: `admin` });
//     } else {
//       onError(new Error(`get out here`));
//     }
//   }
// }

// let id = `ellie`;
// let password = `123`;

// const userCallback = new UserCallback();
// userCallback.loginUser(
//   id,
//   password,
//   (id) => {
//     userCallback.getUser(
//       id,
//       (user) => {
//         console.log(`name : ${user.name}, role : ${user.role} `);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

const gf = {
  name: `miju`,
  age: 19,
  birthDay: new Date(),
  sex: `female`,
};

let jon = JSON.stringify(gf, [`name`, `age`, `birthDay`, `sex`]);
console.log(jon);
let son = JSON.parse(jon);
console.log(son);
son = JSON.parse(jon, (key, value) => {
  return key === `birthDay` ? new Date(value) : value;
});
console.log(son.birthDay.getDate());

const bf = {
  name: `chan`,
  age: 19,
  birthDay: new Date(),
  sex: `male`,
};

jon = JSON.stringify(bf, [`name`, `age`, `birthDay`, `sex`]);
console.log(jon);
jon = JSON.stringify(bf, [`birthDay`]);
console.log(jon);
son = JSON.parse(jon, (key, value) => {
  return key === `birthDay` ? new Date(value) : value;
});
console.log(son.birthDay.getDate());

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
});

promise //
  .then((num) => num * 2)
  .then((num) => num + 1)
  .then((num) => num * 3)
  .then((num) => num / 2)
  .then((num) => console.log(num));

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`get out here`));
  }, 1000);
});

promise.catch((error) => console.log(error));

promise = new Promise((resolve, rejcet) => {
  setTimeout(() => resolve(1), 1000);
});

promise
  .then((ass) => ass + 1)
  .then((call) => call + 2)
  .then((call) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(call - 1));
    });
  })
  .then((call) => console.log(call));
// const getHen = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`치킨`), 1000);
//   });
// };
// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${hen}은 달걀을 낳는다`);
//     }, 1000);
//   });
// const cook = (egg) =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve(`${egg} 그러면 치킨이 된다.`);
//     }, 1000)
//   );

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meet) => console.log(meet));

// class User {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (id === `ellie` && password === `123`) {
//           resolve(id);
//         } else {
//           reject(new Error(`get out here`));
//         }
//       }, 1000);
//     });
//   }
//   getUser(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === `ellie`) {
//           resolve({ name: `ellie`, role: `admin` });
//         } else {
//           reject(new Error(`get out here`));
//         }
//       }, 1000);
//     });
//   }
// }

// const id = `ellie`;
// const password = `123`;

// const user = new User();
// user //
//   .loginUser(id, password)
//   .then((id) => user.getUser(id))
//   .then((user) => console.log(`user : ${user.name}. role : ${user.role}`));

class Print {
  peopleInfo(answer, printYes, printNo) {
    if (answer === `i love you`) {
      printYes(answer);
    } else {
      printNo(new Error(`get out here`));
    }
  }

  getCheck(sex, printYes, printNo) {
    if (sex === `female`) {
      printYes({ name: `은별`, money: `rich` });
    } else {
      printNo(new Error(`get out here male!!!!!`));
    }
  }
}

const answer = `i love you`;
sex = `female`;

print = new Print();
print.peopleInfo(
  answer,
  (sex) => {
    print.getCheck(
      sex,
      (userinfo) => {
        console.log(userinfo);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => console.log(error)
);

// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     if (id === `ellie` && password === `123`) {
//       onSuccess(id);
//     } else {
//       onError(new Error(`get out here`));
//     }
//   }
//   getUser(user, onSuccess, onError) {
//     if (user === `ellie`) {
//       onSuccess({ name: `ellie`, sex: `female` });
//     } else {
//       onError(new Date(`get out here`));
//     }
//   }
// }

// let id = `ellie`;
// let password = `123`;

// let userStorage = new UserStorage();
// userStorage.loginUser(
//   id,
//   password,
//   (id) => {
//     userStorage.getUser(
//       id,
//       (user) => {
//         console.log(`${user.name} 그리고 ${user.sex}`);
//       },
//       (error) => cosnole.log(error)
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       if (id === `ellie` && password === `123`) {
//         resolve(id);
//       } else {
//         reject(new Error(`get out here`));
//       }
//     });
//   }
//   userInfo(user) {
//     return new Promise((resolve, reject) => {
//       if (user === `ellie`) {
//         resolve({ name: `unstar`, sex: `female` });
//       } else {
//         reject(new Error(`get out heres`));
//       }
//     });
//   }
// }

// id = `ellie`;
// passwor = `123`;

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      if (id === `ellie`) {
        setTimeout(() => resolve(id), 1000);
      } else {
        reject(new Error(`get out here`));
      }
    });
  }
  getUser(user) {
    return new Promise((resolve, reject) => {
      if (user === `ellie`) {
        setTimeout(() => {
          resolve({ name: `ellie`, sex: `female` });
        }, 1000);
      } else {
        reject(new Error(`get out here`));
      }
    });
  }
}

id = `ellie`;
password = `123`;

const userStorage = new UserStorage();
userStorage
  .loginUser(id, password)
  .then((id) => userStorage.getUser(id))
  .then((user) => console.log(user));

class UserInfo {
  randomQuiz(answer) {
    return new Promise((resolve, reject) => {
      if (answer === `i love you`) {
        setTimeout(() => {
          resolve({ name: `suzy`, sex: `female` });
        }, 1000);
      } else {
        reject(new Error(`get out here`));
      }
    });
  }
}

const userInfo = new UserInfo();
userInfo.randomQuiz(`i love you`).then((answer) => console.log(answer));

class Dream {
  codingJop(name, info) {
    return new Promise((resolve, reject) => {
      if (name == `front-end` && info === `javascript`) {
        setTimeout(() => resolve(`welcome front-end world`), 3000);
      } else {
        reject(new Error(`get out here`));
      }
    });
  }
}
name = `front-end`;
info = `javascript`;
const dreamCoding = new Dream();
dreamCoding
  .codingJop(name, info)
  .then((ellie) => console.log(ellie))
  .catch((error) => console.log(error));

let getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`암닭`);
    }, 1000);
  });
};
let getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen}은 달걀이 된다`), 1000);
  });

let cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg}가 나오면 계란볶음밥 해먹자!!`);
    }, 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meet) => console.log(meet));

async function rori() {
  return `ellie`;
}

const sssssss = rori();
sssssss.then((use) => console.log(use));
