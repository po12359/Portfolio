"use strict";
{
  const dog = {
    name: `아롱이`,
    age: 13,
    birthDay: `2009. 10. 10`,
    myDog() {
      console.log(`${this.name}아 사랑해!, 생일 축하해${this.birthDay}`);
    },
  };
  let json = JSON.stringify(dog, [`name`, `age`, `birthDay`]);
  console.log(json);
  dog.myDog();
}

{
  const rabit = {
    name: `coconi`,
    age: 19,
    color: `whitesmoke`,
    birhtDay: new Date(),
    jump() {
      if (this.color === `whitesmoke`) {
        console.log(`so pretty ${this.name}`);
      } else {
        console.log(`get out here ${this.birthDay}`);
      }
    },
  };
  const json = JSON.stringify(rabit, [`name`, `age`, `color`, `birthDay`]);
  console.log(json);
  rabit.jump();
}

{
  const shape = {
    width: 15,
    height: 21,
    color: `tomato`,
    name: `triangle`,
    multiple() {
      return (this.width * this.height) / 2;
    },
  };
  const json = JSON.stringify(shape, [`width`, `height`, `color`, `name`]);
  console.log(json);
  const triangle = shape.multiple();
  console.log(triangle);
}

let game = {
  name: `maplestory`,
  age: 12,
  company: `nexon`,
  fall(a, b) {
    return a + b + `${this.company} 망했어`;
  },
};
const maple = game.fall(1, 2);
console.log(maple);
let json = JSON.stringify(game, (key, value) => {
  return key === `name` ? `cart` : value;
});
console.log(json);

{
  const date = {
    time: new Date(),
  };
  let result = JSON.stringify(date);
  console.log(result);
  console.log(date.time.getMonth());
  let obj = JSON.parse(result);
  console.log(obj);
  console.log(date.time.getDate());
  //아직 object인 date는 출력가능
  // console.log(obj.time.getDate());
  //이미 오늘 시간이 string화 되어 버려서 출력이 불가능하다.(글자가 되어버림)
  obj = JSON.parse(result, (key, value) => {
    return key === `time` ? new Date(value) : value;
  });
  console.log(obj);
  console.log(obj.time.getSeconds());
}

{
  const dog = {
    name: `아롱이`,
    age: 14,
    birthDay: new Date(),
    jump() {
      console.log(`jump:${this.name} you can do it!`);
    },
  };
  let json = JSON.stringify(dog, [`name`, `age`, `birthDay`]);
  console.log(json);
  json = JSON.stringify(dog);
  console.log(json);
  json = JSON.stringify(dog, [`birthDay`]);
  console.log(json);
  json = JSON.stringify(dog, (key, value) => {
    return key === `name` ? `my lover` : value;
  });
  console.log(json);
  let obj = JSON.parse(json);
  console.log(obj);
  console.log(dog.birthDay.getDate());
  console.log(dog.birthDay.getMonth());
  console.log(dog.birthDay.getDay());
  obj = JSON.parse(json, (key, value) => {
    return key === `birthDay` ? new Date(value) : value;
  });
  console.log(obj.birthDay.getDate());
}

{
  const enter = {
    yg: `blackpink`,
    sm: `exo`,
    jyp: `twice`,
    actor(a, b) {
      return a + b + `${this.yg}`;
    },
  };
  let json = JSON.stringify(enter);
  console.log(json);
  json = JSON.stringify(enter, [`yg`, `sm`]);
  console.log(json);
  json = JSON.stringify(enter, [`jyp`, `sm`]);
  console.log(json);
  const result = enter.actor(`지수`, `제니`);
  console.log(result);
  json = JSON.stringify(enter);
  console.log(json);
  let sax = JSON.parse(json);
  console.log(sax);
  sax = JSON.parse(json, (key, value) => {
    return key === `yg` ? `bigbang` : value;
  });
  console.log(sax);
}
