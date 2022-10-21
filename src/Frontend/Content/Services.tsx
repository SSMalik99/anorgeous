import React from "react";
import "../Style/service.css"

const Services = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-center">Our Services</h1>
        <div className="mt-4 services d-flex flex-md-row flex-column">
          <div className="card">
            <div className="card-body text-center">
              <i className="service-icon uil uil-programming-language"></i>
              <h5 className="card-title">UI/UX & DESIGN</h5>
              <p className="card-text mt-4">
                Kickass designs, customized branding, and show stopper websites,
                all designed to wow your customers.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <i className="service-icon uil uil-programming-language"></i>
              <h5 className="card-title">UI/UX & DESIGN</h5>
              <p className="card-text mt-4">
                Kickass designs, customized branding, and show stopper websites,
                all designed to wow your customers.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <i className="service-icon uil uil-programming-language"></i>
              <h5 className="card-title">UI/UX & DESIGN</h5>
              <p className="card-text mt-4">
                Kickass designs, customized branding, and show stopper websites,
                all designed to wow your customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
