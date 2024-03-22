import { RefClass1, RefClass2 } from './components/RefClass';
import { RefFunc1, RefFunc2 } from './components/RefFunction';
import Practice1 from './practice/Practice1';
import Practice2 from './practice/Practice2';
import Practice3 from './practice/Practice3';
import LifeCycleClass from './components/LifeCycleClass';
import LifeCycleFunc from './components/LifeCycleFunc';
import Practice4 from './practice/Practice4';
import Practice5 from './practice/Practice5';
import Container from './practice/Container';
import PostList from './practice/PostList';

function App() {
  return (
    <div className='App'>
      {/* <h1>ref</h1> */}
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 /> */}
      {/* <Practice1 />
      <Practice2 />
      <Practice3 /> */}

      {/* <h1>LifeCycle</h1> */}
      {/* <LifeCycleClass />
      <LifeCycleFunc /> */}
      {/* <Practice4 /> */}
      {/* <Practice5 /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
