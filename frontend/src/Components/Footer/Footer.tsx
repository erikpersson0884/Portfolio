import React from 'react';
import './Footer.css';

import info from '../../info.json';

const Footer: React.FC = () => {
    const social = info.socials[0]

    return (
        <footer className='pageFooter'>
            <a className="footerEmail" href={"mailto:"+info.contact.email}>{info.contact.email}</a>

            <nav className="footerLogos">
                {info.socials.map((social, index) => (
                        <a href={social.url} key={1433}>
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