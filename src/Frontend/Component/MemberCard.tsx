// import { Component, useEffect } from "react"
import React, { useEffect, useState } from "react"
import extractColors from 'extract-colors'
import { useAsyncValue } from "react-router-dom"

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

const getColorsGradient = async (image: string) => {
    let colors = await extractColors(image)
    
    let newColors =  colors.map(color => {
        return color.hex
    }).join(", ")

    return `linear-gradient(45deg, ${newColors} )`;
} 



const MemberCard = ({member} : {member : Member}) => {
    let [gradient, updateGradient] = useState("")

    useEffect( () => {
        (async () => {
            let grad = await getColorsGradient(member.image)
            console.log(grad)
            updateGradient(grad)
        })()
    },[])

  console.log(extractColors(member.image))


    return (
        <div  className={`card text-center rer`}  >
            <div  style={{
            // background:`url(${member.image}) no-repeat`,
            backgroundSize:"100%",
            minHeight:"500px",
            maxHeight:"500px",
            overflow:"scroll"
        }} >
            <div className="text-center card-img-top" style={{
                backgroundImage: gradient
            }}>
                <img src={member.image} className="mt-2 member-image" alt="..." />
            </div>

            <div className="card-body" style={{
                background:"#F8F9FA",
                minHeight:"200px"
            }}>
                <h5 className="card-title">{member.name}</h5>
                <div className="card-text">
                    {member.title}
                </div>
                <p className="card-text mt-2">
                    {member.desc}
                </p>
            </div>
            </div>
            <div className="card-footer " style={{
                background:"#F8F9FA"
            }}>
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