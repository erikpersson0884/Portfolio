import React from 'react';
import './Footer.css';

import info from '../../info.json';

const Footer: React.FC = () => {
    return (
        <footer>
            {/* <div className="footerLogos">
                <a href={info.social.instagram}>
                    <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
                </a>
                <a href={info.social.linkedin}>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                </a>
            </div> */}

            <a href={"mailto:"+info.contact.email} className="email">{info.contact.email}</a>

            {/* <div className="footerLogos">
                <a href={info.social.x}>
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="X" />
                </a>
                <a href={info.social.github}>
                    <img src="https://img.icons8.com/color/48/000000/github.png" alt="github" />
                </a>
            </div> */}


            <div className="footerLogos">
                {
                    info.socials.map((social, index) => (
                        <a href={social.url} key={index}>
                            <img src={social.colorIcon} alt={social.name} />
                        </a>
                    ))
                }
            </div>
        </footer>
    );
};

export default Footer;