import React from 'react';

import './Contact.css';

import info from '../../info.json'
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div className='contactPageContainer'>
            {/* <header className="pageHeader contactHeader">
                <Link to="/">
                    <img className="websiteLogo" src="images/erikpersson-logo.png" alt="Erik Persson Logo" />
                </Link>
                
                <nav className="pageNavigation">

                    {
                        info.socials.map((social, index) => (
                            <a href={social.url} key={index}>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))
                    }
                </nav>
            </header> */}

            <div className="contactPage">
                <h1>Contact me</h1>
                <line></line>

                <address className="contactInformation">
                    <div>
                        <img src="images/icons/phone.svg" alt="phone" />
                        <p>{info.contact.phone}</p>
                    </div>
                    <div>
                        <img src="images/icons/mail.svg" alt="email" />
                        <p>{info.contact.email}</p>
                    </div>
                </address>

            </div>
        </div>
    )
}

export default Contact;