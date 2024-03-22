import { useRef, useState } from 'react';
import './Practice3.css';

export default function Practice3() {
  const operator = ['+', '-', 'x'];

  let ranNum1 = Math.floor(Math.random() * 10 + 1);
  let ranNum2 = Math.floor(Math.random() * 10 + 1);
  let ranOp = operator[Math.floor(Math.random() * operator.length)];

  const [op, setOp] = useState(ranOp);
  const [num1, setNum1] = useState(ranNum1);
  const [num2, setNum2] = useState(ranNum2);
  const [answer, setAnswer] = useState();

  const inputRef = useRef();

  const answerQuestion = () => {
    let rightAnswer;
    switch (op) {
      case '+':
        rightAnswer = num1 + num2;
        break;
      case '-':
        rightAnswer = num1 - num2;
        break;
      case 'x':
        rightAnswer = num1 * num2;
        break;
    }
    inputRef.current.value = '';
    inputRef.current.focus();

    if (answer == rightAnswer) {
      alert('정답입니다!😄');
      setNum1(ranNum1);
      setNum2(ranNum2);
      setOp(ranOp);
      return;
    } else {
      alert(`틀렸습니다😔\n정답은 ${rightAnswer}입니다!`);
    }
  };

  return (
    <div className='questionDiv'>
      <h2>
        {num1} {op} {num2}
      </h2>
      <input
        type='text'
        placeholder='답을 입력하세요'
        onChange={(e) => setAnswer(e.target.value)}
        ref={inputRef}
      />
      <br />
      <button onClick={answerQuestion}>정답 제출</button>
    </div>
  );
}
