import { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import './Navbar.css';

const Navbar = (props: IScrollSpy & RouteComponentProps) => {
    const {hrefLoc, history} = props

    const isSelected=(comparator:string)=>{
        if (hrefLoc === comparator) return "selected"
        return ""
    }

    useEffect(()=>{
        history.replace(`#${hrefLoc}`)
    }, [hrefLoc, history])
    

    return (
        <div id="my-navbar" className="my-navbar d-flex flex-row justify-content-center align-items-center">


         
                <a href="#home" className={"py-2 px-1 mx-1 px-md-4 " + isSelected("home")} > Home </a>

                <a href="#about" className={" py-2 px-1 mx-1 px-md-4 "+ isSelected("about")} > About </a>

                <a href="#projects" className={"py-2 px-1 mx-1 px-md-4 "+ isSelected("projects")} > Projects </a>

                <a href="#contact" className={"py-2 px-1 mx-1 px-md-4 "+ isSelected("contact")} > Contact </a>


        </div>
    );
}

export default withRouter(Navbar)
