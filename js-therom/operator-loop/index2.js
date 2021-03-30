console.log(`girl ` + ` boy`);
console.log(`1` + 33);
console.log(`${`12`}+${`213`} : ${12 + 213}`);
console.log(`ellie \n book`);

console.log(1 + 4);
console.log(1 * 69);
console.log(21321 - 1412421);
console.log(22 * 22);
console.log(22 % 2);

let counter = 0;
let soso = ++counter;
console.log(`preincrement : ${soso} , counter : ${counter}`);
sisi = counter--;
console.log(`postdecrement : ${sisi}, counter :${counter}`);
soso = counter++;
console.log(`postIncrment : ${soso}, counter: ${counter}`);

const value1 = false;
const value2 = 3 > 1;

console.log(value1 || value2 || sax);

function consor() {
  for (i = 0; i < 10; i++) {
    return true;
  }
}
const sax = consor();

console.log(value1 && value2 && sax);
console.log((value1 && sax) || !value2);

console.log(!sax);

const coco = `coco`;
if (coco === `i love you`) {
  console.log(`so sick`);
} else if (coco === `script`) {
  console.log(`sass`);
} else {
  console.log(`so so so`);
}

console.log(coco === `coco` ? `i love you` : `so sick`);

let sosi = `di`;

//
//
//
//
//
//
//
//
switch (sosi) {
  case `chrome`:
    console.log(`go away`);
  case `fireFox`:
  case `IE`:
    console.log(`stop!!`);
  case `di`:
    console.log(`get out`);
}

let j = 5;
while (j > 0) {
  console.log(j);
  j--;
}
j = 10;
while (40 > j > 0) {
  console.log(j);
  j++;
}

for (let s = 0; s < 11; s++) {
  if (s % 2 !== 0) {
    continue;
  }
  console.log(s);
}

for (s = 0; s < 11; s++) {
  if (s > 8) {
    break;
  }
  console.log(s);
}

for (let c = 11; c < 22; c++) {
  console.log(c);
}

j = 5;
do {
  console.log(j);
  j--;
} while (-10 < j < 5);
