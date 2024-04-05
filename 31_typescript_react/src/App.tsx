import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lecture from './pages/Lecture';
import Practice from './pages/Practice';
import Matzip from './pages/Matzip';
import Detail from './pages/Detail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lecture' element={<Lecture />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/practice/matzip' element={<Matzip />} />
        <Route path='/practice/matzip/:title' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
