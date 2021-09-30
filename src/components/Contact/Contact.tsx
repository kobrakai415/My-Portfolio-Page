import emailjs from 'emailjs-com';
import { ChangeEvent } from 'react';
import { Row, Spinner, Toast, Col } from 'react-bootstrap';
import { useState } from 'react';
import './Contact.css'


const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)


    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        setLoading(true)
        console.log("true")
        e.preventDefault()

        console.log(e.target)
        await emailjs.sendForm('service_w73s4ws', 'template_s0oo0pf', e.target, 'user_YvWKkW6ZyZFwif9MIWZYH')
            .then((result) => {
                setSuccess(true)
                console.log(result);
            }, (error) => {
                alert("An error occurred!")
                console.log(error.text);
            });
        e.target.reset()
        setLoading(false)
        console.log("false")

    }


    return (


        <Row id="contact">
            <h3 className="sub-title"> Contact </h3>
            <div className="d-flex contact-links justify-content-center">
                <a className="text-decoration-none" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kaiwan-kadir">
                    <svg className="m-3" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 382 382" >
                        <path fill="#0077B7" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z" />

                    </svg>
                </a>
                <a className="text-decoration-none" target="_blank" rel="noreferrer" href="https://github.com/kobrakai415">
                    <svg className="m-3" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 50 50" >
                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                    </svg>
                </a>
                <a className="text-decoration-none" href="mailto:kai.kadir@hotmail.co.uk" target="_blank" rel="noreferrer">
                    <svg className="m-3" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#64B5F6" d="M0,192l246.528,156.896c2.816,2.08,6.144,3.104,9.472,3.104s6.656-1.024,9.472-3.104L512,192  L265.6,3.2c-5.696-4.256-13.504-4.256-19.2,0L0,192z" />
                        <path fill="#ECEFF1" d="M416,0H96C78.368,0,64,14.368,64,32v352c0,8.832,7.168,16,16,16h352c8.832,0,16-7.168,16-16V32  C448,14.368,433.664,0,416,0z" />
                        <g>
                            <path fill="#90A4AE" d="M144,96h224c8.832,0,16-7.168,16-16s-7.168-16-16-16H144c-8.832,0-16,7.168-16,16S135.168,96,144,96   z" />
                            <path fill="#90A4AE" d="M368,128H144c-8.832,0-16,7.168-16,16s7.168,16,16,16h224c8.832,0,16-7.168,16-16   S376.832,128,368,128z" />
                            <path fill="#90A4AE" d="M272,192H144c-8.832,0-16,7.168-16,16s7.168,16,16,16h128c8.832,0,16-7.168,16-16   S280.832,192,272,192z" />
                        </g>
                        <path fill="#1E88E5" d="M265.472,348.896c-2.816,2.08-6.144,3.104-9.472,3.104s-6.656-1.024-9.472-3.104L0,192v288  c0,17.664,14.336,32,32,32h448c17.664,0,32-14.336,32-32V192L265.472,348.896z" />
                        <path fill="#2196F3" d="M480,512H32c-17.952,0-32-14.048-32-32c0-5.088,2.432-9.888,6.528-12.896l240-160  c2.816-2.08,6.144-3.104,9.472-3.104s6.656,1.024,9.472,3.104l240,160C509.568,470.112,512,474.912,512,480  C512,497.952,497.952,512,480,512z" />

                    </svg>
                </a>
            </div>




            <Col xs={12} className="position-relative">
                <div className="d-flex justify-content-center">
                    <form className="contact-form d-flex flex-column justify-content-center p-4 mx-3" onSubmit={handleSubmit}>
                        <div className="p-3 form-head">
                        <h1 >Contact me</h1>
                            </div>
                        <div className="form-group p-3">
                            <strong>Your Name * </strong>
                            <input required type="text" className="form-control mt-2" placeholder="Enter your name" name="name" />
                        </div>
                        <div className="form-group pt-2 p-3">
                            <strong>Your Email * </strong>
                            <input required type="email" className="form-control mt-2" placeholder="Enter your email address" name="email" />
                        </div>
                        <div className="form-group pt-2 p-3">
                            <strong>Your message * </strong>

                            <textarea className="form-control mt-2" id="" cols={30} rows={8} placeholder="Enter your message" name="message"></textarea>
                        </div>
                        <div className="pt-3 p-3 mx-auto">

                            {loading ? <>
                                <Spinner animation="grow" variant="primary" />
                                <Spinner animation="grow" variant="primary" />
                                <Spinner animation="grow" variant="primary" />
                            </>
                                : <input required type="submit" disabled={loading} className="btn " value="Send Message" />
                            }
                        </div>
                    </form>
                </div>

                <Toast
                    className="slide-in-top "
                    show={success} onClose={() => setSuccess(false)}>
                    <Toast.Header>

                        <strong className="me-auto">Server message!</strong>

                    </Toast.Header>
                    <Toast.Body> Email sent successfuly!</Toast.Body>
                </Toast>



                <div className="d-flex justify-content-start pt-5 pb-1" >
                    <img className="img-fluid" src="/me4.png" alt="me" />
                </div>
            </Col>





        </Row>
    );
}

export default Contact;
