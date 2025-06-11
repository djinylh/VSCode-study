const sum = function (n1, n2) {
  console.log('함수호출');
  return n1 + n2;
};
console.log(sum(10, 20));
const copySum = sum;
const result = copySum(10, 20);
console.log(result);
