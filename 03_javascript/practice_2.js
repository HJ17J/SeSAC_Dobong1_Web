/* 내장 메소드 실습 문제 1 - 배열과 합 */
// 1~100까지 배열을 for문으로 만들기
let numArr = [];

for (let i = 0; i < 100; i++) {
  numArr[i] = i + 1;
}

// 해당 배열의 합을 for문, for of문, forEach문으로 구하기
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}
console.log("==========");

for (let num of numArr) {
  console.log(num);
}
console.log("==========");

numArr.forEach((element) => {
  console.log(element);
});

/* 내장 메소드 실습 문제 2 */
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// 두 배열에서 동일한 요소만을 가지는 배열 same 만들기
let same = [];

/* 
for (let i = 0; i < fruits2.length; i++) {
    if (fruits1.includes(fruits2[i])) {
        same.push(fruits2[i]);
    }
}
 */

same = fruits2.filter((sameFruit) => {
  return fruits1.includes(sameFruit);
});
console.log(same);

// 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기
let diff = [];
/*
 for (let i = 0; i < fruits1.length; i++) {
  if (!fruits2.includes(fruits1[i])) {
    diff.push(fruits1[i]);
  }
}
*/
diff = fruits1.filter((diffFruit) => {
  return !fruits2.includes(diffFruit);
});
console.log(diff);

/* 내장 객체 실습 문제 1 - 주말과 평일 */

// 내장 객체 Date를 이용해서 오늘이 평일인지 주말인지 출력하기
let now = new Date();
console.log(now);

if (now.getDay() === 0 || now.getDay() === 6) {
  console.log("오늘은 주말입니다.");
} else {
  console.log("오늘은 평일입니다.");
}

/* 내장 객체 실습 문제 2 - 난수 생성 */
// 0~10 사이의 랜덤한 숫자를 출력하는 프로그램 작성 (0, 10 포함)
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
