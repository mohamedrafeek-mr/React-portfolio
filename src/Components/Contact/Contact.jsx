import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9928e59e-fbb3-4111-897b-14b01d2ac739");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {alert(data.message);} 
    else {alert("There was an error submitting the form. Please try again later.");}
    event.target.reset();
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available for freelance work and open to new opportunities. Feel free to reach out!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="Mail Icon" /> <a href="mailto:rafirafibai@gmail.com"><p>rafirafibai@gmail.com</p></a>
                </div>
                
                <div className="contact-detail">
                    <img src={call_icon} alt="Call Icon" /> <a href="https://wa.me/918072506647" target='_blank'><p>+91 80725 06647</p></a>
                </div>

                <div className="contact-detail">
                    <img src={location_icon} alt="Location Icon" /> <p>Tamil Nadu, India</p>
                </div>
            </div>
      </div>
      <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name" name='name' required/>

        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter your email" name='email' required/>

        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

        <button type='submit' className='contact-submit'>Submit now</button>
      </form>
     </div>
    </div>
  )
}

export default Contact
