import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import './About.css'


const About = (props: IScrollSpy) => {
    const { setLocation } = props
    return (
        <>
            <Row id="about" className="pt-5">


                <Col xs={12}>
                    <div className="text-class p-2">
                        <Waypoint onEnter={() => setLocation("about")} />

                        <h3 className="sub-title">About</h3>

                        <p>
                            Hello my name is Kai!
                        </p>

                        <p>
                            I am a MERN full stack web developer. Prior to pursuing a career in web developemnet,
                            I was a finance manager at the UK government where I managed budgets of over £1bn,
                            developed funding models, and administered million pound payments to local authorities.
                            Whilst I excelled in this enviornment, My ambition along with untameable exuberance has left me with a void in my current and previous roles I have yet to quench.
                        </p>

                        <p>
                            From experience and self-realisations of ability, I have concluded that I require to be in a setting were achievements are uncapped; the purpose is gratifying and stimulation progressive.
                            Therefore, I believe a career in web development is the career for me. I have accrued and naturally possess an eclectic skill set. I am able to research and source credible information through
                            various means to analysing information off cross-sets of data to reach a sound decision.
                            I am a team player whom has managing prowess to enthuse as well as to communicate with clarity and efficiency.
                            Finally, I possess soft skills which allow me to connect efficiently with people from all walks of life verbally and in writing.
                        </p>

                        <p> I am passionate about fitness, problem solving and developing compelling full stack web applications!</p>


                        <h3 className="sub-title2">My tool box
                            <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24">
                                <g><g><g>
                                    <path d="m470.073 502.312h-428.146c-19.013 0-34.427-15.413-34.427-34.427v-296.11c0-19.013 15.413-34.427 34.427-34.427h428.146c19.013 0 34.427 15.413 34.427 34.427v296.11c0 19.014-15.413 34.427-34.427 34.427z" fill="#fbc980" />
                                    <path d="m153.298 85.375c8.492 5.791 13.313 15.632 13.313 25.91v367.657h58.956v-368.345c0-10.1 4.617-19.794 12.828-25.675 10.993-7.874 16.181-21.725 12.868-35.005l-8.324-33.374c-1.001-4.015-4.607-6.832-8.745-6.832h-5.716c-7.521 0-13.617 6.097-13.617 13.618v23.96c0 25.013-38.647 24.925-38.647 1.216v-24.906c0-7.51-5.969-13.824-13.48-13.886-7.562-.063-14.172 5.065-16 12.391l-6.937 27.813c-3.374 13.534 2.075 27.666 13.501 35.458z" fill="#c7e0e5" />
                                    <path d="m470.073 137.349h-65.333c19.013 0 34.427 15.413 34.427 34.427v296.11c0 19.013-15.413 34.427-34.427 34.427h65.333c19.013 0 34.427-15.414 34.427-34.427v-296.11c0-19.014-15.413-34.427-34.427-34.427z" fill="#faae43" /><g><g><path d="m456.571 179.124v-119.68c0-4.438-1.926-8.657-5.279-11.565l-43.225-37.487c-1.839-1.595-4.701-.289-4.701 2.146v166.587h53.205z" fill="#f1faff" /><g><path d="m451.292 47.878-12.996-11.271c.563 2.47.87 5.037.87 7.677v134.839h17.404v-119.679c.001-4.438-1.925-8.658-5.278-11.566z" fill="#dcf5ff" /></g><path d="m403.366 12.537v34.935l53.205 46.143v-34.171c0-4.438-1.926-8.657-5.279-11.565l-43.225-37.487c-1.839-1.596-4.701-.29-4.701 2.145z" fill="#dcf5ff" /><path d="m451.292 47.878-12.996-11.271c.563 2.47.87 5.037.87 7.677v34.236l17.404 15.094v-34.17c.001-4.438-1.925-8.658-5.278-11.566z" fill="#c7eefb" /><g><g><g>
                                        <path d="m447.121 478.942h-34.305c-8.354 0-15.127-6.773-15.127-15.127v-327.127c0-5.989 4.855-10.845 10.845-10.845h42.869c5.989 0 10.845 4.855 10.845 10.845v327.127c0 8.355-6.773 15.127-15.127 15.127z" fill="#fa8084" /><path d="m438.985 478.942h8.135c8.354 0 15.127-6.773 15.127-15.127v-327.127c0-5.989-4.855-10.845-10.845-10.845h-12.236v349.552c.001 1.198-.061 2.381-.181 3.547z" fill="#f8636f" />
                                    </g></g></g></g><g><g><g><g><path d="m101.101 113.088 9-4.969c0-4.439-.576-8.116-1.715-12.407l-21.373-80.569c-1.928-7.269-12.244-7.269-14.172 0l-21.374 80.569c-1.138 4.291-1.715 7.968-1.715 12.407l9 4.969z" fill="#fdf3c4" /><path d="m79.927 478.942c-16.665 0-30.174-13.509-30.174-30.174v-340.649h60.349v340.649c-.001 16.665-13.511 30.174-30.175 30.174z" fill="#62d8f9" /></g></g></g></g><g><g><path d="m298.335 58.928h38.609v275.643h-38.609z" fill="#eff3f5" /><path d="m344.59 65.979-7.646 14.778h-38.609l-7.646-14.778c-1.902-3.676-2.339-7.936-1.223-11.922l10.401-37.155c1.194-4.264 5.08-7.212 9.508-7.212h16.528c4.428 0 8.315 2.948 9.508 7.212l10.401 37.155c1.117 3.986.68 8.246-1.222 11.922z" fill="#daeaef" /><path d="m317.639 478.942c-18.223 0-32.995-14.772-32.995-32.995v-203.433h65.99v203.433c0 18.223-14.772 32.995-32.995 32.995z" fill="#cbee9a" /></g>
                                            <path d="m287.987 251.088h59.306c8.883 0 16.085-7.201 16.085-16.085 0-8.883-7.201-16.085-16.085-16.085h-59.306c-8.883 0-16.085 7.201-16.085 16.085 0 8.883 7.201 16.085 16.085 16.085z" fill="#b7e86b" /></g></g>
                                    <path d="m7.5 307.734v160.151c0 19.013 15.413 34.427 34.427 34.427h428.146c19.013 0 34.427-15.413 34.427-34.427v-160.151z" fill="#faae43" />
                                    <path d="m439.167 307.734v160.151c0 19.013-15.413 34.427-34.427 34.427h65.333c19.013 0 34.427-15.414 34.427-34.427v-160.151z" fill="#f9a316" /></g>
                                    <path d="m72.84 15.143-11.477 43.263h37.127l-11.477-43.263c-1.928-7.269-12.244-7.269-14.173 0z" fill="#7a9eae" /></g><g><path d="m342.089 378.815h-172.178c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h172.179c4.142 0 7.5-3.357 7.5-7.5s-3.359-7.5-7.501-7.5z" />
                                        <path d="m342.089 416.231h-172.178c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h172.179c4.142 0 7.5-3.357 7.5-7.5s-3.359-7.5-7.501-7.5z" /><path d="m195.531 132.502c-4.142 0-7.5 3.357-7.5 7.5v125.21c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-125.21c0-4.143-3.358-7.5-7.5-7.5z" /><path d="m504.5 376.282c4.142 0 7.5-3.357 7.5-7.5v-197.007c0-23.118-18.808-41.927-41.927-41.927h-1.662c-.983-2.436-2.473-4.608-4.341-6.396v-64.008c0-6.615-2.866-12.896-7.864-17.231l-43.226-37.488c-6.658-5.778-17.115-1.058-17.115 7.812v110.915c-1.867 1.788-3.358 3.961-4.341 6.396h-47.081v-47.266c3.923-9.483 12.268-17.415 8.591-30.547l-10.4-37.155c-2.092-7.472-8.972-12.689-16.73-12.689h-16.528c-7.759 0-14.639 5.218-16.73 12.69l-10.401 37.154c-1.633 5.833-1 12.01 1.784 17.39l6.807 13.157v47.266h-57.767v-19.251c0-7.911 3.625-15.229 9.696-19.578 13.648-9.777 19.841-26.623 15.777-42.918l-8.324-33.372c-1.838-7.37-8.426-12.518-16.021-12.518h-5.717c-11.644 0-21.117 9.474-21.117 21.118v23.96c0 15.054-23.647 14.968-23.647 1.215v-24.905c0-11.696-9.383-21.29-20.917-21.387-.067 0-.134-.001-.202-.001-10.979 0-20.476 7.408-23.136 18.076l-6.938 27.813c-4.104 16.452 2.548 33.922 16.552 43.471 6.286 4.286 10.039 11.655 10.039 19.713v18.563h-41.511v-21.729c0-4.852-.588-9.138-1.965-14.33l-21.376-80.569c-1.75-6.597-7.511-11.028-14.335-11.028s-12.585 4.432-14.335 11.028l-21.375 80.57c-1.377 5.192-1.965 9.479-1.965 14.33v21.729h-.326c-23.118 0-41.926 18.809-41.926 41.927v296.11c0 23.118 18.808 41.927 41.927 41.927h428.146c23.119 0 41.927-18.809 41.927-41.927v-64.037c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v64.037c0 14.848-12.079 26.927-26.927 26.927h-428.146c-14.848 0-26.927-12.079-26.927-26.927v-152.65h482v53.547c0 4.142 3.358 7.5 7.5 7.5zm-424.571-358.593 8.812 33.217h-17.626zm-12.794 48.217h25.585c8.806 33.295 8.627 32.28 9.123 34.713h-43.833c.501-2.453.344-1.517 9.125-34.713zm35.466 234.329h-45.349v-84.648c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v84.648h-27.252v-128.46c0-14.848 12.079-26.927 26.927-26.927h.326v35.672c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-64.901h45.348zm56.511 0h-41.511v-155.387h41.511zm137.576-244.156 10.401-37.153c.286-1.021 1.226-1.734 2.286-1.734h16.528c1.06 0 2 .713 2.286 1.733l10.401 37.154c.606 2.165.371 4.457-.662 6.454l-5.549 10.725h-29.481l-5.549-10.725c-1.032-1.997-1.267-4.289-.661-6.454zm32.756 32.178v123.16h-23.609v-123.16zm-111.376 22.34v189.638h-43.957v-188.95c0-13.021-6.201-25.023-16.588-32.105-8.841-6.028-13.04-17.06-10.449-27.447l6.938-27.814c.987-3.958 4.511-6.706 8.585-6.706.025 0 .05 0 .075.001 3.332.027 6.042 2.893 6.042 6.387v24.905c0 33.691 53.647 33.751 53.647-1.215v-23.961c0-3.374 2.744-6.118 6.117-6.118h5.717c.695 0 1.299.472 1.467 1.147l8.324 33.373c2.565 10.286-1.344 20.922-9.958 27.093-9.993 7.158-15.96 19.036-15.96 31.772zm59.077 189.638h-44.076v-155.387h57.767v66.569h-2.848c-13.005 0-23.585 10.58-23.585 23.585 0 9.097 5.18 17.002 12.743 20.934v44.299zm65.989 0h-50.99v-41.647h50.99zm4.158-56.648h-59.305c-4.734 0-8.585-3.852-8.585-8.585s3.851-8.585 8.585-8.585h59.305c4.734 0 8.585 3.852 8.585 8.585s-3.851 8.585-8.585 8.585zm42.897 56.648h-32.055v-44.298c7.562-3.933 12.743-11.838 12.743-20.934 0-13.005-10.58-23.585-23.585-23.585h-2.848v-66.569h45.745zm20.677-277.489 35.512 30.798c1.711 1.485 2.693 3.636 2.693 5.9v17.738l-38.205-33.134zm0 41.158 38.205 33.134v21.306h-38.205zm43.882 236.331h-49.559v-163.547c0-1.845 1.5-3.345 3.345-3.345h42.869c6.487 0 1.858 1.524 3.345 166.892zm15 0v-155.387h.326c14.848 0 26.927 12.079 26.927 26.927v128.46z" />
                                    </g></g></svg>
                        </h3>

                        <div>

                            <img className="p-1" alt="logo" src='https://img.shields.io/badge/html%20-%23150458.svg?&style=for-the-badge&logo=html&logoColor=white' />
                            <img className="p-1" alt="logo" src='https://img.shields.io/badge/CSS%20-%23F37626.svg?&style=for-the-badge&logo=CSS&logoColor=white' />
                            <img className="p-1" alt="logo" src='https://img.shields.io/badge/JavaScript-ED8B00?style=for-the-badge&logo=javascript&logoColor=white' />
                            <img className="p-1" alt="logo" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
                            <img className="p-1" alt="logo" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
                            <img className="p-1" alt="logo" src='https://img.shields.io/badge/MongoDB-14354C?style=for-the-badge&logo=mongodb&logoColor=white' />
                            <img className="p-1" alt="logo" src='https://img.shields.io/badge/PostgreSQL-00000F?style=for-the-badge&logo=postgresql&logoColor=white' />
                            <img className="p-1" alt="logo" src='https://img.shields.io/badge/React-00599C?style=for-the-badge&logo=react&logoColor=white' />
                            <img className="p-1" alt="logo" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
                            <img className="p-1" alt="logo" src='https://img.shields.io/badge/typescript%20-%23013243.svg?&style=for-the-badge&logo=typescript&logoColor=white' />
                            <img className="p-1" alt="logo" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
                            <img className="p-1" alt="logo" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />

                        </div>

                    </div>
                </Col>
            </Row>
        </>
    );
}

export default About;
