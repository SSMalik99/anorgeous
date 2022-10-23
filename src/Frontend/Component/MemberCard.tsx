import { Component, useEffect } from "react"
import React from "react"

interface Member {
    id: any,
    name: string,
    image: string,
    title: string,
    desc : string,
    linkdin : string,
    stackoverflow: string,
    github:string
}


const MemberCard = ({member} : {member : Member}) => {

    return (
        <div className="card text-center">
            <div className="text-center card-img-top">
                <img src={member.image} className="mt-2 member-image" alt="..." />
            </div>
            <div className="card-body">
            <h5 className="card-title">{member.name}</h5>
            <div className="card-text">
                {member.title}
            </div>
            <p className="card-text mt-2">
                {member.desc}
            </p>
            </div>
            <div className="card-footer ">
                <div className="d-flex justify-content-center align-items-center">
                    {/* <button className="btn btn-info fw-bold btn-lg" >More Info</button> */}
                    <small className="mx-2">Follow {member.name} : </small>
                    <a className="text-info mx-0" href={member.linkdin}><i className="bi fs-4 bi-linkedin"></i></a>
                    <a href={member.stackoverflow} className="text-warning ms-2"><i className="bi fs-4 bi-stack-overflow"></i></a>

                    <a href={member.github} className="text-black ms-2"><i className="bi fs-4 bi-github"></i></a>
                </div>
            </div>
        </div>
    )
}


export default MemberCard