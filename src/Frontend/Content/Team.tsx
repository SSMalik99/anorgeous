import React from "react";


const Team = () => {
    return (

        // give image to the outer container
        <div className="frontImageContainer">

            {/* main container */}
            <div className="container">

                <div className="text-center">
                    Meet Our Team
                </div>

                <div className="text-center">
                We are a team of expert software engineers.
                We are all different and we come from different parts of the world. 
                Yet we all share something that unites us all - innovation, commitment, and integrity. 
                And we come together to join and create our company. 
                We are its heart. 
                </div>

                {/* crausel code */}
                <div>

                </div>


                {/* activity description */}
                <div className="row text-center">
                    <div className="col-md-4">creativity</div>
                    <div className="col-md-4">Worldwide</div>
                    <div className="col-md-4">Quality First</div>
                </div>

                {/* Contact us button */}
                <div className="text-center">
                    <button className="btn btn-lg btn-warning">Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Team