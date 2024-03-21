import imgSrc from '../XL.jpg';

export function Book(props) {
  const divStyle = {
    width: '600px',
    height: '600px',
    padding: '20px',
    backgroundColor: 'beige',
    textAlign: 'center',
  };

  return (
    <div style={divStyle}>
      <h1 style={{ color: 'orange' }}>이번주 베스트셀러</h1>
      <img style={{ width: '200px' }} src={imgSrc} alt='나의 하루는 4시 30분에 시작된다 표지' />
      <div style={{ width: '480px', margin: 'auto' }}>
        <h1>{props.title}</h1>
        <p style={{ margin: 'auto', fontWeight: 'bold', fontSize: '20px', textAlign: 'left' }}>
          저자: {props.author}
          <br />
          판매가: {props.price}
          <br />
          구분: {props.type}
        </p>
      </div>
    </div>
  );
}
