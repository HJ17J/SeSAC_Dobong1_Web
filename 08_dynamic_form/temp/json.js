const obj = `{
  "model": "아이오닉",
  "price": 50000000,
  "isElectric": true,
  "option": ["사이드미러","스마트스크린"]
}`;

console.log(obj);
console.log(typeof obj);
console.log(obj.model);

// JSON.parse() : json을 object로 변경
console.log('********** OBJECT *********');

const carInfo = JSON.parse(obj);
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);

// JSON.stringify() : object를 json으로 벼경
console.log('********** JSON *********');
const carJson1 = JSON.stringify(carInfo);
console.log('json1: ', carJson1);
const carJson2 = JSON.stringify(carInfo, null, 5);
console.log(carJson2);
