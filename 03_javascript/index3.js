// 변수
/* 
    var
    - 재선언, 재할당 모두 가능
    - 재선언: 바람직하지 않음 (중복 선언)
*/
var name = "홍길동";
var name = "홍길동2";
console.log(name);

/* 
    let
    - 재선언 불가능
    - 재할당 가능
    - 초기화 작업 필요 없음 (최초 선언 시 값 할당하지 않아도 됨)
*/
let c;
c = 10; // 재할당
// let c = 100; // 중복 선언 불가
console.log(c);

/* 
    const
    - 재선언, 재할당 모두 불가
    - 변하지 않는 값을 변수에 저장할 때 사용
    - 초기화 필요 (최초 선언 시 반드시 값 할당)
*/
// const a;
const b = 10;
// b = 100;
console.log(b);

let q1 = 3;
q1 = q1 - 3;
console.log(q1);

// 비교 연산자
// 1. == (값만 비교하는 연산자)
console.log("== 연산자");
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(1 != 2); //true
console.log(1 != 1); //false
console.log("1" == 1); //true
console.log("1" != 1); //false

console.log("" == "0"); //false
console.log(0 == "0"); // true
console.log(false == "0"); //true
console.log("" == 0); //true
console.log(undefined == null); //true

// 2. === (값과 data type까지 비교)
console.log("=== 연산자");
console.log("1" === 1); //false
console.log(undefined === null); //false
console.log("" === 0); //false
console.log(1 === 1); //true

// 관계 연산자
console.log("관계 연산자");
console.log(2 > 1); //true
console.log(1 >= 1); //true
console.log(2 < 1); //false
console.log(2 <= 0); //false

// 산술 연산자
console.log("산술 연산자");
console.log(1 + 2); //3
console.log(1 - 2); //-1
console.log(1 * 2); //2
console.log(7 / 2); //3.5
console.log(7 % 2); //1
console.log(7 ** 2); //49

// 논리 연산자
console.log("논리 연산자");
console.log(!true); //false
console.log(!!true); //true
console.log(!!false); //false

console.log(true && true); //true
console.log(true && false); //false

// AND 연산자는 false일 확률이 높은 조건을 앞쪽에 배치
console.log(true && true && true && false); //false
console.log(false && true && true && true); //false

// OR 연산자는 true일 확률이 높은 조건을 앞쪽에 배치
console.log(true || false || false || false); //true
console.log(false || false || false || true); //true

console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false

console.log(!(2 > 1)); //false
console.log(2 > 1 && -2 < 1); //true
console.log((2 > 1 && -2 < 1) || 2 > 5); //true

// 문자와 변수를 같이 쓰는 방법
const str1 = "allie";
const str2 = "서울";

// allie는 서울에 삽니다.
// 1. + 연산자 이용 (문자열일 때는 문자열을 이어줌)
console.log(str1 + "는 " + str2 + "에 삽니다.");
// 2. 메소드의 매개변수로 입력 ("문자", 변수, "문자")
console.log(str1, "는", str2, "에 삽니다."); //컴마 위치에 띄어쓰기 자동으로 들어감
// 3. template literal (``(backtick)문자 사이에 변수를 ${val} 형태로 적음)
console.log(`${str1}는 ${str2}에 삽니다.`);

const str3 = `${str1}는 ${str2}에 삽니다.`;
const str4 = str1 + "는" + str2 + "에 삽니다.";
// const str5 = str1, '는', str2, '에 삽니다.';    // 불가능
console.log(str3);
console.log(str4);
