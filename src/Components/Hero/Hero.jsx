import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'


const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div id='home' className='hero'>

      <div  className="hero-img">
        <img src={profile_img} alt="" />
      </div>

      <h1><span>I'm Mohamed Rafeek</span> full stack developer in India.</h1>
      <p>I build responsive websites and applications using modern web technologies.</p>

      <div className="hero-action">
        <div className="hero-connect"><a className='anchor-link' onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Connect with me</a></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
