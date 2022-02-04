import React from 'react';
import style from '../assets/stylesheets/project.module.scss';
import yorusImg from '../assets/images/yorus.png';
import yorusImg2 from '../assets/images/yorus2.png';

const Yorus = () => (
  <div className={`${style.project}`}>
    <p className={`${style.objectOpening}`}>
      <span className="constBlue">const</span>
      {' '}
      <span className="constNameBlue">Yoru&apos;s - Game rentals Shop</span>
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
      that lets people put games that other people can rent.&apos;
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
      <span className="constNameBlue">Live Demo:</span>
      {' '}
      &apos;
      <a href="https://gamerentalsreact.herokuapp.com/home">https://gamerentalsreact.herokuapp.com/home</a>
      &apos;
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Pictures:</span>
      {' '}
      <span className="curlyBraces">[</span>
    </p>
    <img className={`${style.img}`} src={yorusImg} alt="reservation page in a games website" />
    <img className={`${style.img}`} src={yorusImg2} alt="login page in a games website" />
    <p className={`${style.picturesClosing}`}>
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`${style.objectClosing} curlyBraces`}>
      {'}'}
    </p>
  </div>
);

export default Yorus;
