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
            My experience is mostly in ReactJs, recently I've been laid off and I've been ramping up creting new project learning new skills. Beyond the stress of looking for a new position, 
            having the time to consider what type of projects I'm interested in working on has been very fun. My two latest projects have been learning 3D animation with react-three-fiber, and a Math website for my two nephews who are always asking me to quiz them! Surely there is more to come with these projects and more.
            --- I am looking for a new position on a team that pushes me to learn new skills. I am motivated by team culture and showing up for others. I hope to join a project soon, where I can leverage my experiences to help move the team closer to their goals.
        </div>
        </div>
        </>
    )
}

export default About;