//promise, 콜백지옥을 promise를 이용하여 해방

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('A');
    resolve('B');
  }, 3000);
});

p.then((item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item);
      resolve('C');
    }, 2000);
  });
}).then((item) => {
  setTimeout(() => {
    console.log(item);
  }, 1000);
});
