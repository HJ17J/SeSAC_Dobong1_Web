import { RefClass1, RefClass2 } from './components/RefClass';
import { RefFunc1, RefFunc2 } from './components/RefFunction';
import Practice1 from './practice/Practice1';
import Practice2 from './practice/Practice2';
import Practice3 from './practice/Practice3';

function App() {
  return (
    <div className='App'>
      <h1>ref</h1>
      {/* <RefClass1></RefClass1> */}
      {/* <RefClass2></RefClass2> */}
      {/* <RefFunc1></RefFunc1> */}
      {/* <RefFunc2></RefFunc2> */}
      <Practice1 />
      <Practice2 />
      <Practice3 />
    </div>
  );
}

export default App;
