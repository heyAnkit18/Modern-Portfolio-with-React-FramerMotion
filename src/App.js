import React from 'react';
import Hero from './components/Hero';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
    </div>
  );
}

export default App;