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
                    <img src={profilePhoto} alt="profilePhoto" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m Anurag Bishnoi, a Full Stack Developer based in Canada, with a passion for building modern, user-centric web applications.</p>
                        <p>I specialize in crafting responsive websites and seamless user experiences, using a mix of front-end and back-end technologies to bring ideas to life.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Express JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MySQL</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Git & GitHub</p><hr style={{ width: "50%" }} /></div>
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
                    <h1>21+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />
            </div>

        </div>
    )
}

export default About