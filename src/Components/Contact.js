import React from 'react'
import "../main.css"
import Resume from "../files/CJones_Resume.pdf"

const Contact = ({lightMode}) => {
    const openLink = (file) => {
        window.open(file, "_blank")
    }
    return(
        <>
            <div className='contact '>
                <div className={lightMode ? 'contactTag tagLight' : 'contactTag tagDark'}>Call me at:</div>
                <h1 className='phone info'>(737)-346-1265</h1>
            </div>
            <div className='contact'>
               <div className={lightMode ? 'contactTag tagLight' : 'contactTag tagDark'}>Find me in:</div> 
               <h1 className='location info'>Austin, TX</h1>
            </div>
            <div className='contact'>
                <div className={lightMode ? 'contactTag tagLight' : 'contactTag tagDark'}>Message me at: </div>
                <h1 className='email info'
                onClick={(e) => {
                    window.location = "mailto:courtneyrjones95@gmail.com";
                  }}
                  >
                    courtneyrjones95@gmail.com
                </h1>
           
            </div>
            <div className="links">
                    <div className={lightMode ?  "link tagLight": "link tagDark"} onClick={() => openLink("https://github.com/CRJones7")}>GH</div>
                    <div className="link" onClick={() => openLink("https://www.linkedin.com/in/courtney-jones-458362b3/")} >LI</div>
                    <div className="link" onClick={() => openLink(Resume)}>RE</div>
                    </div>
        </>
    )
}

export default Contact;