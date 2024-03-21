import { SyntheticEvent } from './SyntheticEvent';
import Counter from './Counter';
import { HandlerEx, HandlerEx2, HandlerEx3 } from './ex/HandlerEx';
import Select from './ex/Select';
import EntirePractice from './practice/EntirePractice';

function App() {
  return (
    <div className='App'>
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <hr />
      <HandlerEx />
      <HandlerEx2 />
      <HandlerEx3 />
      <hr />
      <Select />
      <hr />
      <EntirePractice />
    </div>
  );
}

export default App;
