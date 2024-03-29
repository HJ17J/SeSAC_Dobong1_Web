import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const state = useSelector((state) => state);

  // dispatch가 action을 담아서 reducer에 전달
  // reducer는 action의 type에 따라 state를 변경

  const dispatch = useDispatch();

  return (
    <>
      <h3>state값 가져오기</h3>
      <p>state에 저장되어 있는 number state: {state}</p>

      <h3>state값 변경하기</h3>
      <button onClick={() => dispatch({ type: '증가' })}>&nbsp;+1&nbsp;</button>
      <button onClick={() => dispatch({ type: '감소' })}>&nbsp;-1&nbsp;</button>
    </>
  );
}
