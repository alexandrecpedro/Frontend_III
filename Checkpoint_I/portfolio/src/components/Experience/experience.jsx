import './experience.css';
import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { FaCss3Alt, FaBootstrap, FaJava, FaNodeJs, FaObjectGroup, FaReact, FaSass } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { MdPattern } from 'react-icons/md';
import { SiAngular, SiExpress, SiFlutter, SiJavascript, SiKotlin, SiMongodb, SiPython, SiSpringboot } from 'react-icons/si';
import React from 'react';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Experience</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML 5</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon' />
              <div>
                <h4>CSS 3</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaSass className='experience__details-icon' />
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiAngular className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiSpringboot className='experience__details-icon' />
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaObjectGroup className='experience__details-icon' />
              <div>
                <h4>Object-oriented programming</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdPattern className='experience__details-icon' />
              <div>
                <h4>Design Patterns</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Express.js</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}

        <div className="experience__mobile">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiKotlin className='experience__details-icon' />
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiFlutter className='experience__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;