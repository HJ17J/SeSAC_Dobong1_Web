export default function UseJSX() {
  // 1. inline style 적용
  //   const divStyle = {
  //     width: '100px',
  //     height: '100px',
  //     backgroundColor: 'gray',
  //     textAlign: 'center',
  //     color: 'white',
  //     marginTop: '0.5rem',
  //     display: 'inline-block',
  //     border: '1px solid red',
  //   };

  //   return (
  //     <div>
  //       <div style={{ color: '#fff', width: '100px', backgroundColor: 'tomato' }}>1</div>
  //       <div style={divStyle}>2</div>
  //       <div style={divStyle}>3</div>
  //       <div style={divStyle}>4</div>
  //     </div>
  //   );
  // 2. js 문법 사용해보기
  let isShow = false;
  function myFunc() {
    alert('안녕, 내 이름은 현정이야');
  }

  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* <span>{myFunc()}</span> */}
      onclick ={' '}
      {() => {
        alert('눌렀습니다.');
      }}
      ;<div style={{ backgroundColor: 'orange' }}>{isShow ? 'true일 때 보임' : '!!!'}</div>
      <div style={{ backgroundColor: 'red' }}>{isShow && 'true일 때 보임'}</div>
      <div style={{ backgroundColor: 'skyblue' }} onclick={myFunc}>
        {isShow === false ? 'isShow가 false이군요!' : 'isShow가 true이군요!'}
      </div>
      <div style={{ backgroundColor: 'purple' }}>{!isShow && 'false일 때 보임'}</div>
      <div onClick={() => addNum(8, 5)}> 8 더하기 5의 값을 해주세요</div>
      <div onClick={() => myFunc()}>myFunc()</div>
    </div>
  );
}
