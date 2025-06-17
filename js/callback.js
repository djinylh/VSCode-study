//콜백 지옥
setTimeout(() => {
  console.log('a');
}, 3000);

setTimeout(() => {
  console.log('b');
}, 2000);

setTimeout(() => {
  console.log('c');
}, 1000);
