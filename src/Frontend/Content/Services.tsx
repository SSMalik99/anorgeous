import React from "react";
import "../Style/service.css";
import backImage from "../../assets/main_bakc.jpeg";
import developmentIcon from "../../assets/development-icon.svg";
import bugIcon from "../../assets/bug.svg";
import paletteIcon from "../../assets/palette.svg";
import barChartIcon from "../../assets/bar-chart.svg";

const Services = () => {
  return (
    // <section className="frontImageContainer">
    //   <div className="container">
    //     <h1 className="text-center">Our Services</h1>
    //     <div className="services d-flex flex-md-row flex-column">
    //       <div className="card">
    //         <div className="card-body text-center">
    //           <i className="service-icon uil uil-programming-language"></i>
    //           <h5 className="card-title">UI/UX & DESIGN</h5>
    //           <p className="card-text mt-4">
    //             Kickass designs, customized branding, and show stopper websites,
    //             all designed to wow your customers.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="card">
    //         <div className="card-body text-center">
    //           <i className="service-icon uil uil-programming-language"></i>
    //           <h5 className="card-title">UI/UX & DESIGN</h5>
    //           <p className="card-text mt-4">
    //             Kickass designs, customized branding, and show stopper websites,
    //             all designed to wow your customers.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="card">
    //         <div className="card-body text-center">
    //           <i className="service-icon uil uil-programming-language"></i>
    //           <h5 className="card-title">UI/UX & DESIGN</h5>
    //           <p className="card-text mt-4">
    //             Kickass designs, customized branding, and show stopper websites,
    //             all designed to wow your customers.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="frontImageContainer">
      <div className="container service">
        <h2 className="text-center mt-3">Our Solutions</h2>
        <p className="text-center mt-4 w-100">
          With our solutions, we are commited to bring ongoing value to our
          customers.
        </p>
        <div className="item-container">
          <div className="item ">
            <div className="item-title developemnt d-flex justify-content-center">
              <span>Development</span>
              <img
                height="30"
                width="30"
                className="mt-2 mx-2"
                src={developmentIcon}
                alt="development"
              />
            </div>
            <div className="item-content mt-4">
              We buils Android and iOS apps, as well as websites in Personal,
              Business, Ecommerce sectors.
            </div>
          </div>

          <div className="item ">
            <div className="item-title design d-flex justify-content-center">
              <span>Design</span>
              <img
                height="30"
                width="30"
                className="mt-2 mx-2"
                src={paletteIcon}
                alt="development"
              />
            </div>
            <div className="item-content mt-4">
              We listen to our customers and convert their ideas into the
              working solutions.
            </div>
          </div>

          <div className="item ">
            <div className="item-title bug d-flex justify-content-center">
              <span>Software Testing</span>
              <img
                height="30"
                width="30"
                className="mt-2 mx-2"
                src={bugIcon}
                alt="development"
              />
            </div>
            <div className="item-content mt-4">
              We offer sophisticated and exhaustive Software Testing services,
              dedicated to persistently refining quality.
            </div>
          </div>

          <div className="item ">
            <div className="item-title data-analytics d-flex justify-content-center">
              <span>Big Data & Analytics</span>
              <img
                height="30"
                width="30"
                className="mx-2 mt-2"
                src={barChartIcon}
                alt="development"
              />
            </div>
            <div className="item-content mt-4">
              We use analytics solutions that help see you beyond the data.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
