function Select(props) {
  const { setData } = props;
  return (
    <div>
      과일:&nbsp;
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, fruit: e.target.value };
          });
        }}
      >
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='grape'>포도</option>
      </select>
      &nbsp; 배경색:&nbsp;
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
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
      &nbsp; 글자색:&nbsp;
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, color: e.target.value };
          });
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
    </div>
  );
}

export default Select;
