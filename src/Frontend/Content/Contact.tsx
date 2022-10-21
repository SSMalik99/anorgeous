import React from "react";

const Contact = () => {
    return (
        <section>
            <div className="container">
            <h2>Contact Us</h2>
                    <div className="row">
                        <div className="col-lg-8 col-12 mt-4">
                            <div className="row">
                                <div className="col-lg-6 col-12 mb-3">
                                    <label htmlFor="fullName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Full Name"/>
                                </div>
                                <div className="col-lg-6 col-12 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="phone" className="form-control" id="phone" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discussion" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="discussion"></textarea>
                                    </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
  
    )
}

export default Contact