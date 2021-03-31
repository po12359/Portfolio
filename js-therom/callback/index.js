// ## 1. 동기와 비동기

// - Javascript는 synchronous(동기적)이다
// - hoisting이 된 이후부터, 코드가 작성한 순서대로 실행됨

//     hoisting: var, function 선언 들이 코드 맨 위로 자동으로 올라가는 것

console.log(`1`);
setTimeout(() => console.log(`2`), 1000);
console.log(`3`);

// Synchronous(동기식) callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log(`hello`));

// Asynchronous(비동기식) callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log(`async callback`), 2000);

// ## 2. 콜백 체인의 문제점

// - 가독성이 안좋다
// - 비즈니스 로직을 이해하기 힘듦
// - 디버깅 할 때, 굉장히 어려움
// - 유지보수 안좋음

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === `ellie` && password === `123`) ||
        (id === `gunwoo` && password === `1104`)
      ) {
        onSuccess(id); //
        //if면 onSuccess 떄려!!
      } else {
        onError(new Error(`not found`));
      } //
      //else면 onError를 떄려!!
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === `ellie`) {
        onSuccess({ name: `ellie`, role: `admin` }); //
        //if면 onSuccess 떄려!!
      } else {
        onError(new Error(`no access`));
      } //
      //else면 onError를 떄려!!
    }, 1000);
  }
}

const id = prompt(`enter your id`);
const password = prompt(`enter your password`);

const userStorage = new UserStorage();
userStorage.loginUser(
  id,
  password,
  // Onsuccess(user){userstorage.goeroles(userinfo){~~~}}
  (user) => {
    // user === OnSuccess(id) === OnSuccess(Ellie)
    userStorage.getRoles(
      user,
      (userInfo) => {
        alert(`name: ${userInfo.name}, role: ${userInfo.role}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
