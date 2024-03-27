import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();
  // console.log(modeParams.get('mode'));

  return (
    /* 
      - mode가 dark면 className dark 추가
      - scss에서 dark 클래스에 대한 스타일 추가
     */
    <main className={`mainPage ${modeParams.get('mode') === 'dark' && 'dark'}`}>
      <h2>여기는 Home입니다.</h2>
      <button onClick={() => setModeParams({ mode: 'dark' })}>🌜 Dark</button>
    </main>
  );
}
