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
  // let [textColor, changeColor] = useState({color:'black', text:'검정색'});
  // const setColor = (color, obj) => {
  //   changeColor({ color: color, text: obj.innerText });
  // };

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
  const [display, setDisplay] = useState('block');
  function toggleTxt(e) {
    if (e.target.innerText === '보여라') {
      e.target.innerText = '사라져라';
      setDisplay('block');
    } else {
      e.target.innerText = '보여라';
      setDisplay('none');
    }
  }
  return (
    <div>
      <button onClick={(e) => toggleTxt(e)}>사라져라</button>
      <h1 style={{ display: display }}>안녕하세요</h1>
    </div>
  );
}
