import React from "react";
import '../Style/home.css';
import landing from '../../assets/landing.jpeg';
import { useNavigate } from "react-router-dom";
// import bg from '../../assets/bg-image.jpg'
const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="frontImageContainer" style={{
            backgroundColor: "#F8F9FA"
        }}>
            <div className="row cont">
                <div className="col-md-5">
                    <p className="text mt-6 px-5"> 
                        Gorgeous team thrilling results...
                    </p>
                    <p className="text1 mt-5 px-5">
                        We strive to create products that solve true problems
                    </p>
                    
                    <div className="d-grid ms-5  mt-4 ">
                        <button onClick={() => {
                            navigate('/contact')
                        }} style={
                            {
                                width:"60%"
                            }
                        }
                            className="btn btn-streched btn-warning .small fw-bold btn-lg"><small>{`Contact us`} 
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 256 256" id="Flat">
                                <path d="M224.48535,136.48535l-72,72a12.0001,12.0001,0,0,1-16.9707-16.9707L187.0293,140H40a12,12,0,0,1,0-24H187.0293L135.51465,64.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l72,72A11.99975,11.99975,0,0,1,224.48535,136.48535Z"/>
                                </svg>
                            </span>
                            </small>
                        </button>
                        </div>
                    
                </div>
                
                <div className="col-md-6">
                   <img src={landing} className="img-fluid h-100" alt="image"></img>
                </div>
            </div>

            {/* <div className="">
                THis is ourt main page trialing
            </div> */}
           
        </div>
    )
}

export default Home