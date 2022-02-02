import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from './pages/hero_section';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/contact' />
          <Route path='/aboutMe' />
          <Route path='/projects' />
          <Route path='/' element={<Hero />}/>
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
