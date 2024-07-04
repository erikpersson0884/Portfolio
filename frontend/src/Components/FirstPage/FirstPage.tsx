
import React, { useEffect, useState } from 'react';
import './FirstPage.css';
import data from '../../info.json';



const FirstPage = ({className}: {className: string}) => {


    return (
        <div className={className + " firstPage"}>

            {/* <div className="firstPageContainer"> */}

                <div className='headerTextContainer'>
                    <h1>
                        Welcome, my name is <span className='name'>Erik Persson</span>
                        <br />
                        and I am a <span className='name'>Web developer</span>
                    </h1>
                    
                    <img src="images/erikpersson.jpg" alt="Erik Persson" />
                </div>

                <div className='headerProjectsContainer'>
                    <nav className='projects'>
                        <h2>Projects</h2>
                        {/* <line  className='projectsLine'></line> */}
                        <ul className='noUlFormatting navList'>
                            {data.projects.map((project, index) => {
                                return (
                                    <li key={index}>
                                        {
                                            project.icon && 
                                            <span className="material-symbols-outlined">
                                            {project.icon}
                                            </span>
                                        }
                                        <a href={project.name}>{project.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav> 
                    
                {/* </div> */}

            </div>
        </div>
    );
};

export default FirstPage;