import React from 'react';
import style from '../assets/stylesheets/contact.module.scss';

const Contact = () => (
  <section className={`${style.section}`}>
    <div className={`${style.titleDiv}`}>
      <h1 className={`${style.title}`}>
        <span className="constBlue">{'<h1>'}</span>
        <span className="contentOrange">Get started</span>
        <span className="constBlue">{'</h1>'}</span>
      </h1>
      <h2 className={`${style.subTitle} contentOrange`}>
        <span className="constBlue">{'</h2>'}</span>
        <br />
        <div className={`${style.h2Text}`}>
          If you think I can fulfill an opening in
          your company or project and is interested
          in my collaboration please contact me through social media or email!
        </div>
        <span className="constBlue">{'</h2>'}</span>
      </h2>
    </div>
    <div className={`${style.contentDiv}`}>
      <div className={`${style.object}`}>
        <p className={`${style.objectOpening}`}>
          <span className="constBlue">const</span>
          {' '}
          <span className="constNameBlue">Contact Information</span>
          {' '}
          =
          {' '}
          <span className="curlyBraces">{'{'}</span>
        </p>
        <p className={`contentOrange ${style.objectInfo}`}>
          <span className="constNameBlue">Email:</span>
          {' '}
          &apos;
          <a className={`${style.link}`} href="mailto: jonunes9326@hotmail.com.br">jonunes9326@hotmail.com.br</a>
          &apos;
          <span className="comma">,</span>
        </p>
        <p className={`contentOrange ${style.objectInfo}`}>
          <span className="constNameBlue">LinkedIn:</span>
          {' '}
          &apos;
          <a className={`${style.link}`} href="https://www.linkedin.com/in/joaovitormontanholi/">https://www.linkedin.com/in/joaovitormontanholi/</a>
          &apos;
          <span className="comma">,</span>
        </p>
        <p className={`contentOrange ${style.objectInfo}`}>
          <span className="constNameBlue">GitHub:</span>
          {' '}
          &apos;
          <a className={`${style.link}`} href="https://github.com/jmontanholi">https://github.com/jmontanholi</a>
          &apos;
          <span className="comma">,</span>
        </p>
        <p className={`contentOrange ${style.objectInfo}`}>
          <span className="constNameBlue">WhatsApp:</span>
          {' '}
          &apos;+55(11)97089-7100&apos;
        </p>
        <p className={`${style.objectClosing} curlyBraces`}>
          {'}'}
          <span className={`${style.writeEffect}`} />
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
