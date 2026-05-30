import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Anurag Bishnoi" />
          <p>Java Backend &amp; Full Stack Developer with 5+ years of experience. Open to SDE1 opportunities in Toronto and remote.</p>
        </div>
        <div className="footer-top-right">
          <a href="https://github.com/29rules" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
          <a href="https://linkedin.com/in/anurag-bishnoi" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
          <a href="mailto:anuragbishnoi8@gmail.com" className="footer-social-link">Email</a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Anurag Bishnoi. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="https://github.com/29rules" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/anurag-bishnoi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
