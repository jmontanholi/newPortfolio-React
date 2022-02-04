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
      <span className="curlyBraces">[</span>
    </p>
    <div className={`${style.innerObject}`}>
      <div className={`${style.experienceContent} contentOrange`}>
        &apos;● Helped over 20 people on a daily basis
        fix their issues related to mostly technical bugs&apos;
        <span className="comma">,</span>
        <br />
        &apos;● Helped over 3000 people
        during my work time and got a success rate of over 70% with a satisfactory rate of over 80%
        &apos;
        <span className="comma">,</span>
        <br />
        &apos;● Developed a sense of community with my coworkers
        since we tried to help each other through the forums&apos;
        <span className="comma">,</span>
        <br />
        &apos;● Learned how to stay up to date with information
        pertinent to my job, such as updates on the product and hotfixes launched by the company
        &apos;
        <span className="comma">,</span>
        <br />
        &apos;● Helped my coworkers with positive, constructive
        feedback on how they could improve certain answers they gave customers&apos;
      </div>
      <span className={`${style.closingSquare} curlyBraces`}>]</span>
    </div>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Microverse - Code Reviewer:</span>
      {' '}
      <span className="curlyBraces">[</span>
    </p>
    <div className={`${style.innerObject}`}>
      <div className={`${style.experienceContent} contentOrange`}>
        &apos;● Guide students on JavaScript, Ruby, and React projects&apos;
        <span className="comma">,</span>
        <br />
        &apos;● Work with students from over 7 different countries&apos;
        <span className="comma">,</span>
        <br />
        &apos;● Effectively communicate through tools like Slack, Zoom, Zendesk, and GitHub&apos;
        <span className="comma">,</span>
        <br />
        &apos;● Consistently receive excellent feedback from my mentees&apos;
        <span className="comma">,</span>
      </div>
      <span className={`${style.closingSquare} curlyBraces`}>]</span>
    </div>
    <p className={`contentOrange ${style.objectInfo}`}>
      <span className="constNameBlue">Microverse - Mentor:</span>
      {' '}
      <span className="curlyBraces">[</span>
    </p>
    <div className={`${style.innerObject}`}>
      <div className={`${style.experienceContent} contentOrange`}>
        &apos;● Mentored junior web developers, providing technical
        support through code reviews for React, JavaScript, HTML, and CSS
        &apos;
        <span className="comma">,</span>
        <br />
        &apos;● Proposed improvements to code organization to increase code
        quality and overall performance, for example, I helped them
        see in their code mistakes like a big stack of If rules that could be repurposed
        &apos;
        <span className="comma">,</span>
        <br />
        &apos;● Provided advice and tips on how students
        could improve their coding and stay motivated while learning
        &apos;
        <span className="comma">,</span>
        <br />
        &apos;● Consistently receive excellent feedback from my mentees.&apos;
        <span className="comma">,</span>
      </div>
      <span className={`${style.closingSquare} curlyBraces`}>]</span>
    </div>
    <p className={`${style.objectClosing} curlyBraces`}>
      {'}'}
    </p>
  </div>
);

export default Experience;
