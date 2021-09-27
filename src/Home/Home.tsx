import React from 'react';
import {Col } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (


        <div id="home" className="home mt-5 p-5 d-flex flex-column ">
            <h1 className="name text-center pt-4 pb-2">Kaiwan Kadir</h1>

            <div className="d-flex flex-column">

                <Col>
                    <p className="mb-0">Welcome to my portfolio.</p>
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid" src="/me.png" />
                    </div>
                </Col>
                <Col >
                <div className="mx-5 d-flex justify-content-center py-5">
                    <p style={{width: "500px"}}>I make full stack web applications and have a background in central government finance, having worked in whitehall for 4 years!</p>
                </div>
                </Col>
            </div>

        </div>

    );
}

export default Home;
