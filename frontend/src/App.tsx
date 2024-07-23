import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

import Header from './Components/Header/Header';
import FirstPage from './Components/FirstPage/FirstPage';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
import ProjectPage from './Components/ProjectPage/ProjectPage';

import Contact from './Pages/Contact/Contact.tsx';


import './App.css';
import './Print.css';

import info from './info.json';


function App() {

    return (
        <>
            <BrowserRouter>
            <ScrollToTop /> 
                <Header />

                <Routes>
                    <Route path="/" element= {
                        <article>
                            <FirstPage />

                            <section id="projects">
                                {info.projects.map((project, index) => (
                                    <Project id={project.name} key={index} project={project} />
                                ))}
                            </section>


                            <Footer />
                        </article>

                    }></Route>


                    {info.projects.map((project, index) => (
                        <Route key={index} path={`/project/${project.name.toLowerCase()}`} element={<ProjectPage project={project} />} />
                    ))}


                    <Route path="/contact" element={
                        <>
                            <Contact />
                        </>
                    } />
                </Routes>
                    
          </BrowserRouter>
        </>
      );
  }

export default App;
