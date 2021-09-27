import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Project.css'

const Projects = () => {
    return (
        <Row id="projects">

            <h3>My Projects</h3>
            <Col xs={12} md={6}>
                <div className="img-container m-3">
                    <img className="img-fluid w-100" src="/stockbook.png" alt="project" />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="img-container m-3">
                    <img className="img-fluid w-100" src="https://via.placeholder.com/600x350" alt="project" />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="img-container m-3">
                    <img className="img-fluid w-100" src="https://via.placeholder.com/600x350" alt="project" />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="img-container m-3">
                    <img className="img-fluid w-100" src="https://via.placeholder.com/600x350" alt="project" />
                </div>
            </Col>
        </Row>
    );
}

export default Projects;
