import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import info from '../../info.json';



const Header: React.FC = () => {
    useEffect(() => { // hide header on first page
        const handleScroll = () => {
            const header = document.getElementById('pageHeader') as HTMLElement;
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
        <header id="pageHeader">
            <Link to="/">
                <img className="websiteLogo" src="images/erikpersson-logo.png" alt="Erik Persson Logo" />
            </Link>

            <nav className="pageNavigation">
                <a href="#projects">Projects</a>

                <a href="files/cv.pdf">CV</a>

                <Link to="/contact">Contact me</Link>
            </nav>

            <nav>
                <ul className='noUlFormatting hidden'>
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
