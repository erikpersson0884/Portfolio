import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            <BrowserRouter basename='/Portfolio/'>
                <Header />

                <ScrollToTop />
                <article className='mainContent'>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <FirstPage />
                                <section id="projects">
                                    {info.projects.map((project, index) => (
                                        <Project id={project.name} key={index} project={project} />
                                    ))}
                                </section>
                            </>
                        }></Route>

                        {info.projects.map((project, index) => (
                            <Route key={index} path={`/project/${project.name.toLowerCase()}`} element={<ProjectPage project={project} />} />
                        ))}

                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </article>
                {/* <Footer /> */}
            </BrowserRouter>
        </>
    );
}

export default App;
