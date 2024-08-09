import React from 'react';
import './SocialLogos.css';

import info from '../../info.json';


const SocialLogos = ({ className }: { className?: string }) => {
    return (
        <nav className={`socialLogos ${className}`}>
            {info.socials.map((social, index) => (
                <a href={social.url} key={index}>
                    <svg>
                        <path d={social.path}></path>
                    </svg>
                </a>
            ))}
        </nav>
    );
}

export default SocialLogos;