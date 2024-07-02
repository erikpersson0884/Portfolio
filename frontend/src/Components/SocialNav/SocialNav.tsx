import React from "react";
import "./SocialNav.css";

// import info from "../../info.json";

const SocialNav = () => {

    const social = [
        {
            "name": "LinkedIn",
            "icon": "linkedin",
            "link": "https://www.linkedin.com/in/erikpersson0884/"
        },
        {
            "name": "GitHub",
            "icon": "github.svg",
            "link": "https://www.github.com/erikpersson0884"
        },
        {
            "name": "Instagram",
            "icon": "instagram.svg",
            "link": "https://www.instagram.com/erikpersson0884"
        }
    ]


    return (
        <nav className="socialNav">
            <ul className="noUlFormatting">
                {social.map((social, index) => {
                    return (
                        <li key={index}>
                            <a href={social.link}>
                                <span className="material-symbols-outlined">
                                    {social.icon}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SocialNav;
