function printSome<T>(x: T, y: T): T {
  console.log(x);
  console.log(y);
  return y;
}
// printSome<number>(1, 2);
// printSome<string>('hi', 'hello');

function printSome2<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}
// printSome2<number, string>(1, '안녕하세요');

function arrLength(arr: any[]): number {
  return arr.length;
}

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}
console.log(arrLength2<string>(['안녕', '반가워', '잘있어']));

function getValue1(value: any): any {
  return value;
}

function getValue2<T>(value: T): T {
  return value;
}

console.log(getValue2<number[]>([1, 2, 3, 4, 5]));
console.log(getValue2<string>('hi'));
console.log(getValue2<object>({ name: 'hyeon', msg: '안녕!' }));

// Prctice2
function arrElement<T>(arr: T[], index: number): T | boolean {
  if (arr.length <= index) return false;
  return arr[index];
}

let strArr1: string[] = ['a', 'b', 'c', 'd', 'e'];
let numArr1: number[] = [1, 2, 3, 4, 5, 6, 7];

console.log(arrElement<string>(strArr1, 2));
console.log(arrElement<number>(numArr1, 6));

// interface & generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

// T타입에 string 적용
const iphone15: Phone<string> = {
  company: 'apple',
  createAt: new Date('2023-10-13'),
  option: 'black',
};

// T타입에 object 적용
type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2024-10-06'),
  option: { color: 'silver', storage: 256 },
};

console.log(iphone15);
console.log(iphone16);

let aa = 1;
let bb = 'string';
let cc = true;

// aa = 'string'; // 변수 선언 시 type을 지정하지 않아도 초기값을 통해 typescript에서 자동적으로 타입을 추론함
