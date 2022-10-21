import React from "react";
import "../Style/footer.css"

const Footer = () => {
    return (
        <footer className="p-4 fixed-bottom d-flex justify-content-between flex-column flex-sm-row">
            <div>Copyright©{new Date().getFullYear()} Annorgeous</div>
            <div><i className='uil uil-location-point'></i> Barrie, Ontario, Canada
            <span className="px-2">|</span>
            <span>
                <i className='uil uil-linkedin px-2 icon'></i> 
                <i className='uil uil-facebook px-2 icon'></i> 
                <i className='uil uil-instagram px-2 icon'></i> 
            </span></div>
        </footer>
    )
}

export default Footer