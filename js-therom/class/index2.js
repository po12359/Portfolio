console.log(`21`);
setTimeout(() => {
  console.log(`213`);
}, 1000);
console.log(`2323`);

console.log(23);
setTimeout(() => {
  console.log(1221);
}, 1000);
console.log(`ㅎㄴㅇㅁㄹㅇㄴㅁ`);
setTimeout(() => {
  console.log(`fjfjkjkf`);
}, 1000);
console.log(`dfasjklass`);

function printMidea(print) {
  print();
}
printMidea(() => {
  console.log(`hello`);
});

function callBack(print) {
  print();
}
callBack((print) => {
  console.log(`pretty`);
});

function printDelay(name, age) {
  setTimeout(name, age);
}
printDelay((name, age) => {
  console.log(`chan`, 203);
}, 1000);

function aaaa(name, timeout) {
  setTimeout(name, timeout);
}

aaaa(() => {
  console.log(`cahn`);
}, 2000);

class UserInfo {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  userName() {
    console.log(`${this.name}`);
  }
}

const user = new UserInfo(`suzy`, 30, `female`);
console.log(user.name);
user.userName();

class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  get sex() {
    return this._sex;
  }
  set sex(value) {
    this._sex = value === `male` ? `you're transgender?` : `female`;
  }
}

const gender = new User(`suzy`, 32, `female`);
console.log(gender);
const gender1 = new User(`RapMonster`, 22, `male`);
console.log(gender1);

class CallBack {
  constructor(phone, home, fax) {
    this.phone = phone;
    this.home = home;
    this.fax = fax;
  }
  get phone() {
    return this._phone;
  }
  set phone(call) {
    this._phone = call === `010` ? `change you'r phone number` : call;
  }
}

const home = new CallBack(`010`, `02`, `030`);
console.log(home);
const home1 = new CallBack(`010`, `010`, `040`);
console.log(home1);

class Article {
  static class = `Coding`;

  static className() {
    console.log(`${Article.class}`);
  }
}

Article.className();

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`you should use this ${this.color}`);
  }
  getArea() {
    return this.width * this.height;
  }
}

const shape = new Shape(21, 12, `red`);
console.log(shape.getArea());

shape.draw();

class Rectangle extends Shape {
  draw() {
    super.draw();
  }
}

const rectangle = new Rectangle(10, 5, `blue`);
console.log(rectangle.getArea());
rectangle.draw();

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle(20, 5, "colona");
console.log(triangle.getArea());
triangle.draw();
