import { Route, Routes, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Student from './pages/Student';
import NotFound from './pages/NotFound';

function App() {
  const [name, setName] = useSearchParams('name');

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/student/:studentName' element={<Student />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
