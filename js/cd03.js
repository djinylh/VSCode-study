function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

const calc = function (cd, n1, n2) {
  console.log(`결과: ${cd(n1, n2)}`);
};

calc(sum, 10, 20); // 콘솔에 30이 출력
calc(sub, 20, 12);
