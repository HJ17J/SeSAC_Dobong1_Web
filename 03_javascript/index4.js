/* 
    함수
    - 어떤 작업을 수행하기 위해 "독립적으로" 설계된 코드의 집합
    - 함수를 정의(선언)하고 호출(사용)
    - 선언 방식은 3가지
        - 함수 선언문
            - 선언 후 어디에서나 사용 가능
        - 함수 표현식
            - 선언 이후에만 사용 가능
        - 화살표 함수
            - 화살표 함수와 함수 표현식은 변수에 익명함수를 담은 형태
            - 화살표 함수와 함수 표현식은 동일함 (형태만 다름)
*/

// 함수 선언문
helloWorld1();

function helloWorld1() {
  console.log("~hello world 1~");
}

// 함수 표현식
// helloWorld2();  //error
const helloWorld2 = function () {
  console.log("~hello world 2~");
};

helloWorld2();

// 화살표 함수
const helloWorld3 = () => {
  console.log("~hello world 3~");
};

helloWorld3();

// 함수에 인자(parameter) 전달
function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 100);

/* 
    return
        - 반환 값으로 함수 내부 코드의 '최종 결과값'을 가지고 있는 것
        - console.log 등으로 출력하는 데 그치지 않고 값을 저장하고 보관하기 위한 키워드
        - return을 만나면 함수 실행 중단됨
*/

const add1 = function (num1, num2) {
  console.log("리턴 전에는 실행 가능");
  return num1 + num2;
  console.log("리턴 후에는 실행 불가");
};

console.log(add1(1, 2));
let result1 = add1(4, 7);
console.log(result1);
const result2 = add(3, 2);
console.log(result2); //undefined, return값 없음
console.log("=====================");

const sayHello = function (text) {
  return text;
};
console.log(sayHello("allie"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

// 함수 표현식(sayHello3), 화살표 함수(sayHello4)
const sayHello3 = function (text, name) {
  return `${text} ${name}`;
};
console.log(sayHello3("Hello!x3", "-HJ"));

const sayHello4 = (text, name) => {
  return `${text} ${name}`;
};

console.log(sayHello4("Hello!x4", "-HJ"));
