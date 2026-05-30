import React from 'react';
import './Hero.css';
import profilePhoto from '../../assets/profilePhoto.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profilePhoto} alt="Anurag Bishnoi - Java Full Stack Developer" />
      <h1>
        <span>I'm Anurag Bishnoi,</span> Java Backend &amp; Full Stack Developer based in Toronto, Canada.
      </h1>
      <p>
        5+ years of experience building scalable, production-grade applications at Scotiabank.
        Passionate about clean code, REST APIs, and modern web technologies.
        Currently targeting SDE1 roles in the tech industry.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="Anurag_Bishnoi_FullStack_Resume.pdf" download="Anurag_Bishnoi_Resume.pdf">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
