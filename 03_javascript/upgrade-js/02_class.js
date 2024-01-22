// class: 오브젝트를 만들 수 있는 틀

/* 
    속성
     - 만들어진 연도 year
     - 집의 이름 name
     - 창문의 개수 window
    메서드
    - 건물의 나이 메서드 getAge()
    - 창문의 개수 출력 getWindow()
 */

class House {
  //생성자
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메서드
  getAge() {
    console.log(`${this.name}은(는) 건축한지 ${2024 - this.year}년 됐어요`);
  }
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개입니다.`);
  }
}

const h1 = {
  name: 'old',
  year: 1789,
  window: 1,
};

const house1 = new House(1789, 'old', 1);
house1.getAge();
house1.getWindow();
console.log(house1);

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.getWindow();

console.log('======= 상속 =======');
// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment

class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name}.
총 층수는 ${this.floor}층, 창문의 개수는 ${this.window}개.`;
  }

  // overriding
  // 부모 클래스와 동일한 이름의 메서드를 다른 내용으로 사용하고 싶을 때 (메서드 재정의)
  getWindow() {
    return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개입니다.`;
  }

  //getAge() << 상속받아서 사용 가능
}

const apt1 = new Apartment(2022, '래미안', 19, 50, 'KCC');
console.log(apt1.getWindow()); // overriding 함수
console.log(apt1.getAptInfo()); // 새로운 메서드 정의
apt1.getAge(); // 부모메서드 그대로 상속
console.log(apt1);

/* 실습. Shape 클래스 만들기 */
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (width * height) / 2;
  }
}
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
