import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import profilePhoto from '../../assets/profilePhoto.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profilePhoto} alt="Anurag Bishnoi" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm Anurag Bishnoi, a Java Backend &amp; Full Stack Developer based in Toronto, Canada, with 5+ years of professional experience building production-grade software at Scotiabank.</p>
            <p>I specialize in backend development with Java and Spring Boot, and build modern frontends with React. I'm passionate about writing clean, maintainable code and delivering real business impact.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Java &amp; Spring Boot</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>JavaScript / Node.js</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>SQL (MySQL / PostgreSQL)</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Docker &amp; Git</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Selenium / Testing</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>REST APIs</p><hr style={{ width: "85%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS BUILT</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>TECH STACKS MASTERED</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
