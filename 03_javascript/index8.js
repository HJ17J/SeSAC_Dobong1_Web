/* 
    Date 객체
    - 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
    - 원하는 값으로 초기화 가능
*/
let now = new Date();
console.log(now);

console.log(new Date("September 30, 2010 13:00:00")); // 날짜, 시간 설정 가능
console.log(new Date(2023, 1, 1)); // 날짜 지정 가능

console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 0 (getMonth()의 반환값은 0~11)
console.log(now.getDate()); // 10
console.log(now.getHours()); // 시 (0~23)
console.log(now.getMinutes()); // 분 (0~59)
console.log(now.getSeconds()); // 초 (0~59)
console.log(now.getMilliseconds()); // 밀리초 (0~999)
console.log(now.getDay()); // 요일 (0~6; 0:일요일)

/* 
    Math 객체
    - 
*/
console.log(Math.PI); // 파이
console.log(Math.E); // 자연로그 e
console.log(Math.SQRT2); // 루트 2

// 메소드
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, -5, -7.5)); // -7.5
console.log(Math.max(2, 5, 4, 6, 10, 11, 5)); // 11
console.log(Math.ceil(5.1555)); // 6; 올림
console.log(Math.floor(-5.1555)); // -6; 내림
console.log(Math.round(5.1555)); // 5; 반올림
console.log(Math.random()); // 난수 생성 (range x: 0 <= x < 1)
console.log(Math.floor(Math.random() * 3));

// 1 ~ 45
console.log(Math.floor(Math.random() * 45) + 1);

// object 관련 객체
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Busan: "051",
  Ulsan: "052",
  Gwangju: "062",
  Jeju: "064",
};

const obj = new Object({
  a: "10",
  b: "55",
});

// 각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);
console.log(area);
console.log(number);
