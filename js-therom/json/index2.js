const chanYeong = {
  firstName: `ffff`,
  lastName: `sfsfsf`,
  age: 123213,
  birthDay: new Date(),

  justDoIt() {
    console.log(`${this.name}, just do it!`);
  },
};

let json = JSON.stringify([`apple`, `bananan`]);
console.log(json);
chanYeong.justDoIt();
json = JSON.stringify({ name: `json`, chapter: `존나 어려움` });
console.log(json);
json = JSON.stringify(`계산 해봐!! : ${1124214124 + 12321321}`);
console.log(json);
json = JSON.stringify(`${2188792188 % 2}`);
console.log(json);
json = JSON.stringify(chanYeong, [`firstName`, `lastName`]);
console.log(json);
json = JSON.stringify(chanYeong, (key, value) => {
  return key === `firstName` ? `suzy` : value;
});
console.log(json);
json = JSON.stringify(new Date());
console.log(json);

const cafe = {
  name: `aroi`,
  menu: [`coffee`, `tea`, `bakery`, `cokie`],
  age: 10,
  birthDay: new Date(),
};

json = JSON.stringify(cafe, [`name`, `menu`]);
console.log(json);
json = JSON.stringify(cafe, (key, value) => {
  return key === `name` ? `AROI COFFE CO` : value;
});

console.log(json);
const watch = {
  name: `rolex`,
  hours: `15`,
  seconds: `23`,
  minuts: `00`,
  date: new Date(),

  rolex() {
    console.log(`${this.name} 존나 비싸고 쓸 곳은 존나게 없어요 시부레`);
  },
};

let soSick = JSON.stringify(`아 충전기 사야 되는디... 시부레 존나 귀찮다`);
console.log(soSick);
soSick = JSON.stringify(watch, { thisWatch: `watch` });
console.log(soSick);
watch.rolex();

let bubury = JSON.stringify(watch, (key, value) => {
  return key === `name` ? "this is imitation" : value;
});

console.log(bubury);

bubury = JSON.stringify(watch);
console.log(bubury);
watch.rolex();
obj = JSON.parse(bubury);
console.log(obj);

console.log(watch.date.getMinutes());

obj = JSON.parse(bubury, (key, value) => {
  return key === "date" ? new Date(value) : value;
});

console.log(obj);

obj = JSON.parse(json);
console.log(obj);

obj = JSON.parse(json, (key, value) => {
  return key === `birthDay` ? new Date(value) : value;
});
console.log(obj);
