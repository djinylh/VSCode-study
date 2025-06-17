//promise, 콜백지옥을 promise를 이용하여 해방
function fnA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A');
      resolve('B');
    }, 3000);
  });
}

function fnB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(item);
      resolve('C');
    }, 2000);
  });
}

function fnC(item) {
  setTimeout(() => {
    console.log(item);
  }, 2000);
}

fnA()
  .then((item) => fnB(item))
  .then((item) => fnC(item));

//then,catch를 사용하지 않고 async, awiat을 활용하여 코딩할 수 있다.
//await을 사용하면 async 함수에서만 사용할 수 있다.

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('A');
//     resolve('B');
//   }, 3000);
// });

// p.then((item) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(item);
//       resolve('C');
//     }, 2000);
//   });
// }).then((item) => {
//   setTimeout(() => {
//     console.log(item);
//   }, 1000);
// });
