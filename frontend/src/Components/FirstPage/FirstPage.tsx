
import React, { useEffect, useState } from 'react';
import './FirstPage.css';
import info from '../../info.json';



const FirstPage = () => {


    return (
        <div className='firstPage'>
            <div className='headerTextContainer'>
                <h1>
                    Welcome, my name is <a href={info.socials[0].url} className='name noAFormatting'>Erik Persson</a>
                    <br />
                    and I am a <span className='name'>Web developer</span>
                </h1>
                
                <img src="images/erikpersson.jpg" alt="Erik Persson" />
            </div>

            <div className='headerProjectsContainer'>
                <nav className='projects'>
                    <a className='noAFormatting' href='#projects'>
                        <h2>Projects</h2>
                    </a>
                    
                    <ul className='noUlFormatting navList'>
                        {info.projects.map((project, index) => {
                            return (
                                <li className="noAFormatting" key={index}>
                                    {
                                        project.icon && 
                                        <span className="material-symbols-outlined">
                                        {project.icon}
                                        </span>
                                    }
                                    <a href={"#" + project.name}>{project.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav> 
            </div>
        </div>
    );
};

export default FirstPage;