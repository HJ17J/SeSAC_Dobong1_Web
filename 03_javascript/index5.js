/* 
    1. if문
    if(조건식){ // 조건이 참일 때 실행할 문장}
*/
if (5 > 3) console.log("5가 3보다 커요");

// let number = prompt("숫자를 입력해주세요.");
// number = Number(number);
let number = 88;

/* if ~ else */
if (number > 10) {
  console.log("숫자가 10보다 큽니다.");
} else {
  alert("숫자가 10보다 작거나 같습니다.");
}

/* if ~ else if ~ else */
if (number > 10) {
  console.log("10보다 큽니다.");
} else if (number === 10) {
  console.log("10입니다.");
} else {
  console.log("10보다 작습니다.");
}

let age = 10;
// let age = prompt("나이를 입력해주세요.");
// age = Number(age);
if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else if (age >= 0) {
  console.log("유아");
}

/* 
    2. switch ~ case문
    - switch의 괄호 안과 case의 조건에는 비교식X 값 자체가 들어감
    - 자바스크립트에선 조건이 많을 때 switch를 쓰는 게 근소하게 성능이 유리함
*/

let a = 4;
switch (a) {
  case 3:
    console.log("3입니다");
    break;
  case 4:
    console.log("4입니다");
    break;
  // case 4를 출력할 때 break가 없으면 case 5까지 모두 실행됨(스코프에서 빠져나가지 못함)
  case 5:
    console.log("5입니다");
    break;
  default:
    console.log("어떤 값인지 모르겠어요🤔");
    break;
}

let score = 50;

if (score > 100 || score < 0) {
  console.log("잘못된 점수입니다");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//switch로 성적 판별
//score 값을 0~100 범위로 제한하여 예외처리를 한 상태에서 switch문을 사용해야 함
switch (parseInt(score / 10)) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
  case 7:
    console.log("C");
  case 6:
    console.log("D");
  default:
    console.log("F");
}

/* 
    3. 삼항연산자
    조건식 ? true일 때 : false일 떄
*/
let num = 1;

if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

num % 2 === 1 ? console.log("홀수") : console.log("짝수");

let now = new Date().getHours();
now >= 0 || now <= 11 ? console.log("오전") : console.log("오후");
