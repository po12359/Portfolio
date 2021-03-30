`use strict`;

let globalName = `globalName`;
{
  let name = `ellie`;
  console.log(name);
  name = `hello!`;
  console.log(name);
  console.log(globalName);
}

console.log(globalName);

const number1 = 123;
const number2 = 12321;
console.log(` ${number1} + ${number2} = ${number1 * number2}`);
console.log(` ${number1} + ${number2} = ${number1 - number2}`);

const infinity = 1 / 0;
const negativeInfinity = -12321 / 0;
const nAn = `sax` / 0;
console.log(`value : ${infinity}, type : ${typeof infinity}`);
console.log(negativeInfinity);
console.log(nAn);

const canRead = true;
const test = 1 > 3;
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

let nothing = null;
console.log(`value: ${nothing}, type : ${typeof nothing}`);

let x;
console.log(x);

const ellie = { name: `ellie`, age: 23 };

ellie.age = 21;
ellie.name = `chan yeong`;
console.log(ellie);

let text = `hello`;
console.log(text.charAt(1));
text = `1` + 2;
console.log(text);
text = `111` / 12;
console.log(text);
