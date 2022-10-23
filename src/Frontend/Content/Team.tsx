import { url } from "inspector";
import React, { useEffect, useState } from "react";
import Crausel from "../Component/Crausel";
import "../Style/team.css"
import saravjeet_singh from "../../assets/team/sarav.jpeg"
import MemberCard from "../Component/MemberCard";
import blank_image from "../../assets/team/blank_user.webp"

interface Member {
    id: any,
    name: string,
    image: string,
    title: string,
    desc : string
}

const teamArray : Array<Member>= [
    {
        id: 1,
        name: "Lyubov",
        "image": blank_image,
        "title" : "Full Stack Develooper",
        "desc" : "Project Manager"
    },
    {
        id: 2,
        name: "Divya",
        "image": blank_image,
        "title" : "Full Stack Develooper",
        "desc" : "Developer"
    },
    {
        id: 3,
        name: "Rajvi",
        "image": blank_image,
        "title" : "Full Stack Develooper",
        "desc" : "Lead Designer"
    },
    {
        id: 4,
        name: "Srijan",
        "image": blank_image,
        "title" : "Full Stack Develooper",
        "desc" : "Developer"
    },
    {
        id: 5,
        name: "Saravjeet Singh",
        "image": saravjeet_singh,
        "title" : "Full Stack Develooper",
        "desc" : "Senior Software engineer"
    }
] 

let currentIndex = Math.floor(Math.random() * teamArray.length)


const Team = () => {
    const [member, setMember] = useState(teamArray[currentIndex])
    
    // useEffect(() => {
    //     setMember(teamArray[currentIndex])
    // }, [])

    const changeTeamMember = (increase: Boolean) => {
        
        let arrayLength = teamArray.length
        if (increase) {
            currentIndex = currentIndex < arrayLength - 1 ? currentIndex + 1 : 0
        }else {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : teamArray.length - 1
        }
        
        setMember(teamArray[currentIndex])
    }

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
                    minHeight:"fit-content"
                }} className="mt-4 py-2">
                    
                    <div className="d-flex justify-content-around align-items-center">
                        <button className="btn" onClick={() => {changeTeamMember(false)}}>
                            <i className="bi fs-1 bi-arrow-left-circle-fill"></i>
                        </button>

                            <MemberCard  member={member} key={`close_key_${Math.random()}`} />

                        <button className="btn" onClick={() => {changeTeamMember(true)}}>
                            <i className="bi fs-1 bi-arrow-right-circle-fill"></i>
                        </button>
                    </div>
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