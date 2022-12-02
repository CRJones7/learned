import React from 'react'
import Resume from "../files/CJones_Resume.pdf"
import Photo from "../images/mePhoto.jpeg"

const Welcome = ({lightMode}) => {

    const openLink = (file) => {
        window.open(file, "_blank")
    }


    return(
        <>
                    <div className="greeting">
                        <h3 style={{fontSize: "40px", margin: 0}}>Hi I'm</h3>
                        <h4 style={{fontSize: "40px", margin: 0}}>Courtney Jones</h4>
                        <h4 style={{fontSize: "40px", margin: 0}}>Welcome to my site</h4>
                        <p style={{fontSize: "20px"}}>UX Front-End Developer</p>
                        <p style={{fontSize: "11px", paddingBottom: "10px"}}>~ Professional Problem Solver ~</p>
                    </div>
                    <div className="links">
                    <div className="link" onClick={() => openLink("https://github.com/CRJones7")}>GH</div>
                    <div className="link" onClick={() => openLink("https://www.linkedin.com/in/courtney-jones-458362b3/")} >LI</div>
                    <div className="link" onClick={() => openLink(Resume)}>RE</div>
         </div>
        </>
    )
}

export default Welcome