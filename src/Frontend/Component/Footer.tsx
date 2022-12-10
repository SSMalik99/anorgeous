import React from "react";
import "../Style/footer.css";

const Footer = () => {
  
  return (
    <footer  
     
      className={`px-4 footerFinalAlignment d-lg-flex d-xl-flex d-sm-flex d-xs-inline justify-content-between bottom-fixed align-items-center`}>
      <div>
        Copyright©{new Date().getFullYear()} Anorgeous
      </div>
      <div>
        <div className="d-flex align-items-center bottom-0">
            {/* <a 
                href="#" className="text-decoration-none me-3 text-black h">
                    {"Term & Conditions"} 
            </a> 
            <span>|</span> */}
            <a 
                href="#" 
                className="text-decoration-none mx-3 text-black"> 
                {" Privacy Policy"} 
                
            </a>
            <span>|</span>
            <a 
                href="#" 
                className="text-decoration-none mx-3 text-black"> 
                {" Site Map "}
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

