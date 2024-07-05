import React from "react";
import { Link } from 'react-router-dom';

import "./Project.css";


interface ProjectProps {
    className: string;
    name: string;
    description: string;
    githubLink: string;
    websiteLink: string;
    images: string[];
    icon: string;
}

const Project = ({className, name, description, githubLink, websiteLink, images}: ProjectProps ) => {
    return (
        <div className={className + " projectContainer"}>
            <div className="project">
                <div>
                    <Link to={"/" + name.toLowerCase()}>
                        <h1>{name}</h1>
                    </Link>
                    <p>{description}</p>

                    <nav>
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            Github repo
                        </a>
                        <a href={websiteLink} target="_blank" rel="noreferrer">
                            Website
                        </a>
                    </nav>
                </div>

                <div>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={name + " iamge"} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Project;