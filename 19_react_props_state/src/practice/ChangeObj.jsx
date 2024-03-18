import { useState } from 'react';

export default function ChangeObj(props) {
  const { objArr } = props;
  const [index, setIndex] = useState(0);

  function changeMember() {
    if (index === objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div>
      <p>이름: {objArr[index].name}</p>
      <p>나이: {objArr[index].age}</p>
      <p>별명: {objArr[index].nickName}</p>
      <button onClick={changeMember}>멤버 바꾸기</button>
    </div>
  );
}
