import React from "react";
import { Project } from "../../types";
import Progressbar from "./Progressbar";
import { Link } from 'react-router-dom';

import './ProjectPage.css';



const ProjectPage = ({project}: { project: Project }) =>  {
    console.log(project)
    return (
        <article className="projectPage">
            <section className="firstView">
                <div className="projectMenu">
                    <Link to="/">
                        <img src="/images/icons/back.svg" width="10" alt="back" />
                    </Link>
                    <h1>{project.name}</h1>
                </div>

                <img className="projectImage" src={project.images[0]} alt="project image"/>

                <p className="projectShortDescription">"{project.shortDescription}"</p>
            </section>

            <section>
                <h2>The Problem</h2>
                <Progressbar progress={30} />
                <p>{project.problem}</p>
            </section>

            <section>
                <h2>The Solution</h2>
                <Progressbar progress={66} />
                <p>{project.solution}</p>
            </section>


            <section>
                <h2>Languages</h2>
                <Progressbar progress={90} />
                <ul className="programmingLanguages noUlFormatting">
                    {project.languages.map((language: string, index) => (
                        <li className="programmingLanguageButton" key={index}>{language}</li>
                    ))}
                </ul>
            </section>



            <section className="seeLive">
                <h2>See live</h2>
                <Progressbar progress={100} />
                <div className="seeLiveButtons">
                    <a href={project.websiteLink}>Watch Live</a>
                    <a href={project.githubLink}>See Github</a>
                </div>
            </section>



        </article>
    )
}

export default ProjectPage;