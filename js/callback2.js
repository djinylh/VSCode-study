//callback_he112/js
setTimeout(() => {
  console.log('a');
  setTimeout(() => {
    console.log('b');
    setTimeout(() => {
      console.log('c');
    }, 1000);
  }, 2000);
}, 3000);
