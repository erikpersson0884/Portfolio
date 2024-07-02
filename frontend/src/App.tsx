import './App.css';
import './Print.css';

import React, { useEffect, useState } from 'react';

import Header from './Components/Header/Header';
import FirstPage from './Components/FirstPage/FirstPage';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';

import info from './info.json';

function App() {

  return (
    <>
        <Header />
        <FirstPage className="section" />
        {info.projects.map((project, index) => (
            <Project className="section" key={index} {...project} />
        ))}

        <Footer />
    </>
  );
}

export default App;
