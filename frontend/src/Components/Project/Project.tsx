import React from "react";
import { Link } from 'react-router-dom';
import { Project as ProjectInterface} from "../../types";
import "./Project.css";


interface ProjectProps {
    project: ProjectInterface;
    className: string;
    id: string;
}

const Project = ({project, className, id}: ProjectProps ) => {
    return (
        <div id={id} className={className + "sectionBox projectContainer"}>
            <div className="project">
                <div>
                    <Link className="noAFormatting" to={"/project/" + project.name.toLowerCase()}>
                        <h1>{project.name}</h1>
                    </Link>
                    <p>{project.description}</p>

                    <Link className="readMore" to={"/project/" + project.name.toLowerCase()}>
                        <p>Read More</p>
                        <img src="images/icons/right.svg"></img>
                    </Link>


                    <nav>
                        <a href={project.githubLink}>
                            Github repo
                        </a>
                        <a href={project.websiteLink}>
                            Website
                        </a>
                    </nav>
                </div>

                <div>
                    {project.images.map((image, index) => (
                        <img key={index} src={image} alt={project.name + " iamge"} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Project;