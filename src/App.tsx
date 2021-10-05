import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Container } from 'react-bootstrap';
import Home from './Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import {BrowserRouter as Router} from "react-router-dom"


function App() {

  const [scrollSpyLocation, setScrollSpyLocation] = useState("home")

  return (
    <div className="App">
      <Router>
      <Navbar setLocation={location => setScrollSpyLocation(location)} hrefLoc={scrollSpyLocation} />
      <Container fluid >

        <Home setLocation={location => setScrollSpyLocation(location)} />
        <About setLocation={location => setScrollSpyLocation(location)} />
        <Projects setLocation={location => setScrollSpyLocation(location)} />
        <Contact setLocation={location => setScrollSpyLocation(location)} />

      </Container>
</Router>
    </div>
  );
}

export default App;
