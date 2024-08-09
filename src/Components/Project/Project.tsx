import React from "react";
import { Link } from 'react-router-dom';
import { Project as ProjectInterface} from "../../types";
import "./Project.css";


interface ProjectProps {
    project: ProjectInterface;
    className?: string;
    id: string;
}

const Project = ({project, className, id}: ProjectProps ) => {
    return (
            <div className="project" id={id}>

                <div>
                    <Link className="noAFormatting" to={"/project/" + project.name.toLowerCase()}>
                        <h2>{project.name}</h2>
                    </Link>

                    <img className="mobileImage" src={project.images[0]} alt={project.name + " image"} />

                    <p>{project.description}</p>

                    <nav>
                        <a className="hoverUnderSlide" href={project.githubLink}>
                            Github repo
                        </a>
                        <a className="hoverUnderSlide" href={project.websiteLink}>
                            Website
                        </a>

                        <Link className="readMore" to={"/project/" + project.name.toLowerCase()}    >
                            <p>Read More</p>
                            <img src="images/icons/right.svg" alt="Right arrow" />
                        </Link>

                    </nav>

                </div>

                <div className="projectImages">
                    {project.images.map((image, index) => (
                        <img key={index} src={image} alt={project.name + " image"} />
                    ))}
                </div>
            </div>
    );
};

export default Project;