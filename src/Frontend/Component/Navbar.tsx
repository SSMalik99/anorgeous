import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/home"}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} to={"/team"}>Team</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} to={"/work"}>Work</NavLink>    
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} to={"/services"}>Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} to={"/contact"}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar