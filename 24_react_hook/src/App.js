import CustomHook from './components/CustomHook';
import UseCallback from './components/UseCallback';
import UseCallback2 from './components/UseCallback2';
import UseMemo from './components/UseMemo';
import UseMemoObj from './components/UseMemoObj';
import UseReducer from './components/UseReducer';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('react hook!');
  return (
    <>
      <h1>React Hook</h1>
      <UseMemo />
      <UseMemoObj />
      <UseCallback />
      <UseCallback2 />
      <UseReducer />
      <CustomHook />
    </>
  );
}

export default App;
