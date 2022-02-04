import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './pages/heroSection';
import Layout from './layout';
import Projects from './pages/projectsSection';
import AboutMe from './pages/aboutMeSection';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Hero />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
