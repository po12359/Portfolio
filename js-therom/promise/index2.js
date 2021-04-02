{
  class User {
    constructor(name, age, birthday) {
      this.name = name;
      this.age = age;
      this.birthday = birthday;
    }
    speak() {
      console.log(`hello, ${this.name}`);
    }
  }

  let userInfo = new User(`suzy`, 22, new Date());
  userInfo.speak();
  console.log(userInfo.name);
}

const user = new Promise((resolve, reject) => {
  console.log(`dream coding`);
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

user
  .then((key) => {
    return key + 123;
  })
  .then((key) => key + 1142)
  .then((key) => key + 12512)
  .then((key) => {
    console.log(key);
  });

const user1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

user1
  .then((num) => {
    return num * 2;
  })
  .then((num) => num + 1)
  //   .chtch((error) => console.log(error))
  .then((num) => num - 2)
  .then((num) => {
    console.log(num);
  });
