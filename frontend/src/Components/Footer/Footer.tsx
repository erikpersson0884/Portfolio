import React from 'react';
import './Footer.css';

import info from '../../info.json';

const Footer: React.FC = () => {
    return (
        <footer className='pageFooter'>
            <div className="footerLogos invisible">
                {
                    info.socials.map((social, index) => (
                        <a href={social.url} key={index}>
                            <img src={social.icon} alt={social.name} />
                        </a>
                    ))
                }
            </div>

            <a href={"mailto:"+info.contact.email} className="email">{info.contact.email}</a>

            <div className="footerLogos">
                {
                    info.socials.map((social, index) => (
                        <a href={social.url} key={index}>
                            <img src={social.icon} alt={social.name} />
                        </a>
                    ))
                }
            </div>
        </footer>
    );
};

export default Footer;