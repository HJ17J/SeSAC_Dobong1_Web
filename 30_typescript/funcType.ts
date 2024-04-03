// 함수의 반환값 타입은 명시하지 않아도 괜찮음 (파라미터는 필수)
// function jsPrint(a: number, b: number, c: number):void {
function print(a: number, b: number, c: number) {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(1, 2, 3);

function print2(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2); // 1, 2, undefined

function sayHello(): void {
  console.log('hello');
}
sayHello();

function concatStr(a: string, b: number): string {
  return a + b;
}
console.log(concatStr('안녕', 2));

// 원의 넓이를 구하는 함수
function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));

// 함수 표현식
const triangleArea = (w: number, h: number): number => {
  return (w * h) / 2;
};
console.log('삼각형의 넓이', triangleArea(3, 5));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const jh: Greet = {
  name: 'allie',
  hi() {
    return '안녕 내 이름은 ' + this.name + '이야';
  },
  bye(a: number) {
    return `작별 인사를 ${a}번 했습니다.`;
  },
};

console.log(jh.name);
console.log(jh.hi());
console.log(jh.bye(5));

// never
function goingOn(): never {
  while (true) {
    console.log('끝나지 않는 함수입니다.');
    // if(a>10) break;
    // 특정 조건에 빠져나올 수 있으면 never 타입에 해당 안 됨(절대함수의 끝에 도달할 수 없는 경우에만 할당 가능)
  }
}

// 인자가 숫자면 더하기, 문자면 문자 이어주기
// function addSomething(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// 오버로딩, 오버라이딩
// 오버라이딩: 클래스에서 상속을 했을 때 메서드 재정의
// 오버로딩: 함수에서 매개변수의 개수나 타입, 리턴 타입 등이 다를 때 같은 함수명으로 매개변수의 종류와 개수를 다르게 선언
// 타입스크립트에서는 오버로딩보다 제네릭 사용을 권장

// overloading
function addSomething(x: string, y: string): string;
function addSomething(x: number, y: number): number;
function addSomething(x: any, y: any) {
  return x + y;
}
console.log(addSomething(1, 2));
console.log(addSomething('안녕', '하세요'));

// Practice1
function sum1(x: number, y: number): void {
  console.log(x + y);
}
sum1(1, 2);

function sum2(...nums: number[]): number {
  let result: number = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}
sum2(1, 2, 3, 4, 5, 6);
console.log(sum2(1, 2, 3, 4, 5, 6));
