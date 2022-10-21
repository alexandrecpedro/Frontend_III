import './about.css';
import personal_image from '../../assets/img/personal.jpeg';
import { FaAward, FaClipboardList } from 'react-icons/fa';
import { GiComputing } from 'react-icons/gi';

import React from 'react';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={personal_image} alt="Myself" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              < FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>+1.5 Years Web and Mobile Development</small>
            </article>

            <article className='about__card'>
              < FaClipboardList className='about__icon' />
              <h5>Courses</h5>
              <small>Certified Tech Developer</small><br/>
              <small>Web Developer Full Stack Node</small><br/>
              <small>Developing Android Apps with Kotlin</small>
            </article>
            
            <article className='about__card'>
              < GiComputing className='about__icon' />
              <h5>WorkPlace</h5>
              <small>Mobile Development and Support</small><br/>
            </article>
          </div>

          <p>
            I'm a Chemical Engineer, and a Certified Tech Developer from Digital House Brazil.<br/>
            I found my true calling working with computers and making them work for me.<br/> 
            I love to write these amazing pieces of ✨magic called software.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;