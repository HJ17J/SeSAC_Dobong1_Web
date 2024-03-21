// import './App.css';
import PropsMap from './PropsMap';
import Alphabet from './Alphabet';
import Practice1 from './practice/Practice1';
import Practice2 from './practice/Practice2';

function App() {
  const dataArr = [
    { name: 'apple', number: 5, price: 5000 },
    { name: 'banana', number: 1, price: 3000 },
    { name: 'grape', number: 2, price: 8000 },
    { name: 'peach', number: 3, price: 5000 },
  ];
  return (
    <div className='App'>
      <h1>map과 filter 사용</h1>
      {/* <PropsMap arr={dataArr} /> */}
      {/* <Alphabet /> */}
      {/* <Practice1 /> */}
      <Practice2 />
    </div>
  );
}

export default App;
