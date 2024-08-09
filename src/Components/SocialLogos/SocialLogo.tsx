import React from "react";

import "./SocialLogos.css";

const SocialLogo = ({path, url}: {path: string, url: string}) => {
    return (
        <a href={url}>
            <svg>
                <path d={path}></path>
            </svg>
        </a>
    );
}

export default SocialLogo;