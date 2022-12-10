import React from "react";
import "../Style/work.css";
import iamopenSplash from "../../assets/iamopen_splash.png";
import iamopenMain from "../../assets/iamopen_main.png";
import iamopenProductDetails from "../../assets/iamopen_product_details.png";
import iamopenVideoTutorials from "../../assets/iamopen_video.png";
import iamopenLegal from "../../assets/iamopen_legal.png";
import iamopenRatings from "../../assets/iamopen_ratings_zoom.png";
import iamopenFavourite from "../../assets/iamopen_favourite.png";


const Work = () => {
    return (
        <div className="frontImageContainer">
            <div className="container work">

                {/* Intro description, Splash and Home Screenshot columns */}
                <div className="row p-5">
                <div className="col-md-6 left-content">
                        <h2 className="left-above-content text-center mt-3">IAMOPEN</h2>
                        <div className="left-below-content">
                            With <span className="app_name_content"> IAMOPEN </span> we aim to bring clarity into how to use<br/>
                             the newest technological solutions effectively and help avoid their <br/> 
                            misuse by providing a thorough guidance from early buyers. <br/>
                            <span className="app_name_content"> IAMOPEN </span> is also a platform to explore the latest inventions and companies to keep an eye on. 

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

                {/* Experience description with Product Details and Video tutorials Screenshot columns */}
                <div className="row p-5">
                <div className="col-md-6 left-content">
                <h2 className="left-above-content text-center mt-3">EXPERIENCE</h2>
                        <div className="left-below-content">
                        If you are the person who wants to avoid possible mistakes while using unfamiliar IoT or Software, there is a solution for you.<br/>
                        With our tutorials and guidelines from the professional researchers, you will obtain a good understanding of the newest IoT and Software solutions.<br/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className = "col-lg-6 pe-0">
                                <img 
                                    className="mt-2 mx-0 image-dimension"
                                    src={iamopenProductDetails} 
                                    alt="Iamopen Product Details Screen"/>
                            </div>
                            <div className = "col-lg-6 p-2 pt-0 ps-0">
                                <img
                                    className="mt-2 mx-1 image-dimension"
                                    src={iamopenVideoTutorials} alt="Iamopen Video Tutorials Screen"></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Precautions description with Legal Precautions Screenshot columns */}
                <div className="row p-5">
                <div className="col-md-6">
                        <div className="row">
                            <div className = "col-lg-6 pe-0">
                                <img 
                                    className="mt-2 mx-0 image-dimension"
                                    src={iamopenLegal} 
                                    alt="Iamopen Legal Screen"/>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 left-content">
                <h2 className="left-above-content text-center mt-3">KEEP IT SAFE</h2>
                        <div className="left-below-content">
                            Legal precautions are helpful to avoid legislation or security violations. The information provided on these pages conforms<br/>
                             with the lates HIPAA, PHI, ISO 27701, CCPA and other relevant standards. 
                        </div>
                    </div>
                </div>

                {/* Ratings description with Ratings zoomed in Screenshot columns */}
                <div className="row p-5">
                <div className="col-md-6 left-content">
                <h2 className="left-above-content text-center mt-3">RATING SYSTEM</h2>
                        <div className="left-below-content">
                            Ratings will help you understand how good or bad a particular<br/>
                             technology is. The ratings are based on the un-biased data from the early buyers, researchers, and testers.                        
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className = "col-lg-6 pe-0">
                                <img 
                                    className="mt-2 mx-0 image-dimension"
                                    src={iamopenRatings} 
                                    alt="Iamopen Ratings Screen"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* General and Favourite description with Favourite Screenshot columns */}
                <div className="row p-5">
                <div className="col-md-6">
                        <h2 className="left-above-content text-center mt-3">WHAT ELSE YOU CAN DO?</h2>
                        <div className="left-below-content">
                            We will cooperate with giant and small companies to keep a track of every potential newest invention or development. <br/>
                            Each company has a list of products that it has recently launched and that you might be interested in to check out. <br/>
                            You can save your favourite items to the Favourite page and get back to your choices later.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className = "col-lg-6 pe-0">
                                <img 
                                    className="mt-2 mx-0 image-dimension"
                                    src={iamopenFavourite} 
                                    alt="Iamopen Favourite Screen"/>
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