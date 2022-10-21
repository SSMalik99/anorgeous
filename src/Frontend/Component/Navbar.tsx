import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Style/navbar.css";

const Navbar = () => {
  return (
    <section className="mt-0">
      <div className="nav-container">
        <nav className="px-4 d-flex justify-content-between navbar navbar-expand-lg">
            <div className="brand">
                <NavLink className="nav-link" to={"/home"}>
                    <img height="45" width="45" src={logo} alt="logo"></img>
                </NavLink>
            </div>
            <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item mx-md-3">
                <NavLink className="nav-link" to={"/home"}>
                    Home
                </NavLink>
                </li>
                <li className="nav-item mx-md-3">
                <NavLink className={"nav-link"} to={"/team"}>
                    Team
                </NavLink>
                </li>
                <li className="nav-item mx-md-3">
                <NavLink className={"nav-link"} to={"/work"}>
                    Work
                </NavLink>
                </li>
                <li className="nav-item mx-md-3">
                <NavLink className={"nav-link"} to={"/services"}>
                    Services
                </NavLink>
                </li>
                <li className="nav-item mx-md-3">
                <NavLink className={"nav-link"} to={"/contact"}>
                    Contact Us
                </NavLink>
                </li>
            </ul>
            </div>

        </nav>
      </div>
    </section>
  );
};

export default Navbar;
