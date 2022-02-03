import React from 'react';
import style from '../assets/stylesheets/aboutMe.module.scss';

const Experience = () => (
  <div className={`${style.object}`}>
    <p className={`${style.objectOpening}`}>
      <span className="constBlue">const</span>
      {' '}
      <span className="constNameBlue">Experience</span>
      {' '}
      =
      {' '}
      <span className="curlyBraces">{'{'}</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Directly - Customer Support:</span>
      {' '}
      <span className="curlyBraces">{'{'}</span>
    </p>
    <div className={`${style.innerObject}`}>
      <span className="constNameBlue">Modules:</span>
      <span className="curlyBraces">[</span>
      <br />
      <div className={`${style.modulesContent}`}>
        aaa
      </div>
      <span className="curlyBraces">]</span>
    </div>
    <p className={`${style.objectClosing} curlyBraces`}>
      {'}'}
    </p>
  </div>
);

export default Experience;
