const arr = [10, 20, 30, 40, 50];
console.log('length:', arr.length);

arr.forEach(function (item, idx) {
  console.log(`item: ${item}, idx: ${idx}`);
});

//forEach를 이용한 arr의 모든 값들을 더한 결과값을 구하시오

let total = 0;
arr.forEach(function (item) {
  total += item;
});
console.log(total);

// const sum = function (cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb((sum += this[i]), i);
//   }
// };
// console.log(sum);

const myArr = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  4: 50,
  length: 5,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  },
};
