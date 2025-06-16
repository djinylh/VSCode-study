//필요한 아이템만 걸러서 새로운 배열을 만들고 싶을 때
const arr = [11, 52, 7, 19, 40, 56];

const filterArr = arr.filter((item) => item % 2 == 0);
console.log('arr', arr);
console.log('filterArr', filterArr);

const myArr = {
  0: 11,
  1: 52,
  2: 7,
  3: 19,
  4: 40,
  5: 56,
  length: 6,
  filter: function (cb) {
    const temp = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) temp.push(this[i]);
    }
    return temp;
  },
};

const myfilterArr = myArr.filter((item) => item % 2 == 0);
console.log('myfilterArr', myfilterArr);
// const temp = [];
// temp.push(1);
// temp.push(2);
// temp.push(3);

// console.log(temp);
