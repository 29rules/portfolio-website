import React from 'react';
import './Hero.css';
import profilePhoto from '../../assets/profilePhoto.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profilePhoto} alt="Profile Photo" />
      <h1>
        <span>I'm Anurag Bishnoi,</span> Full Stack Developer based in Canada.
      </h1>
      <p>
        I'm a Full Stack Developer based in Canada, passionate about building
        modern, scalable web applications with clean code and great user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/path/to/your/resume.pdf" download>My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
