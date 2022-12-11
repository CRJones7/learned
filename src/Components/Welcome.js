import React from 'react'
import Resume from "../files/CJones_Resume.pdf"

const Welcome = ({lightMode}) => {

    const openLink = (file) => {
        window.open(file, "_blank")
    }


    return(
        <div style={{height: "100vh"}}>
                    <div className="greeting"></div>
                    <div className="greeting">
                        <h3 className='welcomeHeader'>Hi, I'm</h3>
                        <h4  className='welcomeHeader'>Courtney Jones</h4>
                        <p className='welcomeSubTxt'>The Front-End Developer</p>
                    </div>
        </div>
    )
}

export default Welcome