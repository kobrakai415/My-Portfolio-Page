import { useState } from 'react';
import './Navbar.css'


const Navbar = () => {

    const [selected, setSelected] = useState("home");

    return (
        <div className="navbar d-flex flex-row justify-content-center">


            <div className="d-flex flex-row " >
                <div onClick={() => setSelected("home")} className={"nav-links py-2  px-1 px-md-4 " + (selected === "home" ? "selected" : "")}>
                    <a href="#home"> Home </a>
                </div>

                <div onClick={() => setSelected("about")} className={"nav-links py-2  px-1 px-md-4 " + (selected === "about" ? "selected" : "")}>
                    <a href="#about"> About </a>
                </div>
                <div onClick={() => setSelected("skills")} className={"nav-links py-2  px-1 px-md-4 " + (selected === "skills" ? "selected" : "")}>
                    <a href="#skills"> Skills </a>
                </div>
                <div onClick={() => setSelected("projects")} className={"nav-links py-2  px-1 px-md-4 " + (selected === "projects" ? "selected" : "")}>

                    <a href="#projects"> Projects </a>
                </div>
                <div onClick={() => setSelected("contact")} className={"nav-links py-2  px-1 px-md-4 " + (selected === "contact" ? "selected" : "")}>

                    <a href="#contact"> Contact </a>
                </div>

            </div>

        </div>
    );
}

export default Navbar
