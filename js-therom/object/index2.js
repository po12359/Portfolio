function name(some) {
  console.log(some.age);
  console.log(some.name);
}

const some = {
  name: `ellie`,
  age: 21,
};
name(some);

some.hasJob = `sexy model`;
console.log(some.hasJob);

delete some.hasJob;

let ellie = { name: "ellie", age: 4 };

function print(obj, key) {
  console.log(obj[key]);
}

print(ellie, [`name`]);
print(ellie, `age`);

function easy(name, age) {
  return {
    name,
    age,
  };
}

const easys = easy(`suzy`, 21.2);
console.log(easys);

for (let key in ellie) {
  console.log(key);
}
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}
