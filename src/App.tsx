import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Container } from 'react-bootstrap';
import Home from './Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <div className="App">

      <Navbar />
      <Container fluid >
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>

    </div>
  );
}

export default App;
