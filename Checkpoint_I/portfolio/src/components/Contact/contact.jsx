import './contact.css';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kgo18on', 'template_9ba4seq', form.current, 'fBaMdoaZsTDAXqQ25');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>alexandrecpedro@gmail.com</h5>
            <a
              href='mailto:alexandrecpedro@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>in/alexandre-da-costa-pedro-a319b62b/</h5>
            <a
              href='https://www.linkedin.com/in/alexandre-da-costa-pedro-a319b62b/'
              target='_blank'
              rel='noreferrer'
            >
              Contact at LinkedIn
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 (11) 99626-9649</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+5511996269649'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder='Full Name' autoComplete="off" required />
          <input type='email' name="email" placeholder='Email' autoComplete="off" mask="email@email.com" required />
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;