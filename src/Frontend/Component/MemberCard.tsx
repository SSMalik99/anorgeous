import { Component, useEffect } from "react"
import React from "react"

interface Member {
    id: any,
    name: string,
    image: string,
    title: string,
    desc : string
}


const MemberCard = ({member} : {member : Member}) => {

    return (
        <div className="card text-center">
            <div className="text-center card-img-top">
                <img src={member.image} className="member-image" alt="..." />
            </div>
            <div className="card-body">
            <h5 className="card-title">{member.name}</h5>
            <div className="card-text">
                {member.title}
            </div>
            <p className="card-text">
                {member.desc}
            </p>
            </div>
            <div className="card-footer">
                <button className="btn btn-info fw-bold btn-lg" >More Info</button>
                <small className="text-muted"></small>
            </div>
        </div>
    )
}


export default MemberCard