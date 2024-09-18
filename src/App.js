import React from 'react';
import Hero from './components/Hero';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;