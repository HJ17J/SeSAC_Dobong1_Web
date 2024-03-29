import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './account-reducer';

export default function Bank() {
  const balance = useSelector((state) => state.bank);
  const money = useRef();
  const dispatch = useDispatch();
  return (
    <div>
      <h2>코딩온 은행</h2>
      <h3>잔액: {balance}</h3>
      <input type='number' placeholder='금액' ref={money} step={5000} min={0} />
      <button
        onClick={() => {
          dispatch(deposit(money.current.value));
          money.current.value = '';
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(money.current.value));
          money.current.value = '';
        }}
      >
        출금
      </button>
    </div>
  );
}
