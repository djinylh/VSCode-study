function fnA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A');
      resolve('B');
    }, 3000);
  });
}

function fnB(item) {
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
  }, 1000);
}

async function start() {
  const item = await fnA();
  const item2 = await fnB(item);
  fnC(item2);
}
start();
