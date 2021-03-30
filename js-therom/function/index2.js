"use strict";

function sosi(msg) {
  msg.name = `chan yeong`;
}
let ellie = { name: `ellie` };
sosi(ellie);
console.log(ellie.name);

function soso(msg, age) {
  console.log(msg, age);
}
soso(`key`, 123);

function ass(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (let arg of args) {
    console.log(arg);
  }
}
ass(`sas`, `non`, `wow`, `cok`);

function sax(...sss) {
  for (let i = 0; i < sss.length; i++) {
    console.log(sss[i]);
  }
  for (let ss of sss) {
    console.log(ss);
  }
  sss.forEach((ss) => {
    console.log(ss);
  });
}

sax(`tfa`, `sfa`, `afa `, `aa fa`, `bb`);

function ccc(...aaa) {
  for (let i = 0; i < aaa.length; i++) {
    console.log(aaa[i]);
  }
  for (let aa of aaa) {
    console.log(aa);
  }
  aaa.forEach((aa) => {
    console.log(aa);
  });
}
ccc(`ff`, `ss`, `aa`, `ff`, `qq`);

function print() {
  console.log(`print`);
}
print();
const print2 = print;
print2();

function call(mss) {
  console.log(mss);
}
call(`h2!`);
const call2 = call;
call2(``);

function wiwi(a, b) {
  return a + b;
}
const wowo = wiwi(2, 4);
console.log(wowo);
const wawa = wowo;
console.log(wawa);

function random(number, name, age) {
  if (number === 1) {
    name();
  } else {
    age();
  }
}

const name = function () {
  console.log(`suzy`);
};
const age = function print() {
  console.log(222);
};

random(1, name, age);
random(2, name, age);

// function calculate(command, a, b) {
//   if (command === `add`) {
//     return a + b;
//   } else if (command === `substract`) {
//     return a - b;
//   } else if (command === `divide`) {
//     return a / b;
//   } else if (command === `multiply`) {
//     return a * b;
//   } else if (command === `remainder`) {
//     return a % b;
//   }
// }
// const quququ = calculate(`add`, 2, 5);
// console.log(quququ);
// const sasasas = calculate(`substract`, 4, 5);
// console.log(sasasas);
// const divide = calculate(`divide`, 10, 2);
// console.log(divide);
// const multiply = calculate(`multiply`, 3, 19);
// console.log(multiply);
// const remainder = calculate(`remainder`, 212, 2);
// console.log(remainder);

function calculate(command, a, b) {
  switch (command) {
    case `add`:
      return a + b;
    case ` substract`:
      return a - b;
    case `divide`:
      return a / b;
    case `multiply`:
      return a * b;
    case `reminder`:
      return a % b;
  }
}

calculate(`add`, 23, 23);
