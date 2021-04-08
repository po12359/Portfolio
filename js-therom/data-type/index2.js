function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getDog() {
  await delay(2000);
  return `강아지!`;
}
async function getCat() {
  await delay(2000);
  return `고양이`;
}

async function horse() {
  let dog = null;
  try {
    dog = await getDog();
  } catch (error) {
    console.log(error);
  }
  let cat = null;
  try {
    cat = await getCat();
  } catch (error) {
    console.log(error);
  }
  return `${dog} + ${cat}`;
}

horse().then((result) => console.log(result));

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array);

let result = array.join(`,`);
console.log(result);
let rose = result.split(`,`);
console.log(rose);
let coconi = rose.reverse();
console.log(coconi);

let roni = [1, 2, 3, 4, 5, 6, 7, 8];
let splice = roni.splice(3, 4);
console.log(splice);

class StudentClass {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new StudentClass(`sana`, 29, true, 92),
  new StudentClass(`minji`, 21, false, 77),
  new StudentClass(`jenny`, 26, true, 85),
  new StudentClass(`rose`, 21, false, 65),
  new StudentClass(`miju`, 26, true, 21),
];

result = students.find((student) => student.score > 90);
console.log(result);
result = students.filter((student) => student.enrolled);
console.log(result);
result = students.map((student) => student.age);
console.log(result);
result = students.some((student) => student.score > 80);
console.log(result);
result = !students.every((student) => student.score <= 80);
console.log(result);
result = students.reduce((acc, value) => {
  return acc + value.score;
}, 0);
console.log(result);
{
  class UserInfo {
    loginUser(id, password, onSuccess, onError) {
      if (
        (id === `ellie` && password == `123`) ||
        (id === `po12359` && password === `rksvks1`)
      ) {
        onSuccess(id);
      } else {
        onError(new Error(`get out here`));
      }
    }
    getUser(user, onSuccess, onError) {
      if (user === `ellie` || user === `sohee`) {
        onSuccess({ name: `ellie`, role: `admin` });
      } else {
        onError(new Error(`get out here`));
      }
    }
  }

  let id = `ellie`;
  let password = `123`;

  let userInfo = new UserInfo();
  userInfo.loginUser(
    id,
    password,
    (id) => {
      userInfo.getUser(
        id,
        (userInfo) => {
          console.log(`name : ${userInfo.name}, role : ${userInfo.role}`);
        },
        (error) => console.log(error)
      );
    },
    (error) => {
      console.log(error);
    }
  );
}
{
  class UserInfo {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        if (
          (id === `ellie` && password == `123`) ||
          (id === `po12359` && password === `rksvks1`)
        ) {
          resolve(id);
        } else {
          reject(new Error(`get out here`));
        }
      });
    }
    getUser(user) {
      return new Promise((resolve, reject) => {
        if (user === `ellie` || user === `sohee`) {
          resolve({ name: `ellie`, role: `admin` });
        } else {
          reject(new Error(`get out here`));
        }
      });
    }
  }
  let id = `ellie`;
  let password = `123`;

  let jon = new UserInfo();
  jon
    .loginUser(id, password)
    .then((id) => jon.getUser(id))
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
}

const getTime = () => {
  return new Promise((resolve, rejcect) =>
    setTimeout(() => resolve(1000), 2000)
  );
};
const getNum = (time) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${time} - 1000`), 2000)
  );
const getResult = (num) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${num} = 0`), 1000)
  );

