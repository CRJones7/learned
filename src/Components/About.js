import React from 'react'
import "../main.css"
import Photo from "../images/mePhoto.jpeg"

const About = ({lightMode}) => {
    return(
        <>
        <div className={lightMode ? 'projectsTitle tagLight' : 'projectsTitle tagDark'}>About Me</div>
        <div className="photoContainer"><img src={Photo} className={lightMode ? "photo lightPhoto" : "photo darkPhoto"} alt="head shot"/></div>
        <div className={lightMode ? 'aboutMe tagLight': 'aboutMe tagDark'}>
            Hi I am Courtney, Im an Austin based Front-End UX developer. I've spend the last two years working remote for a telemedicine startup here in Austin. 
            I'm a Biologist turned QA Engineer turned Front-End UX developer. And I enjoy the process of researching and finding solutions to complex problems, all of these careers have allowed me to sharpen this skill.
            I have experience in ReactJS, Javascript/Typscript, NodeJS, and a little GoLang. When Im not developing, I spend my time making pottery, seeing live music, and exploring the outdoors. 
        </div>
            
        </>
    )
}

export default About;