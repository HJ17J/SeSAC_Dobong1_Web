/* 구조 분해 할당 */
/* 1. 배열의 구조분해 할당 */
const arr = ['tomato', 'kiwi', 'banana'];
console.log(arr[2]);
const [tomato, kiwi, banana] = arr;
console.log(kiwi);

const arr2 = ['빨', '주', '노', '초'];
const [red, orange, , green] = arr2;
console.log(red, green);

let x = 'first';
let y = 'second';
[x, y] = [y, x];

console.log(x, y);

let x2 = 'first';
let y2 = 'second';
let temp;
temp = x2;
x2 = y2;
y2 = temp;

/* 2. 객체의 구조분해 할당 */
const obj = {
  title: '제목',
  content: '내용',
  number: 0,
};

console.log(obj.title);

const { title: t2, content, number } = obj;
// console.log(title);
console.log(t2);

/* 전개구문 ... */
/* spread */
const arr3 = [1, 2, 3, 4, 5];
const arr4 = ['a', 'b', 'c'];

for (let el of arr3) {
  console.log(el);
}
console.log(...arr3);

// [1,2,3,4,5,'a','b','c']
const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4];
console.log(arr5);
console.log(arr6);

const str = 'alliehigh';

let strToArr = [...str];
let strToArr2 = str.split('');
console.log(strToArr);
console.log(strToArr2);

//object spread
const me1 = {
  name: 'hyeon',
  height: 168,
  friend: null,
  married: false,
};

const me2 = {
  name: '현정',
  like: ['영화보기', '누워있기'],
  greeting: function () {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height}입니다`);
  },
};

let me = { ...me1, ...me2 };
console.log(me);
me.greeting();

/* 실습. Spread 연산자 사용하기 */
const word1 = 'abc';
const word2 = 'xyy';

const wordArr = [...word1, ...word2];
const wordArr2 = (word1 + word2).split('');
const wordArr3 = word1.split('').concat(word2.split(''));
console.log(wordArr);
console.log(wordArr2);
console.log(wordArr3);

/* rest */
const obj2 = {
  title: '제목',
  content: '내용',
  num: 0,
  key4: 'value4',
  key5: 'value5',
};

const { title: a, content: b, num: c, ...obj3 } = obj2;
console.log(obj3);

console.log('=======================');

function test(...value) {
  console.log(value);
  const [a, b, ...rest] = value;
  console.log(a);
  console.log(b);
  console.log(rest);
}

test(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* quiz.
매개변수가 몇 개가 들어오든 합산해주는 addNumber() */

function addNumber(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  // numbers.forEach((el) => {
  //   sum += el;
  // });
  return sum;
}

const result = addNumber(1, 2, 3, 4, 5, 6, 7);
console.log(result);
