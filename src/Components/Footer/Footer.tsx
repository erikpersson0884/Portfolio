import React from 'react';
import './Footer.css';
import SocialLogos from '../SocialLogos/SocialLogos';

import info from '../../info.json';

const Footer: React.FC = () => {

    return (
        <footer className='pageFooter'>
            <a className="footerEmail" href={"mailto:"+info.contact.email}>{info.contact.email}</a>

            <SocialLogos className="footerLogos"/>
        </footer>
    );
};

export default Footer;