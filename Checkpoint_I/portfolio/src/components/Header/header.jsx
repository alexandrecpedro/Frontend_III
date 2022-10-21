import './header.css';

import React from 'react';

import PERSON from '../../assets/img/personal-info.jpg';
import CTA from './cta';
import HeaderSocials from './headerSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Alexandre Pedro</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="personal">
                    <img src={PERSON} alt='me' />
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;
