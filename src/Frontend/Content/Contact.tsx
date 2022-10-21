import React, { useRef } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        emailjs.sendForm('', '', JSON.stringify(form.current), '').then(
            (result) => {
                console.log(result.text);
                alert('Email Sent Sucessfully!');
            },
            (error) => {
                console.log(error.text);
                alert('Email Sent Sucessfully!');
            }
        );

        e.target.reset();
    };
    return (
        <section>
            <div className="container">
            <h2>Contact Us</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-lg-8 col-12 mt-4">
                            <div className="row">
                                <div className="col-lg-6 col-12 mb-3">
                                    <label htmlFor="fullName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Full Name" required/>
                                </div>
                                <div className="col-lg-6 col-12 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="phone" className="form-control" id="phone" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discussion" className="form-label">Discussion</label>
                                    <textarea className="form-control" id="discussion" placeholder="Enter your queries here ..." required></textarea>
                                    </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
  
    )
}

export default Contact