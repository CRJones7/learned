import React from 'react'
import "../main.css"
import Photo from "../images/mePhoto.jpeg"

const About = ({lightMode}) => {
    return(
        <>
        <div className="photoContainer"><img src={Photo} className={lightMode ? "photo lightPhoto" : "photo darkPhoto"} alt="head shot"/></div>
        <div className={lightMode ? 'aboutMe tagLight': 'aboutMe tagDark'}>
            Hi I'm Courtney, I'm a Biologist, turned QA Engineer, turned Front-End UX developer. I enjoy the process of researching and finding solutions to complex problems, all of these careers have allowed me to sharpen this skill. 
            Outside of developing, I spend my time making pottery, seeing live music and exploring the outdoors. I've spent the past ~2 years working as a front-end developer on an electronic medical records web application. 
        </div>
            
        </>
    )
}

export default About;