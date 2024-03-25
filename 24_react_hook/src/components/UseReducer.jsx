import { useState, useReducer } from 'react';
const reducer = (prevState, action) => {
  // action: state를 어떻게 바꿀지에 대한 '요구'
  // dispatch: action을 담아서 reducer로 전달함

  // reducer 내부의 로직엔 switch, if 등 조건문을 많이 사용
  switch (action.type) {
    case 'deposit':
      return prevState + action.payload;
    case 'withdraw':
      return prevState - action.payload;
    default:
      break;
  }
  console.log('dispatch가 호출되면 reducer 동작');
  console.log(action);
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  // reducer: 실제로 state를 바꿔주는 함수
  // const [state, dispatch] = useReducer(reducer, state의 초기값);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h3>useReducer 사용</h3>
      <p>잔고: {money}원</p>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
        step={1000}
      />
      <button
        onClick={() => {
          dispatch({ type: 'deposit', payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'withdraw', payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}
