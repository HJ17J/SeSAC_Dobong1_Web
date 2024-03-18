import { useState } from 'react';

// export default function FunctionState() {
//   let apple = '사과';
//   function inEnglish() {
//     apple = 'apple';
//     console.log('변수값', apple);
//   }
//   return (
//     <div>
//       <div style={{ background: 'red', color: '#fff' }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// export default function FunctionState() {
//   const [apple, setApple] = useState();
//   function inEnglish() {
//     setApple('apple');
//     console.log('state', apple);
//   }
//   return (
//     <div>
//       <div style={{ background: 'red', color: '#fff' }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// 3. 바닐라 JS로 사과 > apple > 사과 변경해보기
// export function FunctionState() {
//   let apple = '사과';
//   function changeLanguage() {
//     const apple = document.querySelector('.state div');
//     apple.innerText === '사과' ? (apple.innerText = 'apple') : (apple.innerText = '사과');
//   }
//   return (
//     <div className='state'>
//       <div style={{ background: 'red', color: '#fff' }}>{apple}</div>
//       <button onClick={changeLanguage}>한영전환</button>
//     </div>
//   );
// }

// 3. useState 사용해서 사과 > apple > 사과 변경해보기
export function FunctionState() {
  //   const [apple, setApple] = useState();
  //   function changeLanguage() {
  //     setApple('사과');
  //     if (apple === '사과') {
  //       setApple('apple');
  //     } else {
  //       setApple('사과');
  //     }
  //   }
  const [isEnglish, setIsEnglish] = useState(true);
  function changeLanguage() {
    setIsEnglish(!isEnglish);
  }
  return (
    <div className='state'>
      {/* <div style={{ background: 'red', color: '#fff' }}>{apple}</div> */}
      <div style={{ background: 'red', color: '#fff' }}>{isEnglish ? 'apple' : '사과'}</div>
      <button onClick={changeLanguage}>{isEnglish ? '한글' : '영어'}로 변경</button>
    </div>
  );
}
