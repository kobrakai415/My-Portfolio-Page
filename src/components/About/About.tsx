import React from 'react';
import { Row } from 'react-bootstrap';
import './About.css'


const About = () => {
    return (
        <Row id="about">
            <h3 className="sub-title">About</h3>

            <p>
                Hello my name is Kai!
            </p>

            <p>
                I am a MERN full stack web developer. Prior to pursuing a career in we developemnet, I was a finance manager at the UK government where I managed budgets of over £1bn developed funding models and administered payments to local authorities.

            </p>
            <p> I am passionate about fitness, problem solving and developing compelling full stack web applications!</p>


            <p>My tool box: </p>

            <div>

                <img src='https://img.shields.io/badge/React-00599C?style=for-the-badge&logo=react&logoColor=white' />
                <img src='https://img.shields.io/badge/JavaScript-ED8B00?style=for-the-badge&logo=javascript&logoColor=white' />
                <img src='https://img.shields.io/badge/MongoDB-14354C?style=for-the-badge&logo=mongodb&logoColor=white' />
                <img src='https://img.shields.io/badge/PostgreSQL-00000F?style=for-the-badge&logo=postgresql&logoColor=white' />
                <img src='https://img.shields.io/badge/CSS%20-%23F37626.svg?&style=for-the-badge&logo=CSS&logoColor=white' />
                <img src='https://img.shields.io/badge/html%20-%23150458.svg?&style=for-the-badge&logo=html&logoColor=white' />
                <img src='https://img.shields.io/badge/typescript%20-%23013243.svg?&style=for-the-badge&logo=typescript&logoColor=white' />
                <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
                <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
                <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
                <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />

            </div>

        </Row>
    );
}

export default About;
