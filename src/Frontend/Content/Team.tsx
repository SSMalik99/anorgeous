import React from "react";
import Crausel from "../Component/Crausel";
import "../Style/team.css"


interface Member {
    id: any,
    name: string,
    image: string,
    small_desc: string
}

const teamArray : Array<any>= [
    {
        id: 1,
        name: "Lyubov",
        "image": "",
        "small_desc" : "Full Stack Develooper",
    },
    {
        id: 2,
        name: "Divya",
        "image": "",
        "small_desc" : "Full Stack Develooper",
    },
    {
        id: 3,
        name: "Rajvi",
        "image": "",
        "small_desc" : "Full Stack Develooper",
    },
    {
        id: 4,
        name: "Sijan",
        "image": "",
        "small_desc" : "Full Stack Develooper",
    }
] 


const reduceTeamCard = (member: Member) => {
    return (
        <div className="card">
            <img src={member.image} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{member.name}</h5>
            <p className="card-text">
                {member.small_desc}
            </p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    )
}


const Team = () => {
    return (

        // give image to the outer container
        <div className="frontImageContainer">

            {/* main container */}
            <div className="container p-4">

                <div className="relative">
                <div className="text-center main-heading">
                    Meet Our Team
                </div>

                <div className="text-center sub-content mt-3">
                We are a team of expert software engineers.<br/>
                We are all different and we come from different parts of the world. <br/>
                Yet we all share something that unites us all - innovation, commitment, and integrity. <br/>
                And we come together to join and create our company. <br/>
                We are its heart. 
                </div>




                {/* crausel code */}
                <div style={{
                    // minHeight:"500px",
                    // backgroundColor:"red"
                }}>
                    {/* <Crausel /> */}
                </div>





                {/* activity description */}
                <div className="row text-center mt-4 ">
                    
                    <div className="col-md-4 team-hobby-item">
                        <div><i className="bi fs-1 color-browny bi-cup-hot"></i></div>
                        <h4>Creativity</h4>
                        <div className="team-hobby-item-desc">
                        We are different and unique.<br/>
                        This is what helps us think out of the box.<br/>
                        We bring creative solutions that work.
                        </div>
                    </div>
                    

                    <div className="col-md-4 team-hobby-item">
                        <div><i className="bi color-navies fs-1 bi-globe"></i></div>
                        <h4>Worldwide</h4>
                        <div className="team-hobby-item-desc">
                            We are striving to solve the real<br/>
                            problems around the world by providing <br/>
                            state of the art solutions.<br/>
                        </div>
                    </div>

                    <div className="col-md-4 team-hobby-item">
                        <div><i  className="bi color-goldy bi-award fs-1"></i></div>
                        <h4>Quality First</h4>
                        <div className="team-hobby-item-desc">
                            In Anorgeous, quality, integrity, and passion <br/>
                            go first before writing each line of code. 
                        </div>
                    </div>
                    
                </div>

                {/* Contact us button */}
                <div className="text-center mt-5">
                    <button className="btn btn-lg btn-warning">Contact us</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Team