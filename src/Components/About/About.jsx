import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="about-img-border">
            <img src={profile_img} alt="Profile" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a motivated developer with a strong focus on Full Stack Development. I've built a solid skill base in Python, Django, and React, which allows me to craft dynamic and seamless web experiences. I'm highly adaptable and excel at finding efficient solutions.</p> <p> My goal is simple: to keep learning, creating high-quality applications, and contributing positively to a great development team.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "76%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>React</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>Django</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "80%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-avhievements">
        <div className="about-avhievement">
          <h1>6</h1>
          <p>Months Completion Certificate</p>
        </div>
        <hr />
        <div className="about-avhievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-avhievement">
          <h1>4</h1>
          <p>Full Stack Real Time Projects</p>
        </div>
      </div>
    </div>
  )
}

export default About
