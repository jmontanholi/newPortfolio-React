import React from 'react';
import style from '../assets/stylesheets/aboutMe.module.scss';
import Skills from '../components/skills';
import myself from '../assets/images/NewProfessionalPhoto.jpeg';
import Education from '../components/education';
import Experience from '../components/experience';
import eurocurriculum from '../assets/curriculum/eurocurriculum.pdf';
import curriculum from '../assets/curriculum/curriculum.pdf';

const AboutMe = () => (
  <section className={`${style.section}`}>
    <div className={`${style.photoDiv}`}>
      <div>
        <h1 className={`${style.title}`}>
          <span className="constBlue">{'<h1>'}</span>
          <span className="contentOrange">Want to know more? Download one of my curriculums</span>
          <span className="constBlue">{'</h1>'}</span>
        </h1>
        <p>
          <span className="constBlue">const</span>
          {' '}
          <span className="constNameBlue">curriculums</span>
          {' '}
          =
          {' '}
          <span className="curlyBraces">[</span>
          <a className={`${style.curriculumLink} contentOrange`} href={curriculum} download={curriculum}>&apos;Curriculum&apos;</a>
          <span className="comma">,</span>
          {' '}
          <a className={`${style.curriculumLink} contentOrange`} href={eurocurriculum} download={eurocurriculum}>&apos;Curriculum - European model&apos;</a>
          <span className="curlyBraces">]</span>
        </p>
      </div>
      <img className={`${style.profilePicture}`} src={myself} alt="white male 22 years with brown messy hair" />
    </div>
    <div className={`${style.innerDiv}`}>
      <Skills />
      <Education />
    </div>
    <div className={`${style.innerDiv}`}>
      <Experience />
    </div>
  </section>
);

export default AboutMe;
