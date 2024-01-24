/* 모듈 만들기 (commonJS 방식)
    exports라는 키워드 사용해서 내보내기
    따로 따로 내보내기
 */

// 함수 선언문 같은 경우엔 따로 exports 할 수 없어서 표현식 or 함수
exports.sayHi2 = () => {
  console.log('hi2');
};

exports.sayHi3 = function (name) {
  console.log(name);
};
