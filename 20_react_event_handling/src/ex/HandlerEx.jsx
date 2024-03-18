import { useState } from 'react';

export function HandlerEx() {
  const [txt, setTxt] = useState('Hello World!');
  function changeTxt() {
    setTxt('Goodbye World!');
  }
  return (
    <div>
      <h1>{txt}</h1>
      <button onClick={changeTxt}>클릭</button>
    </div>
  );
}

export function HandlerEx2() {
  const [color, setColor] = useState('black');
  const [colorName, setColorName] = useState('검정색');
  function changeColor(color, colorName) {
    setColor(color);
    setColorName(colorName);
  }
  return (
    <div>
      <h1 style={{ color: color }}>{colorName} 글씨</h1>
      <button onClick={() => changeColor('red', '빨간색')}>빨간색</button>
      <button onClick={() => changeColor('blue', '파란색')}>파란색</button>
    </div>
  );
}

export function HandlerEx3() {
  // const [btnName, setBtnName] = useState('사라져라');
  const [display, setDisplay] = useState('block');
  function toggleTxt(e) {
    if (e.target.innerText === '보여라') {
      e.target.innerText = '사라져라';
      setDisplay('block');
      console.log(display);
      // setBtnName('사라져라');
    } else {
      e.target.innerText = '보여라';
      setDisplay('none');
      // setBtnName('보여라');
    }
  }
  return (
    <div>
      <button onClick={(e) => toggleTxt(e)}>사라져라</button>
      <h1 style={{ display: display }}>안녕하세요</h1>
    </div>
  );
}
