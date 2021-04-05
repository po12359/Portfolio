`use strict`;

// {
//   class UserPrint {
//     loginUser(id, password, onSuccess, onError) {
//       setTimeout(() => {
//         if (
//           (id === `ellie` && password === `123`) ||
//           (id === `po12359` && password === `123`)
//         ) {
//           onSuccess(id);
//         } else {
//           onError(new Error(`get out here`));
//         }
//       }, 1000);
//     }
//     getRole(user, onSuccess, onError) {
//       setTimeout(() => {
//         if (user === `ellie`) {
//           onSuccess({ user: `ellie`, role: `male` });
//         } else {
//           onError(new Error(`get out here`));
//         }
//       }, 1000);
//     }
//   }
//   const id = prompt(`enter your id`);
//   const password = prompt(`enter your password`);
//   const userprint = new UserPrint();
//   userprint.loginUser(
//     id,
//     password,
//     (user) => {
//       userprint.getRole(
//         user,
//         (userInfo) => {
//           console.log(userInfo);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     },
//     (error) => console.log(error)
//   );
// }

// {
//   class UserPopo {
//     loginUser(id, password, onSuccess, onError) {
//       setTimeout(() => {
//         if (
//           (id === `ellie` && password === `123`) ||
//           (id === `po12359` && password === `rksvks1!`)
//         ) {
//           onSuccess(id);
//         } else {
//           onError(new Error(`get out here`));
//         }
//       });
//     }
//     getRoles(user, onSuccess, onError) {
//       setTimeout(() => {
//         if (user === `ellie` || user === `po12359`) {
//           onSuccess({ user: `ellie`, role: `adming` });
//         } else {
//           onError(new Eroor(`get out here`));
//         }
//       });
//     }
//   }
//   const id = prompt(`enter your id`);
//   const password = prompt(`enter your password`);
//   const userPopo = new UserPopo();
//   userPopo.loginUser(id, password, (user) => {
//     userPopo.getRoles(
//       user,
//       (userInfo) => {
//         alert(`user : ${userInfo.user}, role : ${userInfo.role}`);
//       },
//       (error) => console.log(error)
//     ),
//       (error) => console.log(error);
//   });
// }

{
  class Success {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === `po12359` && password === `123`) ||
          (id === `ellie` && password === `dnalswl1`)
        ) {
          onSuccess(id);
        } else {
          onError(new Error(`get out here`));
        }
      }, 2000);
    }
    userRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === `suzy` || user === `po12359`) {
          onSuccess({ name: `suzy`, role: `admin` });
        } else {
          onError(new Error(`get out here`));
        }
      }, 2000);
    }
  }

  const id = `po12359`;
  const password = `123`;

  const success = new Success();
  success.loginUser(
    id,
    password,
    (user) => {
      success.userRoles(
        user,
        (userInfo) => {
          console.log(`id : ${userInfo.name}, role : ${userInfo.role}`);
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

  // const id = prompt(`enter your id`);
  // const password = prompt(`enter your password`);
  // const userInfo = new Successs();
  // userInfo.loginUser(
  //   id,
  //   password,
  //   (user) =>
  //     userInfo.userRoles(
  //       user,
  //       (userInfo) => {
  //         alert(`user : ${userInfo.name}, role : ${userInfo.role}`);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     ),
  //   (error) => console.log(error)
  // );
}
