import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (

        <Row id="home" >
            <Col xs={12}>
                <div className="home p-2 p-md-5  ">
                    <h1 className="name text-center">Kaiwan Kadir</h1>

                    <div className="text-class">
                        <p className="mb-0 text-center">Welcome to my portfolio.</p>
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src="/me.png" alt="me" />
                        </div>
                        <p className="py-2 py-md-5">I make full stack web applications and have a background in central government finance, having worked in whitehall for 4 years!</p>
                    </div>

                </div>

            </Col>
        </Row>
    );
}

export default Home;
