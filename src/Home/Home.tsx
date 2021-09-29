import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (

        <Row>

            <div id="home" className="home p-5 d-flex flex-column ">
                <h1 className="name text-center">Kaiwan Kadir</h1>

                <div className="d-flex flex-column">

                    <div>
                        <p className="mb-0">Welcome to my portfolio.</p>
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src="/me.png" />
                        </div>
                    </div>
                    <div >
                        <div className="mx-5 d-flex justify-content-center py-5">
                            <p style={{ width: "500px" }}>I make full stack web applications and have a background in central government finance, having worked in whitehall for 4 years!</p>
                        </div>
                    </div>
                </div>

            </div>

        </Row>
    );
}

export default Home;
