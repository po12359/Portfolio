// # 퀴즈 타임

// ## Q1. 배열에서 문자열 만들기

// - join

const fruits1 = ["apple", "banana", "orange"];
{
  // My
  let result = ``;
  fruits1.forEach((item, index) => {
    result += item;
    if (index < fruits1.length - 1) result += `, `;
  });
  console.log(result); // > apple, banana, orange
}
{
  // Solution
  const result = fruits1.join(`, `);
  console.log(result); // > apple, banana, orange
}

//
//
//
//
//
//

// ## Q2. 문자열로 배열 만들기

// - split

const fruits2 = "🍎, 🥝, 🍌, 🍒";
{
  // My
  const result = [];
  for (let item of fruits2) {
    if (item !== `,` && item !== ` `) {
      result.push(item);
    }
  }
  console.log(result); // > ["🍎", "🥝", "🍌", "🍒"]
}
{
  // Solution
  const result = fruits2.split(`, `);
  console.log(result); // > ["🍎", "🥝", "🍌", "🍒"]
}

//
//
//
//
//
//
//
//
///
//
//
//## Q3. 배열을 다음과 같이 만드십시오 : [5, 4, 3, 2, 1]

// - reverse

const array1 = [1, 2, 3, 4, 5];
{
  // My
  array1.sort((a, b) => b - a);
  console.log(array1); // > [5, 4, 3, 2, 1] : 기존의 배열이 바뀜
}
{
  // Solution
  const result = array1.reverse();
  console.log(array1.reverse()); // > [1, 2, 3, 4, 5] : 기존의 배열이 바뀜
  console.log(result); // > [1, 2, 3, 4, 5] : 리턴값 존재
}

//
//
//
//
//
//
//
//
//
//## Q4. 처음 두 요소없이 새 배열 만들기
//- slice

const array2 = [1, 2, 3, 4, 5];
{
  // My
  const result = array2.filter((item, index) => index > 0);
  console.log(result); // > [3, 4, 5]
  // console.log(array2); // > [1, 2, 3, 4, 5] : 기존의 배열은 변화가 없음
}
{
  // Solution
  const result = array2.slice(2, 5);
  console.log(result); // > [3, 4, 5]
  // console.log(array2); // > [1, 2, 3, 4, 5] : 기존의 배열은 변화가 없음
}

//
//
//
//
//
//
//
//
//
//
//공통(Q5 ~ Q10)

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

// ## Q5. 90 점의 학생 찾기

// - find

//     최초의 true가 나오면 해당 요소를 리턴한다.

// ## Q6. enrolled 가 true인 학생들의 배열

{
  // My
  let result = {};
  for (let index in students) {
    if (students[index].score === 90) {
      result = students[index];
      break;
    }
  }
  console.log(result); // > Student {name: "C", age: 30, enrolled: true, score: 90}
}
{
  // Solution
  const result = students.find((student) => student.score === 90);
  console.log(result); // > Student {name: "C", age: 30, enrolled: true, score: 90}
}

//   - filter

//   조건이 true인 요소들을 모아서 리턴해줌

{
  // My
  const result = [];
  for (let index in students) {
    if (students[index].enrolled) result.push(students[index]);
  }
  console.log(result); // > [Student, Student, Student]
}
{
  // Solution
  const result = students.filter((student) => student.enrolled);
  console.log(result); // > [Student, Student, Student]
}

//
//
//
//
//## Q7. 학생의 점수 만 포함하는 배열 만들기

// - map

// 배열안의 모든 요소들을 콜백함수를 호출하면서 가공된 데이터들로 리턴되어짐

// 결과는 다음과 같아야합니다. [45, 80, 90, 66, 88]
{
  // My
  const result = [];
  students.forEach((item) => result.push(item.score));
  console.log(result); // > [45, 80, 90, 66, 88]
}
{
  // Solution
  const result = students.map((student) => student.score);
  console.log(result); // > [45, 80, 90, 66, 88]
}

//   ## Q8. 50 점 미만의 학생이 있는지 확인

// - some

//     배열의 요소들 중 콜백함수의 리턴 조건이 하나라도(or:||) true이면, true를 리턴

// - every

//     배열의 요소들 중 콜백함수의 리턴 조건이 모두(and:&&) true이면, true를 리턴

{
  // My
  students.forEach((item) => {
    if (item.score < 50) console.log(true); // > true
  });
}
{
  // Solution
  const result = students.some((student) => student.score < 50);
  console.log(result); // > true
  // const result2 = !students.every((student) => student.score >= 50)
  // console.log(result2);
}

// ## Q9. 학생들의 평균 점수 계산

// - reduce

//     배열 하나하나를 돌면서 무언가 누적할 때 쓰는 api

{
  // My
  let result = 0;
  students.forEach((item, index) => {
    result += item.score;
    if (index === students.length - 1) {
      result = result / students.length;
    }
  });
  console.log(result); // > 73.8
}
{
  // Solution
  // const result = students.reduce((prev, curr) => {
  //   console.log(prev); // return 된 값 (콜백함수의 2번째 인자가 없으면 값은 배열의 1번째 요소)
  //   console.log(curr); // 배열의 요소 (콜백함수의 2번째 인자가 없으면 배열의 2번째 요소부터 시작)
  //   console.log(`------------------`); // 구분선..
  //   return curr; // 다음 prev의 값으로 할당됨
  // });
  const result = students.reduce((prev, curr) => (prev += curr.score), 0); // 콜백함수의 2번째 인자가 0이므로 첫 prev의 값은 0으로 할당됨
  //(prev = prev + curr.score),0 => 0 = 0 + curr.score
  console.log(result / students.length); // > 73.8
}

// ## Q10. 모든 점수를 포함하는 문자열 만들기

// - map
// - join

// 결과는 '45, 66, 80, 88, 90' 이어야합니다.
{
  // My
  const scoreString = `45, 80, 90, 66, 88`;
  // step 1. 배열로 변환
  const scoreStringArray = [];
  let temp = ``;
  for (let i in scoreString) {
    if (scoreString[i] === `,`) {
      scoreStringArray.push(Number(temp));
      temp = ``;
      continue;
    }
    if (scoreString[i] === ` `) continue;

    temp += scoreString[i];

    if (i == scoreString.length - 1) scoreStringArray.push(Number(temp));
  }
  // step 2. 정렬
  scoreStringArray.sort((a, b) => {
    return a - b;
  });
  // step 3. 문자열로 변환
  let result = ``;
  scoreStringArray.forEach((item, index) => {
    result += item;
    if (index < scoreStringArray.length - 1) result += `, `;
  });
  console.log(result); // > 45, 66, 80, 88, 90
}
{
  // Solution
  const result = students
    .map((student) => student.score)
    .sort((b, a) => a > b)
    .join(`, `);
  console.log(result); // > 45, 66, 80, 88, 90
}
