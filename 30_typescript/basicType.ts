// 기본 타입 (primitive types)
let number: number = 1;
let str: string = 'str'; // number = "string"; // string 타입은 number 타입으로 할당될 수 없음
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// object
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<String> = ['a', 'b', 'c', 'd', 'e'];
const arr1: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']; // 배열의 요소에 number, string 가능
const arr2: (boolean | null | number[])[] = [[1, 2, 3], false, null]; // boolean, null, number[]가 올 수 있는 배열 arr2
// 어떤 자료형이든 상관 없는 배열
const arr3: any = [1, 2, 3, 4, true, null, 'anything'];
console.log(arr2);
console.log(arr3);

let obj1: object = { name: 'allie', age: 11 };
console.log(obj1);