getTime()
  .then((time) => {
    return getNum(time);
  })
  .then((num) => {
    return getResult(num);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

{
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getTime() {
    await delay(2000);
    return `1000`;
  }
  async function getNum(time) {
    await delay(2000);
    return `+ 1000`;
  }

  async function getResult() {
    let time = null;
    try {
      time = await getTime(time);
    } catch (error) {
      console.log(error);
    }
    let num = null;
    try {
      num = await getNum(num);
    } catch (error) {
      console.log(error);
    }
    return `${time} ${num} = 2000`;
  }

  // let getResult = () => {
  //   return getTime().then((time) => {
  //     return getNum().then((num) => `${time} ${num} = 2000`);
  //   });
  // };
  getResult().then((result) => console.log(result));
}
{
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function getBerry() {
    await delay(3000);
    return `🍓`;
  }
  async function getBananan() {
    await delay(2000);
    return `🍌`;
  }
  async function newFruits() {
    let berry = null;
    try {
      berry = await getBerry();
    } catch (error) {
      console.log(error);
    }
    let banana = null;
    try {
      banana = await getBananan();
    } catch (error) {
      console.log(error);
    }
    return `${berry} + ${banana}`;
  }

  newFruits().then((result) => console.log(result));
}

const info = {
  name: `ellie`,
  age: 19,
  birthDay: new Date(),
  sex: `female`,
  roro: id(),
};
function id() {
  return `callback`;
}
const roro = id();
let json = JSON.stringify(info, [`name`, `birthDay`, `roro`]);
console.log(json);
console.log(info.birthDay.getDate());
//console.log(json.birthDay.getDate());
// error! why? => json = data

result = JSON.parse(json);
console.log(result);
//console.log(result.birthDay.getDate());
// error!! why? because variable result == data
result = JSON.parse(json, (key, value) => {
  return key === `birthDay` ? new Date(value) : value;
});
console.log(result.birthDay.getDate());

{
  class UserInfo {
    constructor(name, age, sex, birthDay) {
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.birthDay = birthDay;
    }
    userName() {
      console.log(`${this.name} => suzy`);
    }
  }
  let result = new UserInfo(`jenny`, 19, `female`, new Date());
  console.log(result);
  console.log(result.birthDay);
}

{
  class UserInfo {
    constructor(name, age, sex, birthDay) {
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.birthDay = birthDay;
    }
    get age() {
      return this._age;
    }
    set age(value) {
      this._age = value < 0 ? 0 : value;
    }
  }
  let result = new UserInfo(`jenny`, -21, `female`, new Date());
  console.log(result.age);
}

{
  function play() {
    return 23 + 30;
  }

  class Article {
    static article = {
      name: `minji`,
      age: 29,
      today: new Date(),
      robi: play(),
    };

    static beverrage() {
      console.log(`size-up`);
    }
  }
  console.log(Article.article.today.getDate());
  console.log(Article.article.robi);
  Article.beverrage();
}

{
  class Shape {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }

    draw() {
      console.log(`color : ${this.color}`);
    }
    getArea() {
      return this.width * this.height;
    }
  }

  let result = new Shape(15, 21, `flowerblue`);
  console.log(result);
  result.draw();
  console.log(result.getArea());

  class Rectangular extends Shape {
    draw() {
      super.draw;
      console.log(`color change : ${this.color}`);
    }
  }
  result = new Rectangular(12, 11, `tomato`);
  console.log(result.getArea());
  result.draw();

  class Triangle extends Shape {
    getArea() {
      return (this.width * this.height) / 2;
    }
  }
  result = new Triangle(22, 22, `smokewhite`);
  console.log(result.getArea());
  result.draw();
}

let browser = `chrome`;

switch (browser) {
  case `IE`:
    console.log(new Error());
    break;
  case `chrome`:
  case `firefox`:
    console.log(`best choice`);
    break;
  default:
    console.log(`get out here`);
    break;
}

let animal = `dog`;

switch (animal) {
  case `dog`:
    console.log(`아롱아`);
    break;
  case `cat`:
  case `rabit`:
    console.log(`get out here`);
    break;
  default:
    console.log(`just do it`);
    break;
}

{
  let num = 1;

  for (let i = 0; i < 10; i++) {
    console.log(num[i]);
  }
}

{
  function args(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
    for (let arg of args) {
      console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
  }
  args(1, 2, 3, 4, 5, 67, 8, 9, 4, 123, 124, 235);
}
