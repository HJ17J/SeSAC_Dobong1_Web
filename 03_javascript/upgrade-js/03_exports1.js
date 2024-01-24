/* 모듈 만들기 (commonJS 방식)
    exports라는 키워드 사용해서 내보내기
    한번에 내보내기
 */

const colors = ['#fff', '#000', '#0d0d0d', 'orange'];

const sayHi = () => {
  console.log('hi🖐');
};

function sayName(name) {
  console.log('my name is ', name);
  sayHi();
}

sayName('현정');

// 객체로 내보내짐
module.exports = {
  colors,
  sayName,
};
