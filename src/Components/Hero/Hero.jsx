import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import resume from '../../assets/MOHAMED RAFEEK CV.pdf'


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
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer" className="anchor-link" style={{ cursor: 'pointer' }}>
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
