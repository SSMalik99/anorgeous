import React from "react";
import "../Style/footer.css"

const Footer = () => {
    return (
        <footer className="p-4 fixed-bottom d-flex justify-content-between">
            <div>Copyright©{new Date().getFullYear()} Annorgeous</div>
            <div><i className="fa-solid fa-trash"></i>Barrie, Ontario, Canada</div>
        </footer>
    )
}

export default Footer