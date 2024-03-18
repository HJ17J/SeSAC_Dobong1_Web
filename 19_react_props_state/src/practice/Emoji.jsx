import { useState } from 'react';

export default function Emoji() {
  let [num, setNum] = useState(0);
  // const increase = () => {
  //   setNum(num + 1);
  //   console.log(`변수(variable): ${variable}, 스테이트(number):${number}`);
  // };
  // const decrease = () => {
  //   setNum(num - 1);
  // };
  return (
    // <div>
    //   <div>{num <= 7 ? num + '😊' : num + '😈'} </div>
    //   <button onClick={increase}>1 증가</button>
    //   <button onClick={decrease}>1 감소</button>
    // </div>
    <div>
      <h2>{num < 8 ? num + '😊' : num + '😈'}</h2>
      <button
        onClick={() => {
          setNum((num += 1));
        }}
      >
        1 증가
      </button>
      <button
        onClick={() => {
          setNum((num -= 1));
        }}
      >
        1 감소
      </button>
    </div>
  );
}
