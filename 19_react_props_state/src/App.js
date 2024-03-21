import { ClassProps, ClassProps2 } from './components/ClassProps';
import { FunctionProps, FunctionProps2 } from './components/FunctionProps';
import { Food } from './components/Food';
import { Book } from './components/Book';
import { TextProps } from './components/TextProps';
import { ClassState } from './components/ClassState';
import { FunctionState } from './components/FunctionState';

function App() {
  return (
    <div className='App'>
      {/* <h1>hello, props</h1>
      <ClassProps name='루피' color='pink' nickname='공주'></ClassProps>
      <ClassProps name='뽀로로' color='blue' nickname='사고뭉치'></ClassProps>
      <ClassProps2 name='포비' color='beige' nickname='곰' bgColor='black'></ClassProps2>
      <ClassProps2 name='포비' color='beige' nickname='곰'></ClassProps2>
      <FunctionProps name='사과' number={5} price={1000}></FunctionProps>
      <FunctionProps2 price={50000}></FunctionProps2>
      <FunctionProps2 price={10000} name='딸기'>
        <section style={{ backgroundColor: 'yellow' }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2> */}

      {/* <Food name='피자' reason='그냥 맛있으니까...'></Food>
      <Book
        title='나의 하루는 4시 30분에 시작된다'
        author='김유진'
        price='13500'
        type='자기계발서'
      ></Book>
      <TextProps text='App 컴포넌트에서 넘겨준 text props입니다' valid={func}></TextProps> */}

      <h1>hello, state</h1>
      <ClassState></ClassState>
      <FunctionState></FunctionState>
    </div>
  );
}

export default App;
