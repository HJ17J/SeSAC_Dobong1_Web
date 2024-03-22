import { useEffect, useState } from 'react';

function MyComponent({ number }) {
  const [text, setText] = useState('');
  /* 
    useEffect(effect, [deps]);
        - effect: callback function
            특정 시점에서 실행하고 싶은 함수 작성
        - deps
            생략할 경우 mount, update시 항상 동작
            []: mount 되었을 경우에만 실행
            [deps]: mount, deps가 바뀌었을 때 실행(update, mount)
  */

  //   mount 되었을 때
  useEffect(() => {
    console.log('함수형 컴포넌트 | 마운트');
  }, []);

  //   unmount 되었을 때
  useEffect(() => {
    return () => {
      console.log('함수형 컴포넌트 | 언마운트');
    };
  });

  // update 되었을 때
  useEffect(() => {
    console.log('함수형 컴포넌트 | 업데이트');
  });
  useEffect(() => {
    console.log('함수형 컴포넌트 | number 변경');
  }, [number]);

  return (
    <>
      <p>MyComponent {number}</p>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);
  const changeNumberState = () => setNumber(number + 1);
  const changevisibleState = () => setVisible(!visible);
  return (
    <>
      <button onClick={changeNumberState}>number +1</button>&nbsp;
      <button onClick={changevisibleState}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
