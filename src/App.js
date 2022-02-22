import './App.scss';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './pages/heroSection';
import Layout from './layout';
import Projects from './pages/projectsSection';
import AboutMe from './pages/aboutMeSection';
import Contact from './pages/contact';
import OnlyDesktop from './pages/onlyDesktop';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });
  return (
    <div className="App">
      {
        width < 768 && <OnlyDesktop />
      }
      {
        width > 767 && (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/" element={<Hero />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )
      }
    </div>
  );
}

export default App;
