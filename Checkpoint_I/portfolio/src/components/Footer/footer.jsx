import './footer.css';
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import React from 'react';

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className='footer__logo'>Alexandre Pedro</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#experience">Technical Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://github.com/alexandrecpedro">
                    <AiFillGithub/>
                </a>
                <a href="https://www.instagram.com/alexandrecpedro/">
                    <AiOutlineInstagram />
                </a>
                <a href="https://twitter.com/alexandrecpedro">
                    <AiOutlineTwitter />
                </a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Alexandre Pedro. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;
