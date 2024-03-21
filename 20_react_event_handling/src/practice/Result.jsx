export default function Result(props) {
  const { fruit, background, content, color } = props.data;
  return (
    <div>
      <img src={`/img/${fruit}.jpg`} alt='과일 사진' width={300} height={300} />
      <div style={{ backgroundColor: background, color: color, padding: '10px', margin: '10px' }}>
        {content}
      </div>
    </div>
  );
}
