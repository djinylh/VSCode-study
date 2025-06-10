const person2 = {
  name: '김달순',
  age: 23,
  language: ['한국어', '영어', '프랑스어'],
  education: {
    scholl: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    granduated: true,
  },
};

for (const item in person2) {
  console.log(item, ':', person2[item]);
}
