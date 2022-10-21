import './portfolio.css';
import projects from '../../projects/index';
import React from 'react';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          projects.map(({ id, title, alt, img, github, website }) => (
            <article className='portfolio__item'>
              <div key={id} className={`portfolio__item-image im${id}`}>
                <img src={img} alt={alt} />
              </div>
              <h3 className={`title${id}`}>{title}</h3>
              <div className="portfolio__item-cta" id={`id${id}`}>
                <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                {website &&
                  <a href={website} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                }
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
}

export default Portfolio;