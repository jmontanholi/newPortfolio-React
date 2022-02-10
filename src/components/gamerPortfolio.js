import React from 'react';
import style from '../assets/stylesheets/project.module.scss';
import img1 from '../assets/images/gamerPortfolio.png';
import img2 from '../assets/images/gamerPortfolio2.png';

const GamerPortfolio = () => (
  <div className={`${style.project}`}>
    <p className={`${style.objectOpening}`}>
      <span className="constBlue">const</span>
      {' '}
      <span className="constNameBlue">
        Perspicientia
        - Gamer Portfolio Website -
        * Incomplete Project *
      </span>
      {' '}
      =
      {' '}
      <span className="curlyBraces">{'{'}</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Description:</span>
      {' '}
      &apos;It is a website
      {' '}
      that lets gamers create a personal portfolio with pictures
      and videos of theirs gameplays
      and lets companies and schools search for gamers&apos;
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Built With:</span>
      {' '}
      <span className="curlyBraces">[</span>
      &apos;React&apos;,
      &apos;React Hooks&apos;,
      &apos;Heroku&apos;,
      &apos;Ruby&apos;,
      &apos;Ruby on Rails&apos;,
      &apos;PostgreSQL&apos;
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Live Demo of React frontend:</span>
      {' '}
      &apos;
      <a href="https://gamerportfolioreact.herokuapp.com">https://gamerportfolioreact.herokuapp.com</a>
      &apos;
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Live Demo of Rails backend:</span>
      {' '}
      &apos;
      <a href="https://gamerportfolioapi.herokuapp.com/api-docs/index.html">https://gamerportfolioapi.herokuapp.com/api-docs/index.html</a>
      &apos;
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Pictures:</span>
      {' '}
      <span className="curlyBraces">[</span>
    </p>
    <img className={`${style.img}`} src={img1} alt="splash page for a gamer portfolio website" />
    <img className={`${style.img}`} src={img2} alt="login page in a gamer portfolio website" />
    <p className={`${style.picturesClosing}`}>
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`${style.objectClosing} curlyBraces`}>
      {'}'}
    </p>
  </div>
);

export default GamerPortfolio;
