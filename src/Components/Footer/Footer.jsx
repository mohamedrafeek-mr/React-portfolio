import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_icon.png'
import user_logo from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="Footer Logo" />
            <p>I am a Full Stack Developer from India who builds modern websites.
</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_logo} alt="User Logo" />
                <input type="email" placeholder='Enter your email' className='fp'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Mohamed Rafeek. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
