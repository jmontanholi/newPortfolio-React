import React from 'react';
import style from '../assets/stylesheets/hero.module.scss';

const Hero = () => {
  return (
    <section>
      <h1 className={`${style.title}`}>
        <span className={`constBlue ${style.title}`}>{'<h1>'}</span>
        <span className={`contentOrange`}>Hello! Welcome to my Portfolio</span>
        <span className={`constBlue ${style.title}`}>{'</h1>'}</span>
      </h1>
      <div className={`${style.object}`}>
        <p className={`${style.objectOpening}`}>
          <span className='constBlue'>const</span> <span className='constNameBlue'>personalInformation</span> = <span className='curlyBraces'>{'{'}</span>
        </p>
        <p className={`contentOrange ${style.objectInfo}`}>{"fullName: 'João Vítor Montanholi Nunes',"}</p>
        <p className={`contentOrange ${style.objectInfo}`}>{"job: 'Full-stack Developer',"}</p>
        <p className={`contentOrange ${style.objectInfo}`}>{"focus: 'Front-end Developer'"}</p>
        <p className={`contentOrange ${style.objectClosing} curlyBraces`}>{'}'}</p>
      </div>
    </section>
  )
}

export default Hero;