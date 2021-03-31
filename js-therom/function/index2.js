"use stict";

//parameters funtion

function printObj(obj) {
  obj.name = `ellie`;
}
{
  const printobj = { name: `suzy` };
  printObj(printobj);
  /* funtion printObj(printobj){
  printobj.name = "ellie"
}   */
  console.log(printobj);
}

// default papameters
{
  function printDefault(age, name) {
    console.log(age);
    console.log(name);
    console.log(`age : ${age}, name : ${name}`);
  }
  printDefault(19);
  // age : 19, name : undefind
}

// rest parameters
{
  function printRest(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
      //args를 array 한다 []
    }
    for (arg of args) {
      console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
  }

  printRest(`name`, `age`, `birthday`);
}

// Local scope

{
  let globalMsg = `local scope`;
  function printScope() {
    let message = `hello`;
    console.log(message);
    console.log(globalMsg);
    function printAnother() {
      console.log(message);
      let closing = `저 새끼 좆사기`;
    } //  클로저 : 자식 함수인(printAnother)가 부모 함수인 printScope를 사용할 수 있다.
  }
  console.log(closing);
}

printScope();

// return a value => import!!!!!
{
  function printReturn(a, b) {
    return [a + b, a - b, a * b];
  }
  const resose = printReturn(12, 5);
  console.log(resose);
}

// early return, early exit
{
  function printEarly(name) {
    if (name === "ellie") {
      return `nice to meet you`;
    } else if (name === `IU`) {
      return `oh!! my god`;
    } else {
      `get out here!`;
    }
  }
  let early = printEarly(`IU`);
  console.log(early);
}

// function experssion
{
  function print() {
    console.log(`go to hell`);
  }
  print();
  let print2 = print;
  print2();
}
{
  function sum(a, b) {
    return a + b;
  }
  const sum1 = sum;
  console.log(sum1(1, 2));
}

// callbakc function
{
  function quiz(answer, printYes, printNo) {
    if (answer === `i love you`) {
      printYes();
    } else {
      printNo();
    }
  }
  const printYes = function print() {
    console.log(`Yes`);
  };
  const printNo = function print2() {
    console.log(`No`);
  };
  quiz(`i love you`, printYes, printNo);
  quiz(`so sick`, printYes, printNo);
}

{
  function schoolClass(score, role, sex) {
    if (score >= 60 && sex === `male`) {
      role();
    } else {
      console.log(`you're fire!`);
    }
  }
  const role = function () {
    console.log(`ace class`);
  };
  schoolClass(91, role, `male`);
  schoolClass(11, role, `male`);
  schoolClass(51, role, `female`);
  schoolClass(100, role, `female`);
}

{
  function coderYoutuber(name, subscribe) {
    // if (name === `ellie` || `nomard` === name) {
    //   subscribe();
    // } else {
    //   console.log(`soso`);
    // }
    name === `ellie` || name === `nomard` ? subscribe() : console.log(`soso`);
  }
  const subscribe = function () {
    console.log(`good teacher`);
  };
  coderYoutuber(`ellie`, subscribe);
  coderYoutuber(`nomard`, subscribe);
  coderYoutuber(`dream`, subscribe);
  coderYoutuber(`스파르타`, subscribe);
}

{
  const call = (a, b) => {
    return a + b;
  };
}
