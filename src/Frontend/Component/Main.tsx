import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Content/Contact";
import Home from "../Content/Home";
import Services from "../Content/Services";
import Team from "../Content/Team";
import Work from "../Content/Work";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Style/main.css"

const Main = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        
        {/* Client side navigation */}
        <div className="main">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/team' element={<Team />} />
            <Route path='/work' element={<Work />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        </div>

        <Footer />
        </BrowserRouter>
    )
}

export default Main