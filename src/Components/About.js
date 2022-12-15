import React from 'react'
import "../main.css"
import Photo from "../images/mePhoto.jpeg"
import Resume from "../files/CJones_Resume.pdf"

const About = ({lightMode}) => {
    const openLink = (file) => {
        window.open(file, "_blank")
    }

    return(
        <>
        <div className='aboutGroup'>
        <div className={lightMode ? 'projectsTitle tagLight' : 'projectsTitle tagDark'}>About Me</div>
        <div className="photoContainer"><img src={Photo} className={lightMode ? "photo lightPhoto" : "photo darkPhoto"} alt="head shot"/></div>
        <div className={lightMode ? 'aboutMe tagLight': 'aboutMe tagDark'}>
            Hi, I am Courtney I'm an Austin based Front-End web developer. I've spent the last two years working remote for a telemedicine startup here in Austin. 
            I'm a Biologist turned QA Engineer turned Front-End web developer, and I enjoy the process of researching to find solutions for complex problems. 
            I have experience working in ReactJS, Javascript/Typscript, NodeJS, and a little GoLang. When I'm not developing, I spend my time making pottery, 
            enjoying live music, and exploring the outdoors. 
        </div>
          
            
        </div>
        </>
    )
}

export default About;