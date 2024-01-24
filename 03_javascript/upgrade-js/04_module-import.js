// 모듈 사용 - import 키워드를 이용
// 따로 따로 가져옴
import { flr, getFlr } from './04_export1.js';

// 한번에 객체로 가져옴
import * as flowers from './04_export1.js';

console.log(flr);
console.log(flr[1]);
console.log(getFlr(2));

console.log(flowers);
console.log(flowers.flr);
console.log(flowers.getFlr(1));

import { showAnimals, animals } from './04_export2.js';
console.log(animals);
showAnimals();

import sayHi from './05_export-default.js';
sayHi();
