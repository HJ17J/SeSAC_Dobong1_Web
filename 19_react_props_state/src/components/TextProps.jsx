export function TextProps(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <button onClick={props.valid}>콘솔 메세지</button>
    </div>
  );
}

TextProps.defaultProps = {
  text: '이건 기본 text props입니다.',
};
