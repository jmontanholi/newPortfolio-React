import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoJavascript } from 'react-icons/io';
import style from '../assets/stylesheets/navBarTop.module.scss';

const NavBarLeft = () => (
  <section className={`${style.section}`}>
    <NavLink className={`${style.link}`} to="/">
      <IoLogoJavascript />
      home.js
    </NavLink>
    <NavLink className={`${style.link}`} to="/projects">
      <IoLogoJavascript />
      projects.js
    </NavLink>
    <NavLink className={`${style.link}`} to="/aboutMe">
      <IoLogoJavascript />
      aboutMe.js
    </NavLink>
    <NavLink className={`${style.link}`} to="/contact">
      <IoLogoJavascript />
      contact.js
    </NavLink>
  </section>
);

export default NavBarLeft;
