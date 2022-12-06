import React from 'react'
import Resume from "../files/CJones_Resume.pdf"

const Welcome = ({lightMode}) => {

    const openLink = (file) => {
        window.open(file, "_blank")
    }


    return(
        <>
                    <div className="greeting"></div>
                    <div className="greeting">
                        <h3 style={{fontSize: "40px", margin: 0}}>Hi! I'm</h3>
                        <h4 style={{fontSize: "40px", margin: 0}}>Courtney</h4>
                        <p style={{fontSize: "25px"}}>The Front-End Developer</p>
                        <p style={{fontSize: "11px", paddingBottom: "10px"}}>~ And Pretty Cool Human ~</p>
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