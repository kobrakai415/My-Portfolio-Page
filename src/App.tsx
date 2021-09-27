import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home/Home';
import Projects from './components/Projects/Projects';


function App(props: IInterface) {
  const { type, children } = props
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Container >
          <Home />
          <Projects />
        </Container>
      </Router>
    </div>
  );
}

export default App;
