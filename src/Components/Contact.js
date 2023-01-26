import React from 'react'
import "../main.css"
import Resume from "../files/CjonesResume.pdf"

const Contact = ({lightMode, scrollWelcome}) => {
    const openLink = (file) => {
        window.open(file, "_blank")
    }
    return(
        <>
        <div className='contactGroup'>
            <div className='contact '>
                <div className={lightMode ? 'contactTag tagLight' : 'contactTag tagDark'}>Call me:</div>
                <h1 className='phone info'>(737)-346-1265</h1>
            </div>
            <div className='contact'>
               <div className={lightMode ? 'contactTag tagLight' : 'contactTag tagDark'}>Find me:</div> 
               <h1 className='location info'>Austin, TX</h1>
            </div>
            <div className='contact'>
                <div className={lightMode ? 'contactTag tagLight' : 'contactTag tagDark'}>Message me: </div>
                <h1 className='email info'
                onClick={(e) => {
                    window.location = "mailto:courtneyrjones95@gmail.com";
                  }}
                  >
                    courtneyrjones95@gmail.com
                </h1>
           
            </div>
            <div className={lightMode ?  "links tagLight": "links tagDark"}>
                    <div className={lightMode ?  "link tagLight": "link tagDark"} onClick={() => openLink("https://github.com/CRJones7")}>GitHub</div>
                    <div className={lightMode ?  "link tagLight": "link tagDark"} onClick={() => openLink("https://www.linkedin.com/in/courtney-jones-458362b3/")} >LinkedIn</div>
                    <div className={lightMode ?  "link tagLight": "link tagDark"} onClick={() => openLink(Resume)}>Resume</div>
                    </div>
                    
        </div>
        
    </>
    )
}

export default Contact;