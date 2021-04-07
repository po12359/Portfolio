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

// class UserPrint {
//   loginUser(id, password, onSuessecc, onError) {
//     if (id === `ellie` && password === `123`) {
//       onSuessecc(id);
//     } else {
//       onError(new Error(`get out here`));
//     }
//   }
//   getUser(user, onSuessecc, onError) {
//     if (user === `ellie`) {
//       onSuessecc({ user: `ellie`, role: `admin` });
//     } else {
//       onError(new Error(`get out here`));
//     }
//   }
// }

// const id = prompt(`enter your id`);
// const password = prompt(`enter your password`);

// const userPrint = new UserPrint();
// userPrint.loginUser(
//   id,
//   password,
//   (user) => {
//     userPrint.getUser(
//       user,
//       (userInfo) => {
//         alert(`user : ${userInfo.user}, role : ${userInfo.role}`);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => console.log(error)
// );

{
  let result = new Promise(function numver(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  result
    .then((num) => num + 1)
    .then((num) => num * 3)
    .then((num) => {
      console.log(num);
    });
}

// const getHen = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`🐓`), 2000);
//   });
// };
// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => 🥚`), 1000);
//   });

// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => 🍗`), 1000);
//   });

// getHen()
//   .then((hen) => {
//     return getEgg(hen);
//   })
//   .then((egg) => {
//     return cook(egg);
//   })
//   .then((result) => {
//     console.log(result);
//   });

const sex = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`get out here`));
  }, 1000);
});

sex.catch((error) => console.log(error));

const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐓`), 1000);
    // setTimeout(() => reject(new Error(`error! 🐓`)), 1000);
  });
};
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍗`), 1000);
    // setTimeout(() => reject(new Error(`error! ${egg} => 🍗`)), 1000);
  });

getHen()
  .catch((error) => {
    console.log(error);
    return `💀`; // 빵꾸처리
  })
  .then((hen) => getEgg(hen))
  .catch((error) => {
    console.log(error);
    return `💀`; // 빵꾸처리
  })
  .then((egg) => cook(egg))
  .catch((error) => {
    console.log(error);
    return `💀`; // 빵꾸처리
  })
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error);
  });

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === `ellie` && password === `123`) ||
          (id === `gunwoo` && password === `1104`)
        ) {
          resolve(id); //
          //if면 onSuccess 떄려!!
        } else {
          reject(new Error(`not found`));
        } //
        //else면 onError를 떄려!!
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === `ellie`) {
          resolve({ name: `ellie`, role: `admin` }); //
          //if면 onSuccess 떄려!!
        } else {
          reject(new Error(`no access`));
        } //
        //else면 onError를 떄려!!
      }, 1000);
    });
  }
}

const id = prompt(`enter your id`);
const password = prompt(`enter your password`);

const userStorage = new UserStorage();
userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user))
  .then((userInfo) =>
    console.log(`id : ${userInfo.name}, role : ${userInfo.role}`)
  )
  .catch((error) => {
    console.log(error);
  });

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
delay(3000).then(() => console.log(`secnods`));

let numbers = [ 3, 1, 4, 1, 5, 9]

function for_loop(array){
let sum =0;
 for(let i = 0; i<array.length; i++)
 //{
//  sum +=array[i];}
 console.log(array[i]);
// return sum;

}
for_loop(numbers);