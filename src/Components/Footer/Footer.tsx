import React from 'react';
import './Footer.css';

import info from '../../info.json';

const Footer: React.FC = () => {

    return (
        <footer className='pageFooter'>
            <a className="footerEmail" href={"mailto:"+info.contact.email}>{info.contact.email}</a>

            <nav className="footerLogos">
                {info.socials.map((social, index) => (
                        <a href={social.url} key={index}>
                            <svg>
                                <path d={social.path}></path>
                            </svg>
                        </a>
                ))} 
            </nav>
        </footer>
    );
};

export default Footer;