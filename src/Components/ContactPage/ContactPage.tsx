import React from 'react';

import './ContactPage.css';

import info from '../../info.json'
import SocialLogos from '../SocialLogos/SocialLogos';


const Contact = () => {
    return (
        <div className='contactPageContainer'>
            <div className="contactPage">
                <h1>Contact me</h1>
                <line></line>

                <address className="contactInformation">
                    <div>
                        <img src="images/icons/phone.svg" alt="phone" />
                        <p className='hoverUnderSlide'>{info.contact.phone}</p>
                    </div>
                    <div className='hoverUnderSlide'>
                        <img src="images/icons/mail.svg" alt="email" />
                        <p className='hoverUnderSlide'>{info.contact.email}</p>
                    </div>
                </address>

                <SocialLogos className='contactLogos' />
            </div>
        </div>
    )
}

export default Contact;