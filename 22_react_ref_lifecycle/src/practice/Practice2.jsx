import { useRef, useState } from 'react';

export default function Practice2() {
  const divRef = useRef();
  const inputRef = useRef();
  // const [color, setColor] = useState('white');
  const divStyle = {
    width: '200px',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #bbbbbb',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  const changeColor = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
    inputRef.current.focus();
    inputRef.current.value = '';
  };
  return (
    <div ref={divRef} style={divStyle}>
      <input
        type='text'
        ref={inputRef}
        placeholder='색깔을 입력하세요'
        // onChange={(e) => setColor(e.target.value)}
        style={{ marginBottom: '5px' }}
      />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
