import { useRef, useState } from 'react';

export default function Text() {
  const [text, setText] = useState<string>(''); // 제네릭 타입 전달 안 해도 됨

  // 돔 요소에 접근하는 ref
  const ref = useRef<HTMLInputElement>(null); // 제네릭 타입 명시해야 함 (초기화 불가능(값 null))
  // 변수로 사용하는  ref
  const refVal = useRef<number>(0); // 제네릭 타입 전달 안 해도 됨

  // state 변경 함수
  const changeState = () => {
    if (typeof ref.current?.value === 'string') setText(ref.current.value);
  };

  // ref 변경 함수
  const changeRef = (): void => {
    refVal.current += 1;
    console.log(refVal.current + 1);
  };
  return (
    <div>
      <h4>useRef와 useState</h4>
      <input type='text' ref={ref} />
      <button onClick={changeState}>state 변경</button>
      <p>state: {text}</p>
      <p>ref: {ref.current?.value}</p>
      <br />
      <button onClick={changeRef}>ref +1</button>
      <p>ref value: {refVal.current}</p>
    </div>
  );
}
