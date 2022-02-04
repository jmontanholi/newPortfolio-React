import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiRuby, SiRubyonrails,
} from 'react-icons/si';
import style from '../assets/stylesheets/aboutMe.module.scss';

const Education = () => (
  <div className={`${style.object}`}>
    <p className={`${style.objectOpening}`}>
      <span className="constBlue">const</span>
      {' '}
      <span className="constNameBlue">Education</span>
      {' '}
      =
      {' '}
      <span className="curlyBraces">{'{'}</span>
    </p>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Microverse - Software Development Progam:</span>
      {' '}
      <span className="curlyBraces">{'{'}</span>
    </p>
    <div className={`${style.innerObject}`}>
      <span className="constNameBlue">Modules:</span>
      <span className="curlyBraces">[</span>
      <br />
      <div className={`${style.modulesContent}`}>
        &apos;
        <SiHtml5 style={{ color: 'rgb(228, 77, 38)' }} />
        {' '}
        HTML &
        {' '}
        <SiCss3 style={{ color: 'rgb(38, 77, 228)' }} />
        {' '}
        CSS&apos;
        <span className="comma">,</span>
        <br />
        &apos;
        <SiJavascript style={{ color: 'rgb(240, 219, 79)' }} />
        {' '}
        JavaScript&apos;
        <span className="comma">,</span>
        <br />
        &apos;
        <SiReact style={{ color: 'rgb(97, 219, 251)' }} />
        {' '}
        React &
        {' '}
        <SiRedux style={{ color: 'rgb(118, 74, 188)' }} />
        {' '}
        Redux&apos;
        <span className="comma">,</span>
        <br />
        &apos;
        <SiRuby style={{ color: 'rgb(169, 20, 1)' }} />
        {' '}
        Ruby & Databases&apos;
        <span className="comma">,</span>
        <br />
        &apos;
        <SiRubyonrails style={{ color: 'rgb(169, 20, 1)' }} />
        {' '}
        Ruby on Rails&apos;
      </div>
      <span className="curlyBraces">]</span>
    </div>
    <p className={`${style.objectClosing} curlyBraces`}>
      {'}'}
    </p>
  </div>
);

export default Education;
