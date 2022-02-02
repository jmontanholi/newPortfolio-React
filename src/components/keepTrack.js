import React from 'react';
import style from '../assets/stylesheets/project.module.scss';
import img from '../assets/images/keeptrack.png';
import img2 from '../assets/images/keeptrack2.png';

const KeepTrack = () => (
  <div className={`${style.project}`}>
    <p className={`${style.objectOpening}`}>
      <span className="constBlue">const</span>
      {' '}
      <span className="constNameBlue">KeepTrack - Mobile App</span>
      {' '}
      =
      {' '}
      <span className="curlyBraces">{'{'}</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Description:</span>
      {' '}
      &apos;
      It is an app that keeps track of your transactions and their types.
      &apos;
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Built With:</span>
      {' '}
      <span className="curlyBraces">[</span>
      Ruby, Ruby on Rails, CSS, Scss(Sass), PostgreSQL
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Live Demo:</span>
      {' '}
      &apos;
      <a href="https://safe-reef-20208.herokuapp.com">https://safe-reef-20208.herokuapp.com</a>
      &apos;
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Pictures:</span>
      {' '}
      <span className="curlyBraces">[</span>
    </p>
    <img className={`${style.img}`} src={img} alt="reservation page in a games website" />
    <img className={`${style.img}`} src={img2} alt="login page in a games website" />
    <p className={`${style.picturesClosing}`}>
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`${style.objectClosing} curlyBraces`}>
      {'}'}
    </p>
  </div>
);

export default KeepTrack;
