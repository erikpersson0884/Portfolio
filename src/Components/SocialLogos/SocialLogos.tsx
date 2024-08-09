import React from 'react';
import './SocialLogos.css';
import SocialLogo from './SocialLogo';

import info from '../../info.json';


const SocialLogos = ({ className }: { className?: string }) => {
    return (
        <nav className={`socialLogos ${className}`}>
            {info.socials.map((social, index) => (
                <SocialLogo key={index} path={social.path} url={social.url} />
            ))}
        </nav>
    );
}

export default SocialLogos;