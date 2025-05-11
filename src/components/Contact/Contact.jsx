import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "283f5277-7ec9-4bc0-946c-fc20d5fe8235");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message);
            setResult("Message sent successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
      {/* Removed duplicate return statement */}
      return (
        <div id='contact' className='contact'>
          <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="theme_pattern" />
          </div>
          <div className="contact-section">
            <div className="contact-left">
              <h1>Let's talk</h1>
              <p>I'm currently available to take on new projects. You can contact me anytime.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="mail_icon" /><p>anuragbishnoi852@gmail.com</p>
                </div>
                <div className="contact-detail">
                  <img src={call_icon} alt="call_icon" /><p>+1(416)-305-9605</p>
                </div>
                <div className="contact-detail">
                  <img src={location_icon} alt="location_icon" /><p>Toronto, Canada</p>
                </div>
              </div>
            </div>
    
            <form onSubmit={onSubmit} className="contact-right">
              <label>Your Name</label>
              <input type="text" name='name' placeholder='Enter your name' required />
              <label>Your Email</label>
              <input type="email" name='email' placeholder='Enter your email' required />
              <label>Write your message here</label>
              <textarea name="message" rows="8" placeholder='Enter your message here' required></textarea>
              <button type='submit' className='contact-submit'>Submit Now</button>
              <span>{result}</span>
            </form>
          </div>
        </div>
      );
    };
    
    export default Contact;