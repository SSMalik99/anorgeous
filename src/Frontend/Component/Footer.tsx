import React from "react";
import "../Style/footer.css";

const Footer = () => {
  return (
    <footer className="p-4 d-flex justify-content-between flex-column flex-sm-row">
      <div>Copyright©{new Date().getFullYear()} Annorgeous</div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
            <a 
                href="#" className="text-decoration-none text-black h">
                    {"Term & Conditions |  "} 
            </a> 
            
            <a 
                href="#" 
                className="text-decoration-none text-black"> 
                {" Privacy Policy | "} 
                
            </a>

            <a 
                href="#" 
                className="text-decoration-none text-black"> 
                {" Site Map "}
            </a>
        </div>
        {/* <span>
          <i className="uil uil-linkedin px-2 icon"></i>
          <i className="uil uil-facebook px-2 icon"></i>
          <i className="uil uil-instagram px-2 icon"></i>
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
