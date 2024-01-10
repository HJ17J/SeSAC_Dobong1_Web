/* 
    문자열에서 사용 가능한 속성/메소드
    - length (속성)
    - toUpperCase, trim indexOf, slice, replace, replaceAll, repeat, split
*/

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon    ";

/* 문자열 인덱싱 */
console.log(str1[5]);
console.log(str1[5] + str1[9] + str1[6]);

console.log("str1 문자열 길이", str1.length); //공백 포함 15
console.log("str2 문자열 길이", str2.length); //공백 포함 23

let msg = "Happy Birthday~";
let userId = "    user123    ";

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(str2.trim());
console.log(userId.trim().length); //7

let mango = "applemango";

console.log(mango.indexOf("apple")); //해당 문자의 시작점을 출력
console.log(mango.indexOf("mango"));
console.log(mango.indexOf("p"));
console.log(mango.indexOf("x")); //문자열에 포함되지 않은 값을 매개변수로 입력하면 -1 반환됨

console.log(mango.slice(0, 5)); //apple. 0부터 시작, 5부터 잘라냄(0부터 4까지 추출)
console.log(mango.slice(4)); //emango. 4부터 끝까지 추출
console.log(mango.slice(-1)); //o. 뒤에서부터 추출
console.log(mango.slice(-4)); //ango
console.log(mango.slice(-5, -1)); //mang

let msg2 = "Wow~ It is so amazing!!!";
console.log(msg2.replace("Wow", "Hey"));
console.log(msg2.replaceAll("o", "O")); //WOw~ It is sO amazing!!!
console.log(msg2.replace("o", "O")); //WOw~ It is so amazing!!!

let date = "2024.01.10";
date = date.replaceAll(".", "-");
console.log(date);

console.log("abc".repeat(10));

console.log(date.split("-")); //2024, 01, 10
console.log(date.split("")); //2,0,2,4,-,0,1,-,1,0

console.log("=============================");

/* 
    배열 관련 메소드
    - length (속성)
    - push, pop, unshift, shift, indexOf, join, reverse
    - includes, map, forEach, find, filter
    - for ~ of (함수 X)
*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

arr1[5] = 6;
arr1[7] = 7; // 건너뛴 6번 요소가 empty가 됨

arr1 = [1, 2, 3, 4, 5];
arr1.push(6); //[1, 2, 3, 4, 5, 6]
arr1.push(7); //[1, 2, 3, 4, 5, 6, 7]
arr1.pop(); //[1, 2, 3, 4, 5, 6]
arr1.pop(); //[1, 2, 3, 4, 5]
console.log(arr1);

arr2.unshift("cat"); //['cat', 'quakka', 'puppy', 'rabbit', 'hamster']
console.log(arr2);
arr2.shift(); //['quakka', 'puppy', 'rabbit', 'hamster']
console.log(arr2);

/*
    includes(배열의 요소)
    - 매개변수가 배열에 있으면 true, 없으면 false
*/
console.log(arr2.includes(1));
console.log(arr2.includes("quakka"));

/*
    indexOf - 문자열의 indexOf와 동일
    - 몇 번 인덱스인지 확인 후 해당 인덱스 반환
*/
console.log(arr2.indexOf("quakka"));

/* 
    reverse - 배열의 순서를 뒤집어줌
    실제로 배열 변경됨
*/
arr1.reverse(); //[5, 4, 3, 2, 1]
console.log(arr1);

/* 
    join - 문자열의 split 메소드와 반대
    배열을 문자열로 변경
*/
str1 = str1.split(""); //['S', 't', 'r', 'a', 'w', 'b', 'e', 'r', 'r', 'y', ' ', 'M', 'o', 'o', 'n']
console.log(str1);
// str1 = str1.join("");   //Strawberry Moon
str1 = str1.join("_"); //S_t_r_a_w_b_e_r_r_y_ _M_o_o_n
console.log(str1);

/* 
    반복문 - for of & forEach
*/
let arr3 = [5, 6, 7, 8, 9];
let alphabets = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
for (let num of arr3) {
  console.log(num);
}
for (let alphabet of alphabets) {
  console.log(alphabet);
}
/* 
    forEach
    Array.forEach(function(element[, index, array]){})
*/
arr3.forEach(function (element) {
  console.log(element);
});
arr3.forEach(function (element, index) {
  console.log(element, index);
});
arr3.forEach(function (element, index, arr) {
  console.log(element, index, arr);
});

/*
    filter
    - return 이후 조건을 만족하는 요소들을 모아서 배열로 반환
*/
// 1. 함수  표현식
let six = arr2.filter(function (word) {
  return word.length === 6;
});
// 2. 화살표 함수 (return 표기 있음)
let six2 = arr2.filter((word) => {
  return word.length === 6;
});
// 3. 화살표 함수 (return 표기 없음)
let six3 = arr2.filter((word) => word.length === 6);

console.log(arr2);
console.log(six); //'quakka', 'rabbit']
console.log(six2);
console.log(six3);

/* 
    map
    - 배열 내의 모든 요소에 대해 함수 호출한 결과를 모아서 배열로 반환
*/
let arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function (element) {
  return element * 3;
});
console.log(multiArr);

/* 
    find
    - 배열에서 특정 조건을 만족하는 '첫번째 요소' 반환
*/
let findResult = multiArr.find((element) => {
  return element > 10;
});
console.log(findResult);
