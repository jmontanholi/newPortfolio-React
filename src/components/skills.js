import React from 'react';
import style from '../assets/stylesheets/aboutMe.module.scss';

const Skills = () => (
  <div className={`${style.object}`}>
    <p className={`${style.objectOpening}`}>
      <span className="constBlue">const</span>
      {' '}
      <span className="constNameBlue">Skills</span>
      {' '}
      =
      {' '}
      <span className="curlyBraces">{'{'}</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Front-end:</span>
      {' '}
      <span className="curlyBraces">[</span>
      &apos;JavaScript&apos;
      <span className="comma">,</span>
      {' '}
      &apos;HTML5&apos;
      <span className="comma">,</span>
      {' '}
      &apos;CSS3&apos;
      <span className="comma">,</span>
      {' '}
      &apos;React&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Redux&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Bootstrap&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Scss&apos;
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Back-end:</span>
      {' '}
      <span className="curlyBraces">[</span>
      &apos;Ruby&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Ruby on Rails&apos;
      <span className="comma">,</span>
      {' '}
      &apos;PostgreSQL&apos;
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Tools & Methods:</span>
      {' '}
      <span className="curlyBraces">[</span>
      &apos;Git&apos;
      <span className="comma">,</span>
      {' '}
      &apos;GitHub&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Chrome Dev Tools&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Heroku&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Netlify&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Capybara&apos;
      <span className="comma">,</span>
      {' '}
      &apos;Jest.&apos;
      <span className="curlyBraces">]</span>
      <span className="comma">,</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Professional:</span>
      {' '}
      <span className="curlyBraces">[</span>
      <br />
      <div className={`${style.professionalContent}`}>
        &apos;Teamwork&apos;
        <span className="comma">,</span>
        <br />
        &apos;Mentoring&apos;
        <span className="comma">,</span>
        <br />
        &apos;Leadership&apos;
        <span className="comma">,</span>
        <br />
        &apos;Adaptability&apos;
        <span className="comma">,</span>
        <br />
        &apos;Communication&apos;
        <span className="comma">,</span>
        <br />
        &apos;Problem-solving&apos;
        <span className="comma">,</span>
        <br />
        &apos;Remote teamwork&apos;
        <span className="comma">,</span>
        <br />
        &apos;Remote accountability&apos;
        <span className="comma">,</span>
        <br />
        &apos;Remote Pair-Programming&apos;
      </div>
      <span className="curlyBraces">]</span>
    </p>
    <p className={`${style.objectClosing} curlyBraces`}>
      {'}'}
      <span className={`${style.writeEffect}`} />
    </p>
  </div>
);

export default Skills;
