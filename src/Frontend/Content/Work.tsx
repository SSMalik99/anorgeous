import React from "react";
import "../Style/work.css";
import iamopenSplash from "../../assets/iamopen_splash.png";
import iamopenMain from "../../assets/iamopen_main.png";


const Work = () => {
    return (
        <div className="frontImageContainer">
            <div className="container work">
                {/* Description and App Screenshot columns */}
                <div className="row p-5">

                    <div className="col-md-6 left-content">
                        <h2 className="left-above-content text-center mt-3">IAMOPEN</h2>
                        <div className="left-below-content">
                            With <span className="app_name_content"> IAMOPEN </span> we aim to bring clarity in how <br/>
                            to use the newest technological solutions <br/>
                            effectively and help avoid  their misuse <br/>
                            by providing  a thourough guidance from <br/>
                            early buyers.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className = "col-lg-6 pe-0">
                                <img 
                                    className="mt-2 mx-0 image-dimension"
                                    src={iamopenSplash} 
                                    alt="Iamopen Splash Screen"/>
                            </div>
                            <div className = "col-lg-6 p-2 pt-0 ps-0">
                                <img
                                    className="mt-2 mx-1 image-dimension"
                                    src={iamopenMain} alt="Iamopen Main Page"></img>
                            </div>
                        </div>
 

                    </div>

                </div>

                {/* <div style={{
                    // border:"2px solid black",
                    textAlign:"center"
                }}>
                   
                    <b>IAMOPEN</b> works in three stages.

                    <table>
                        <tbody>
                            <tr>
                                <td>Company Interaction.</td>
                                <td>adfhslkuhasodifb</td>
                            </tr>
                            <tr>
                                <td>Early Buyers.</td>
                                <td>adfhslkuhasodifb</td>
                            </tr>
                            <tr>
                                <td>End Users.</td>
                                <td>adfhslkuhasodifb</td>
                            </tr>
                        </tbody>

                    </table>
                </div> */}
            </div>
        </div>
    )
}

export default Work