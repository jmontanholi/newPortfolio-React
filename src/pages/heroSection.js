import React from 'react';
import style from '../assets/stylesheets/hero.module.scss';

const Hero = () => (
  <section>
    <h1 className={`${style.title}`}>
      <span className={`constBlue ${style.title}`}>{'<h1>'}</span>
      <span className="contentOrange">Hello! Welcome to my Portfolio</span>
      <span className={`constBlue ${style.title}`}>{'</h1>'}</span>
    </h1>
    <div className={`${style.object}`}>
      <p className={`${style.objectOpening}`}>
        <span className="constBlue">const</span>
        {' '}
        <span className="constNameBlue">personalInformation</span>
        {' '}
        =
        {' '}
        <span className="curlyBraces">{'{'}</span>
      </p>
      <p className={`contentOrange ${style.objectInfo}`}>fullName: `&apos;`João Vítor Montanholi Nunes`&apos;`,</p>
      <p className={`contentOrange ${style.objectInfo}`}>job: `&apos;`Full-stack Developer`&apos;`,</p>
      <p className={`contentOrange ${style.objectInfo}`}>focus: `&apos;`Front-end Developer`&apos;`</p>
      <p className={`contentOrange ${style.objectClosing} curlyBraces`}>{'}'}</p>
    </div>
  </section>
);

export default Hero;
