import React from 'react'
import AboutImage from '../../assets/pic.jpg'
import cv from '../../assets/CV2.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'


const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
              {
                data.map(item =>(
                  <Card key={item.id} className="about__card">
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
          </div>
          {/* <p>
            Building projects my clients love have always been my passion. beeing in the web developement industry for over 3 years and serving more than 70+ happy clients worldwide, I'm always motivated to do more!
          </p> */}
          <p>
            Hi, My Name is Tushar and i am from Nasik. I am MERN stack developer with a Bachelor degree in computer science. My top priority is to get your business online the right way, giving you industry stndard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project. let's get started ! Check out my resume below!
          </p>
          <a href={cv} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About