import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container >
          <Home />
          <About />
          <Projects />
        </Container>
      </Router>
    </div>
  );
}

export default App;
