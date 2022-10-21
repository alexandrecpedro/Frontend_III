import './testimonials.css';
import clients from './Clients/clients';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40} // pixels
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        { clients.map(({avatar, alt, name, review}, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={alt} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;