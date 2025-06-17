//promise
//Es5 생성자 함수 호출, 인자로 콜백함수를 보낸다.
// 콜백함수의 파라미터는 2개다. 파라미터명은 아무거나해도 상관없으니
// 보통 resolve, reject로 한다
// resolve에도 콜백함수.
// reject에서 콜백함수가 들어간다 .
const p = new Promise((resolve, reject) => {
  //resolve는 성공시 호출
  resolve('성공성공'); //then 메소드의 콜백함수 호출
  //reject는 실패시 호출
  //   reject('실패실패'); // catch 메소드의 콜백함수 호출
});
p.then((item) => {
  console.log('then:', item);
  return '두번째';
})
  .then((item) => {
    console.log('2 then: ', item);
  })
  .catch((item) => {
    console.log('catch: ', item);
  });
