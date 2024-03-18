import { useState } from 'react';
import { Practice } from './Practice';

function Select() {
  const [fruit, setFruit] = useState('apple');
  const [bgColor, setBgColor] = useState('black');
  const [color, setColor] = useState('white');
  return (
    <div>
      과일 :
      <select
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      >
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='grape'>포도</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setBgColor(e.target.value);
        }}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>
      <Practice fruit={fruit} bgColor={bgColor} color={color} />
    </div>
  );
}

export default Select;
