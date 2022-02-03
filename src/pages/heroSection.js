import React from 'react';
import style from '../assets/stylesheets/hero.module.scss';

const Hero = () => (
  <section className={`${style.section}`}>
    <h1 className={`${style.title}`}>
      <span className="constBlue">{'<h1>'}</span>
      <span className="contentOrange">Hello! Welcome to my Portfolio</span>
      <span className="constBlue">{'</h1>'}</span>
    </h1>
    <div className={`${style.object}`}>
      <p className={`${style.objectOpening}`}>
        <span className="constBlue">const</span>
        {' '}
        <span className="constNameBlue">Personal Information</span>
        {' '}
        =
        {' '}
        <span className="curlyBraces">{'{'}</span>
      </p>
      <p className={`contentOrange ${style.objectInfo}`}>
        <span className="constNameBlue">Full Name:</span>
        {' '}
        &apos;João Vítor Montanholi Nunes&apos;
        <span className="comma">,</span>
      </p>
      <p className={`contentOrange ${style.objectInfo}`}>
        <span className="constNameBlue">Job Title:</span>
        {' '}
        &apos;Full-stack Developer&apos;
        <span className="comma">,</span>
      </p>
      <p className={`contentOrange ${style.objectInfo}`}>
        <span className="constNameBlue">Age:</span>
        {' '}
        <span className="number">21</span>
        <span className="comma">,</span>
      </p>
      <p className={`contentOrange ${style.objectInfo}`}>
        <span className="constNameBlue">Focus:</span>
        {' '}
        &apos;Front-end Developer&apos;
      </p>
      <p className={`${style.objectClosing} curlyBraces`}>
        {'}'}
        <span className={`${style.writeEffect}`} />
      </p>
    </div>
  </section>
);

export default Hero;
