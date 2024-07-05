import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


import Header from './Components/Header/Header';
import FirstPage from './Components/FirstPage/FirstPage';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';

import ListApp from './Pages/list-app/list-app.tsx';

import './App.css';
import './Print.css';

import info from './info.json';



function App() {

    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>

                    <Route path="/" element= {
                        <>
                            <FirstPage className="section" />
                            {info.projects.map((project, index) => (
                                <Project className="section" key={index} {...project} />
                            ))}
                        </>

                    }></Route>

                    <Route path="/list-app" element={<ListApp />} />
                </Routes>


                <Footer />

          </BrowserRouter>
        </>
      );
  }

export default App;
