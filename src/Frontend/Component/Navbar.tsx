import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Style/navbar.css";


const Navbar = () => {

    
  return (
    <div className="nav-container background-nav">
      <nav className="px-4 d-flex justify-content-between navbar navbar-expand-lg container-fluid">
        
        <div className="brand">
          <NavLink className="nav-link" to={"/home"}>
            <img height="45" width="45" src={logo} alt="logo"></img>
          </NavLink>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
       
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse justify-content-end"} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-md-3">
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <NavLink className={"nav-link"} to={"/team"}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <NavLink className={"nav-link"} to={"/work"}>
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <NavLink className={"nav-link"} to={"/services"}>
                Solutions
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
  );
};



export default Navbar;
