// map을 사용하는 이유는? 똑같은 크기의 새로운 배열을 만들면서 새로운 값들로 세팅하고 싶을 때 사용
const arr = [11, 52, 7, 19, 40, 56];
const mapArr = arr.map((item) => item + 1);

console.log(arr);
console.log(mapArr);
console.log(arr === mapArr);

const myArr = {
  0: 11,
  1: 52,
  2: 7,
  3: 19,
  4: 40,
  5: 56,
  length: 6,
  map: function (cb) {
    const temp = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
      temp[i] = cb(this[i], i);
    }
    return temp;
  },
};
const myMapArr = myArr.map((item) => item + 1);
console.log('myMapArr', myMapArr);
