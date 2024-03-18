import { useState } from 'react';

export function Practice(props) {
  const { fruit, bgColor, color } = props;
  let txtStyle = { color: color, backgroundColor: bgColor };

  const [text, setText] = useState('안녕');
  const changeTxt = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <br />
      <input type='text' placeholder='내용을 작성해주세요' onChange={(e) => changeTxt(e)} />
      <br />
      <br />
      <img src={`./img/${fruit}.jpg`} alt={fruit} style={{ width: '300px' }} />
      <p style={txtStyle}>{text}</p>
    </div>
  );
}
