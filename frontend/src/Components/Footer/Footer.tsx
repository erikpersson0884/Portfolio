import React from 'react';
import './Footer.css';

import info from '../../info.json';

const Footer: React.FC = () => {
    return (
        <footer className='pageFooter'>
            <a href={"mailto:"+info.contact.email} className="footerEmail">{info.contact.email}</a>

            <nav className="footerLogos">
                {info.socials.map((social, index) => (
                        <a href={social.url} key={index}>
                            <img src={social.icon} alt={social.name} />
                        </a>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;