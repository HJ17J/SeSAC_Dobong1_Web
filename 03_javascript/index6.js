/* 
    1. for문
    for(변수 선언 및 초기값 할당; 조건식(어디까지 증감?); 증감식){
        반복할 내용
    }
*/

for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕하세요 ${i}`);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 감소
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지의 덧셈
let n = 11;
let sum = 0;
for (let i = 1; i < n + 1; i++) {
  sum = sum + i;
}
console.log(sum);

/* 배열과 함께 사용하는 for문 */
let fruits = ["사과", "망고", "오렌지", "망고스틴"];
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(`i like ${fruits[i]}`);
}

let numArr = [47, 33, 78, 29, 101];
let sum2 = 0;

for (let i = 0; i < numArr.length; i++) {
  sum2 += numArr[i];
}
console.log(sum2);

/* 
    2. while문
    초기화식
    while(조건){
        조건이 참일 때 실행할 문장
        증감식
    }
*/

let n2 = 1;
while (n2 <= 5) {
  console.log(n2);
  n2++;
}

n2 = 10;
while (n2 > 4) {
  console.log(n2);
  n2--;
}

// 1~10 짝수만 출력
n2 = 1;
while (n2 <= 10) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2++;
}

// 10부터 1까지 감소 + 홀수만 출력
n2 = 10;
while (n2) {
  if (n2 % 2 === 1) {
    console.log(n2);
  }
  n2--;
}

console.log("========================");

let b = 0;
while (true) {
  b++;
  console.log(b);

  if (b === 10) break;
}

console.log("========================");

let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; //짝수일 때 실행하지 않고 다음으로 넘김
  sum3 += i;
}
console.log(sum3);

let n3 = 0;
while (confirm("계속 진행할까요?")) {
  n3++;
  alert(`${n3}번째 alert창`);
}

// 13의 배수이면서 홀수인 수 찾기
let num = 0;

for (let i = 0; i < 1000; i++) {
  if (i % 13 === 0) {
    if (i % 2 === 1) console.log(i);
  }
}

let num2;
num2 = Number(prompt("숫자를 입력해주세요."));

for (let i = 1; i <= num2; i++) {
  if (i % 13 === 0) {
    if (i % 2 === 1) console.log(i);
  }
}

//for문으로 구구단 만들기
for (let i = 2; i <= 9; i++) {
  console.log(`=== ${i}단 ===`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 0~100까지 숫자 중 2 or 5의 배수 총합 구하기
let sum4 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum4 += i;
  }
}
console.log(sum4);
