// Tuple
// :자료형의 순서와 개수가 정해져 있는 배열
let drink: [string, string] = ['a', 'b'];
let drink2: [string, string, number];
drink2 = ['cola', '콜라', 1];
console.log(drink2);
console.log(drink2[0]);
console.log(...drink2);

// typescript의 type 추론
/* 
    네번째 데이터 타입은 미리 선언되어 있지 않지만
    strijng, number로만 이루어진 튜플을 선언했기 때문에
    타입스크립트가 자동으로 타입을 추론하여 결정함 (string | number)[]
 */
drink2.push('push되나요?'); // 가능
console.log(drink2);
// drink2.push(null); // 불가능

let drink3: readonly [string, number] = ['cola', 2000];
// drink3[0] = 'cider'; // 불가능
// drink3.push('push되나요?'); // 불가능

// Enum
// 선언 후 변경 불가
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
console.log(Auth);
/* {
        '0': 'admin',
        '1': 'user',
        '2': 'guest',
        admin: 0,
        user: 1,
        guest: 2
    } */

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}
console.log(Cafe);
// { americano: '아메리카노', latte: '카페라떼' }

enum Cake {
  choco,
  vanilla,
  strawberry,
  kiwi = 'kiwi',
}
console.log(Cake[0]); // choco
console.log(Cake.choco); // 0
console.log(Cake.kiwi); // kiwi

// Practice
// object, boolean 타입 순으로 설정하는 튜플 만들어보기
let olimpic_newgame: readonly [object, boolean] = [{ name: '쇼트트랙', type: '혼성 계주' }, true];
// olimpic_newgame[1] = false;

// Interface
// 사용자 정의 타입
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'allie',
  isPassed: true,
};

type Score = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | 'F';

interface 야구부 extends Student {
  position: string;
  height: number;
  weight: number;
  readonly backNumber?: number; // ?: 필수값 아닐 경우
  [grade: number]: Score; // key를 숫자로 가지는 데이터가 여러 개 올 수 있음
}

const otani: 야구부 = {
  name: '오타니',
  isPassed: true,
  position: 'pitcher',
  weight: 95.3,
  height: 193,
  backNumber: 17,
  1: 'A+',
};
otani['2'] = 'B+';
console.log(otani);

const junghoo: 야구부 = {
  name: '이정후',
  isPassed: true,
  position: 'hitter',
  weight: 88,
  height: 185,
};
console.log(junghoo);

interface Calc {
  (a: number, b: number): number; // (인자1:type, 인자2:type): 반환값 type
}

const sum: Calc = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(1, 2));

// 교차 타입
interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}
const toyCar: Toy & Car = {
  name: '타요',
  color: 'blue',
  price: 50000,
  start() {
    console.log(`${this.name}의 가격은 ${this.price}입니다!`);
  },
};
toyCar.start();

// type
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

type Gender = 'Female' | 'Male';

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person2 = {
  name: 'daniel',
  gender: 'Female',
  age: 20,
};

let c: Person2 = {
  name: 'c',
  age: 21,
  gender: 'Male',
};
console.log(daniel);
// daniel.gender = '여성';
