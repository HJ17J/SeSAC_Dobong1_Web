export default function Input(props) {
  const { setData } = props;
  return (
    <div>
      <input
        type='text'
        placeholder='내용을 입력하세요'
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, content: e.target.value };
          });
        }}
      />
    </div>
  );
}
