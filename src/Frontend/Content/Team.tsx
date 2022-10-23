import { url } from "inspector";
import React, { useEffect, useState } from "react";
import Crausel from "../Component/Crausel";
import "../Style/team.css"
import saravjeet_singh from "../../assets/team/sarav.jpeg"
import MemberCard from "../Component/MemberCard";
import rajvi from "../../assets/team/rajvi.jpeg";
import riddhi from "../../assets/team/rdihi.jpeg";
import srijan from "../../assets/team/srijan.jpeg"
import blank_image from "../../assets/team/blank_user.webp"
import lyubov from "../../assets/team/lyubov.jpeg"
interface Member {
    id: any,
    name: string,
    image: string,
    title: string,
    desc : string,
    linkdin : string,
    stackoverflow : string,
    github : string

}

const teamArray : Array<Member>= [
    {
        id: 1,
        name: "Lyubov",
        "image": lyubov,
        "title" : "Full Stack Develooper",
        "desc" : `Jack of all, master of none.
        Currently a Cyber Security Analyst at Super Dispatch, with over 4 years prior experience in software QA Engineering.`,
        "linkdin" : "https://www.linkedin.com/in/lyubov-korovina/",
        "stackoverflow" : "https://stackoverflow.com/users/10021852/lyu-ko",
        github : "https://github.com/LyubovKorovina"
    },
    {
        id: 2,
        name: "Divya",
        "image": riddhi,
        "title" : "Software Engineer",
        "desc" : "Curious human being with good knowledge of Frontend and backend technologies.",
        "linkdin" : "http://www.linkedin.com/in/divya-bhamerkar-709216215",
        "stackoverflow" : "https://stackoverflow.com/users/17056514/riddhi",
        github : "https://github.com/Riddhi1622"
    },
    {
        id: 3,
        name: "Rajvi",
        "image": rajvi,
        "title" : "Full Stack Develooper",
        "desc" : "Professional designer with good knowledge of Frontend and backend technologies.",
        "linkdin" : "https://www.linkedin.com/in/saravjeet-singh-b05299208/",
        "stackoverflow" : "https://stackoverflow.com/users/13733759/saravjeet-singh",
        github : "https://github.com/LyubovKorovina"
    },
    {
        id: 4,
        name: "Srijan",
        "image": srijan,
        "title" : "Full Stack Develooper",
        "desc" : "Experienced FullStack Developer with a demonstrated history of building web applications. Ability to learn and implement new technologies quickly. Strong engineering professional skilled in Angular, C#, Python, Javascript, HTML, SCSS.",
        "linkdin" : "https://www.linkedin.com/in/srijan-shrestha/",
        "stackoverflow" : "https://stackoverflow.com",
        github : "https://github.com/srijan-shrestha"
    },
    {
        id: 5,
        name: "Saravjeet Singh",
        "image": saravjeet_singh,
        "title" : "Full Stack Develooper",
        "desc" : "Experienced PHP Developer with a demonstrated history of working in the computer software industry. Skilled in Python (Programming Language), Go, PHP, Problem Solving, and JavaScript.",
        "linkdin" : "https://www.linkedin.com/in/saravjeet-singh-b05299208/",
        "stackoverflow" : "https://stackoverflow.com/users/13733759/saravjeet-singh",
        github : "https://github.com/SSMalik99"
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