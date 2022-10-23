import React from "react";
import "../Style/work.css";
import iamopenSplash from "../../assets/iamopen_splash.png";
import iamopenMain from "../../assets/iamopen_main.png";


const Work = () => {
    return (
        <div className="frontImageContainer">
            <div className="container work">
                {/* Description and App Screenshot columns */}
                <div className="row text-center">

                    <div className="col-md-6">
                    <h2 className="text-center mt-3">IAMOPEN</h2>
                        <div>
                            With IAMOPEN we aim to bring clarity in how
                            to use the newest technological solutions 
                            effectively and help avoid  their misuse 
                            by providing  a thourough guidance from 
                            early buyers.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex">
                            <div className = "col-lg-6">
                                <img 
                                    className="mt-2 mx-2 image-dimension"
                                    src={iamopenSplash} 
                                    alt="Iamopen Splash Screen"/>
                            </div>
                            <div className = "col-lg-6">
                                <img
                                    className="mt-2 mx-2 image-dimension"
                                    src={iamopenMain} alt="Iamopen Main Page"></img>
                            </div>
                        </div>
 

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work