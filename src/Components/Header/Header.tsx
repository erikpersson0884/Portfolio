import React, { useEffect, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const header = document.getElementById('pageHeader') as HTMLElement;
    //         const headerHeight = header.offsetHeight;
    //         const heightToShowHeader = 100;

    //         if (window.scrollY >= heightToShowHeader) {
    //             header.style.top = '0'; // Show the header
    //         } else {
    //             header.style.top = `-${headerHeight}px`; // Hide the header
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // });


    return (
        <header id="pageHeader" className='pageHeader'>
            <Link to="/">
                <img className="websiteLogo" src="images/erikpersson-logo.png" alt="Erik Persson Logo" width="10"/>
            </Link>

            <nav className="pageNavigation">
                <a className='hoverUnderSlide' href="#projects">Projects</a>
                <a className='hoverUnderSlide' href="files/cv.pdf">CV</a>
                <Link className='hoverUnderSlide' to="/contact">Contact me</Link>

                <button className="openPageNavigationButton noButtonFormatting">
                    <img src="images/icons/hamburgerMenu.svg" alt="open page navigation" />
                </button>
            </nav>

        </header>
    );
};

export default Header;

