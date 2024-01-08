// 1. string (문자열)
/* 
    - 텍스트 정보
    - 숫자, 특수문자도 따옴표 안에 있으면 문자열
    - 따옴표 안에 따옴표가 있다면?
        "안에 '작은 따옴표'가 있어요"
        '안에 "큰 따옴표"가 있어요'
*/

let myName = "현정";
let number1 = "128";
console.log(myName);
console.log(number1);

// 2. number (숫자)
let number2 = 128;
let opacity = 0.7;
console.log(number2);
console.log(opacity);

// * NaN (not a number)
console.log("apple" - 3);

// 3. boolean
// true or false
let checked = true;
let isShow = false;

console.log(checked, isShow);

// 4. undefined
// 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef);

// 5. null
// 의도적으로 값을 비워둔 상태
let empty = null;
console.log(empty);

// 6. array
let fruits = ["orange", "apple", "grapes", "strawberry"];
console.log(fruits[2]);
console.log(fruits[0]);

let data = [22, "22", false];
console.log(data[0]);
console.log(data[1]);

// * 2차원 배열
const korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];
console.log(korean[0]);
console.log(korean[0][1]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(letters[3][0], letters[1][3], letters[0][1], letters[0][3], letters[2][2]);

// 3차원 배열
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(nums[1][0][1]);

// 7. Object
// {}
// 배열은 순서가 있는 방면, object는 키-값 형태로 저장
// 데이터에 접근 시 key 이름을 통해 접근
// {key1:val1, key2:val2}

let cat = {
  name: "나비",
  age: 2,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};

console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());
cat.like = "tuna";
cat.age = 3;
console.log(cat);

// 대괄호 표기법
let dog = {
  name: "coco",
  isPoodle: true,
  age: 3,
  sibling: ["max", "lucy"],
};

console.log(dog.name);
console.log(dog["name"]);
console.log(dog["age"]);
console.log(dog["sibling"][1]);

// let mathScore = prompt("수학 점수를 입력하세요.");
// let engScore = prompt("영어 점수를 입력하세요.");
// let mathNumber = Number(mathScore);
// let engNumber = Number(engScore);
// let avg = (mathNumber + engNumber) / 2;
// console.log(avg);

// console.log(typeof "문자"); // string
// console.log(typeof mathScore); // string
// console.log(typeof mathNumber); // number
// console.log(typeof true); // boolean
// console.log(typeof []); // object
// console.log(typeof {}); // object
// console.log(typeof NaN); //number
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

// 형 변환
// 1. to string
console.log("--------------------");

let str1 = true; // boolean
let str2 = 123; // number
let str3 = null; // null

console.log(String(str1));
console.log(String(str2));
console.log(String(str3));
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

// 2. to number
console.log("---------------");

let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = "123.9";

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(Number(n4));
console.log(parseInt(n4)); // 123, 소수점은 버리고 정수형으로 변환

console.log(typeof 1 + " isn't " + typeof " " + " data type");

let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);
