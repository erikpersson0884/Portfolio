import React, { useEffect } from 'react';
import './Header.css';
import info from '../../info.json';

const Header: React.FC = () => {
    useEffect(() => { // hide header on first page
        const handleScroll = () => {
            const header = document.getElementById('sticky-header') as HTMLElement;
            const headerHeight = header.offsetHeight;

            // const heightToShowHeader = window.innerHeight;
            const heightToShowHeader = 100;

            if (window.scrollY >= heightToShowHeader) {
                header.style.top = '0'; // Show the header
            } else {
                header.style.top = `-${headerHeight}px`; // Hide the header
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="sticky-header">
            <img className="websiteLogo" src="images/erikpersson-logo.png" alt="Erik Persson Logo" />
            <nav>
                <ul className='noUlFormatting'>
                    {info.socials.map((social, index) => (
                        <li key={index}>
                            <a href={social.url} target='_blank' rel='noreferrer'>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
