const myArray = [true, 3.14, 'Hello', { name: '홍길동' }];

console.log(myArray);

console.log(myArray[2]);

myArray[4] = '홍길동';
console.log(myArray[4]);

// 배열에 아이템 추가시 push 메소드를 활용한다.
const myArray2 = [];
myArray2.push('안녕');
myArray2.push(3.14);
myArray2.push(true);
myArray2.push(false);
myArray2.push(99);

console.log(myArray2);
console.log(myArray2.length);

myArray2.pop(); // 마지막 요소 제거, 파괴 메소드
console.log(myArray2);
console.log(myArray2.length);

myArray2.splice(1, 1); // 1번방 부터 1개 제거
console.log(myArray2);
console.log(myArray2.length);
