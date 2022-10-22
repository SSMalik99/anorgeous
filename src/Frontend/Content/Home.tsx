import React from "react";
import '../Style/home.css';
import landing from '../../assets/landing.jpeg';
// import bg from '../../assets/bg-image.jpg'
const Home = () => {
    return (
        <div className="container-fluid cont">
            <div className="row">
                <div className="col-lg-5">
                    <p className="text mt-6 px-5"> 
                        Gorgeous team thrilling results...
                    </p>
                    <p className="text1 mt-5 px-5">
                        We strive to create products that solve true problems
                    </p>
                    
                </div>
                <div className = "col-lg-6">
                   <img src={landing} alt="image"></img>
                </div>
            </div>
           
        </div>
    )
}

export default Home