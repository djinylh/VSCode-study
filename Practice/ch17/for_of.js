const myArray = ['A', 'B', 'C', 'D'];

console.log(Array.isArray(myArray));

for (const item of myArray) {
  console.log(item);
}

//유사 배열
const myArray2 = {
  0: '가',
  1: '나',
  2: '다',
  3: '라',
  length: 4,
};

for (let i = 0; i < myArray2.length; i++) {
  console.log(myArray2[i]);
}

const myArray2Iterable = Array.from(myArray2);

for (const item of myArray2Iterable) {
  console.log(item);
}
