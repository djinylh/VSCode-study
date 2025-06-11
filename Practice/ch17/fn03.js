const sum = (n1, n2) => {
  console.log('sum메소드 호출');
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
};

sum(10, 30);

//생략 가능한 것 : 리턴 , 중괄호, 소괄호

// 소괄호 생략 가능 : 파라미터가 하나일 때
const abs = (val) => {
  return val < 0 ? -val : val;
};

console.log(abs(-10));

// 중괄호 생략 가능, 코드가 한 줄일 때.
const abs2 = (val) => console.log(val < 0 ? -val : val);
abs2(-11);
abs2(3);

//return 생략 가능, 코드가 한 줄일 때 (중괄호도 없어야 한다.)
const abs3 = (val) => (val < 0 ? -val : val);
console.log(abs3(-10));
