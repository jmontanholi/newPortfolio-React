import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './pages/heroSection';
import Layout from './layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/contact" />
          <Route path="/aboutMe" />
          <Route path="/projects" />
          <Route path="/" element={<Hero />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
