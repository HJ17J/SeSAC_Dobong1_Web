import { useCallback, useState } from 'react';

export default function UseCallback2() {
  const [text, setText] = useState('');
  // input 태그의 onChange 이벤트는 업데이트가 잦은 state가 있음
  // 재렌더링 될 때마다 새롭게 이벤트 핸들러 함수가 생성
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };
  // 반복되는 이벤트 핸들러 함수 >> useCallback 이용해 메모리제이션
  // change시마다 재렌더링 되나, onChangeText 한번만 선언하고 memory에서 가져다 씀
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  });
  return (
    <>
      <input type='text' onChange={onChangeText} />
      <p>작성한 값: {text}</p>
    </>
  );
}
