import { useEffect } from 'react';
import './App.css';
import { getCharacters } from './feature/characters/charactersSlice';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import Staff from './pages/Staff';
import SharedLayout from './pages/SharedLayout';
import Characters from './pages/Characters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='characters' element={<SharedLayout />}>
          <Route index element={<Characters />} />
          <Route path='staffs' element={<Staff />} />
          <Route path='students' element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
