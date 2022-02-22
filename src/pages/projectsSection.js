import React from 'react';
import style from '../assets/stylesheets/projectsSection.module.scss';
import Yorus from '../components/yorus';
import KeepTrack from '../components/keepTrack';
import GamerPortfolio from '../components/gamerPortfolio';

const Projects = () => (
  <section className={`${style.section}`}>
    <h1 className={`${style.title}`}>
      <span className="constBlue">{'<h1>'}</span>
      <span className={`${style.titleText} contentOrange`}>Projects Highlights</span>
      <span className="constBlue">{'</h1>'}</span>
    </h1>
    <div className={`${style.projectsDiv}`}>
      <GamerPortfolio />
      <KeepTrack />
      <Yorus />
    </div>
  </section>
);

export default Projects;
