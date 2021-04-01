`use strict`;
// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);

// console.log(`dog`);
// setTimeout(() => {
//   console.log(1 + 3);
// }, 2000);
// console.log(`cat`);

// console.log(`1`);
// console.log(3);
// setTimeout(() => {
//   console.log(1232141 / 12312), 4000;
// });
// console.log(`213`);

{
  function printName(print) {
    print();
  }
  printName(() => {
    console.log(`ddd`);
  });
  //printName의 parameters는 function이다. 그니깐 출력값의 arg에도 funtion을 대입하라.
}

{
  function printAfter(print, timeout) {
    setTimeout(print, timeout);
  }
  printAfter(() => console.log(`dog`), 2000);
}
{
  function printName(print, timeout) {
    setTimeout(print, timeout);
  }
  printName(() => console.log(`gell`), 5000);
}

function call(next, timeout) {
  setTimeout(next, timeout);
}
call(() => console.log(`call`), 3000);
{
  function nexs(nexon, maple) {
    setTimeout(nexon, maple);
  }
  nexs(() => console.log(`cicici`), 6000);
}

const value = {
  name: `clas`,
  date: new Date(),
};
const json = JSON.stringify(value, [`name`, `date`]);
console.log(json);
obj = JSON.parse(json, (key, value) => {
  return key === `date` ? new Date(value) : value;
});

console.log(obj.date.getDate());

function reject(name, print) {
  setTimeout(name, print);
}
reject(() => console.log(`name`), 2000);

function number(print, sick) {
  setTimeout(print, sick);
}
number(() => console.log(`123`), 3000);

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    if (id === `ellie` && password === `123`) {
      onSuccess(id);
    } else {
      onError(new Error(`get out here`));
    }
  }
  getRoles(user, onSuccess, onError) {
    if (user === `ellie`) {
      onSuccess({ name: `ellie`, role: `admin` });
    } else {
      onError(new Error(`get out here!`));
    }
  }
}

const id = prompt(`enter your id`);
const password = prompt(`enter your password`);
