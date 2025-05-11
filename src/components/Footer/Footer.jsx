import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="footer_logo" />
                <p>I'm a Full Stack Developer with 5+ years of experience building responsive, scalable web applications—let’s connect and create something impactful.</p>    
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Anurag Bishnoi. All rights reserved.</p>
            <div className="footer-bottom-right">
            <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>

        </div>

    </div>
    </div>
  )
}

export default Footer