import './App.css';
import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ExtraInfo from './components/ExtraInfo';

const App = () => (
  <div className="resume-container">
    <Header />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Certifications />
    <ExtraInfo />
  </div>
);

export default App;
