export default function PracticeJSX() {
  const name = '두부';
  const animal = '강아지';
  const a = 7;
  const b = 1;
  const title = 'HELLO WORLD';
  return (
    <div>
      <h2>
        제 반려동물의 이름은 {name}입니다.
        <br />
        {name}는 {animal}입니다.
      </h2>
      <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</div>
      <div>{a > b && 'a가 b보다 큽니다.'}</div>
      <div>
        <h1>{title}</h1>
        아이디: <input />
        <br />
        비밀번호: <input />
      </div>
    </div>
  );
}
