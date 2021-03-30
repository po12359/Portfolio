let fruits1 = ["apple", "banana", "orange"];
{
  let result = "";
  fruits1.forEach((text, index) => {
    result += text;
    if (index < fruits1.length - 1) {
      result += ",";
    }
  });
  console.log(result);
  result = fruits1.join(",");
  console.log(result);
}
fruits1 = "apple, banana, orange";
{
  let result = [];
  for (let item of fruits1) {
    if (item !== `,` && item !== "") {
      result.push(item);
    }
  }
  console.log(result);
  result = fruits1.split(`,`);
  console.log(result);
}
const array1 = [1, 2, 3, 4, 5];

{
  let result = array1.reverse();
  console.log(result);
}
{
  let result = array1.splice(1, 4);
  console.log(result);
}
const array2 = [1, 2, 3, 4, 5, 6, 7, 9];
{
  let result = array2.slice(2, 9);
  console.log(result);
}
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

{
  let result = students.find((students) => students.score === 90);
  console.log(result);
  result = {};
  for (let item in students) {
    if (students[item].score === 90) {
      result = students[item];
      break;
    }
  }
  console.log(result);
}
{
  // My
  let result = [];
  for (let index in students) {
    if (students[index].enrolled) result = students[index].enrolled;
  }
  console.log(result); // > [Student, Student, Student]
}
{
  // Solution
  const result = students.map((student) => student.score);
  console.log(result); // > [45, 80, 90, 66, 88]
}

{
  let result = students.some((students) => students.score < 50);
  console.log(result);
  result = !students.every((students) => students.score >= 50);
  console.log(result);
}

{
  let result = students
    .map((students) => students.score)
    .sort((a, b) => a - b)
    .join(`,`);
  console.log(result);
}
