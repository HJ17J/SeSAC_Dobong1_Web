import { useDispatch, useSelector } from 'react-redux';
import { countMinus, countPlus } from '../store/module/counter-reducer';
import { changeData } from '../store/module/isDataReducer';

export function Box1() {
  return (
    <div style={{ border: '2px dashed pink', padding: '10px' }}>
      <h3>Box1</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  // 전체 state를 가지고 오기
  // const state = useSelector((state) => state);
  const { isData, counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '2px dashed skyblue', padding: '10px' }}>
      <h3>Box2</h3>
      <p>count: {counter} </p>
      <p>isData: {isData.toString()} </p>
      <button onClick={() => dispatch({ type: 'count/INCREMENT' })}>count +1</button>
      <button onClick={() => dispatch({ type: 'count/DECREMENT' })}>count -1</button>
      <button onClick={() => dispatch({ type: 'isData/CHANGE' })}>to {(!isData).toString()}</button>
      <br />
      <button onClick={() => dispatch(countPlus())}>count +1</button>
      <button onClick={() => dispatch(countMinus())}>count -1</button>
      <button onClick={() => dispatch(changeData())}>to {(!isData).toString()}</button>
    </div>
  );
}
