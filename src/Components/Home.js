import React, { useState, useRef } from "react"
import "../main.css"
import { MoonIcon, SunIcon} from "@primer/octicons-react"
import DarkLogo from "../images/logoDark.svg"
import LightLogo from "../images/logoLight.svg"
import Welcome from "./Welcome"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"

const Home = () => {
    const [lightMode, setLightMode] = useState(false)

    const contactRef = useRef(null)
    const projectsRef = useRef(null)
    const aboutRef = useRef(null)
    const welcomeRef = useRef(null)

    const scrollAbout = () => aboutRef.current.scrollIntoView({behavior: 'smooth', })
    const scrollContact = () => contactRef.current.scrollIntoView({behavior: 'smooth'})
    const scrollWelcome = () => welcomeRef.current.scrollIntoView({behavior: 'smooth'})
    const scrollProjects = () => projectsRef.current.scrollIntoView({behavior: 'smooth'})


                                                        
    return(
    
        <div className={lightMode ? "home lightTheme" : "home darkTheme"}>
            <div className={lightMode ? "header lightHeader" : "header darkHeader"} >
                <div className="logoBox" onClick={scrollWelcome}>
                   {!lightMode && <img src={LightLogo} className="mainLogo" alt="logo" />}
                   {lightMode && <img src={DarkLogo} className="mainLogo" alt="logo" />}
                </div>
                <div style={{display: "flex"}}>
                <div className={lightMode ? "navs lightNavs" : "navs darkNavs"}>
                    <div onClick={scrollProjects} className="navItem">Projects |</div> 
                    <div onClick={scrollAbout} className="navItem">About |</div> 
                    <div onClick={scrollContact}  className="navItem"> Contact |</div> 
                </div>
                <div>
                {!lightMode && <span onClick={() => setLightMode(!lightMode)} style={{marginLeft: '3px'}}><SunIcon size={24} className="sun" /></span>}
                {lightMode && <span onClick={() => setLightMode(!lightMode)}  style={{marginLeft: '3px'}}><MoonIcon size={24} className="moon" /></span>}
                </div>
                </div>
            </div>
            
            <div className="welcome">
                <div className={lightMode ? "welcomeText lightWelcome": "welcomeText darkWelcome"}>
                  
                    <>
                    <div ref={welcomeRef}><Welcome lightMode={lightMode} /></div>
                    <div ref={projectsRef}><Projects lightMode={lightMode}/></div>
                    <div ref={aboutRef}><About lightMode={lightMode}/></div>
                    <div ref={contactRef}><Contact lightMode={lightMode} scrollWelcome={scrollWelcome}/></div>
                    </>
                
                    <div className="downArrow down-bounce" >
                        <span onClick={scrollWelcome} className={lightMode ? "toTop tagLight " : "toTop tagDark"}>Back To Top</span>
                    </div>
                </div> 
            </div>
            
        </div>
        
    )
}

export default Home