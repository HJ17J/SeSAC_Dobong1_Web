import { FunctionProps } from './FunctionProps';

export default function PropsMap({ arr }) {
  return (
    <div>
      {arr?.map((el, index) => {
        // undefined가 아닐 때만 map을 실행
        return (
          <ul key={index}>
            <li>이름: {el.name}</li>
            <li>개수: {el.number}</li>
            <li>가격: {el.price}</li>
          </ul>
        );
      })}
      {arr?.map((el, index) => {
        return <FunctionProps name={el.name} number={el.number} price={el.price} />;
      })}
      {!arr && <h1>배열이 전달되지 않았습니다.</h1>}
    </div>
  );
}
