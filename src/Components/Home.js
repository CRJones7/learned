import React, { useState } from "react"
import "../main.css"

import { MoonIcon, SunIcon, TriangleDownIcon} from "@primer/octicons-react"
import DarkLogo from "../images/logoDark.svg"
import LightLogo from "../images/logoLight.svg"
import Welcome from "./Welcome"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"

const WELCOME = "Welcome"
const ABOUT = "About"
const CONTACT = "Contact"
const PROJECTS = "Projects"

const Home = () => {
    const [lightMode, setLightMode] = useState(false)
    const [shown, setShown] = useState(WELCOME)


    const handleChange = (screen, direction) => {
    const screens = [WELCOME, PROJECTS, ABOUT, CONTACT]

        const match = (el) => el === screen
        const foundForward = screens.findIndex(match) + 1 
        const foundClean = foundForward <= 3 ? foundForward : 0 
        const newScreen = screens[foundClean]

        setShown(newScreen)
    }



    return(
    
        <div className={lightMode ? "home lightTheme" : "home darkTheme"}>
            <div className={lightMode ? "header lightHeader" : "header darkHeader"} >
                <div className="logoBox" onClick={() =>  setShown(WELCOME)}>
                   {!lightMode && <img src={LightLogo} className="mainLogo" alt="logo" />}
                   {lightMode && <img src={DarkLogo} className="mainLogo" alt="logo" />}
                </div>
                <div className={lightMode ? "navs lightNavs" : "navs darkNavs"}>
                    <div onClick={() => setShown(PROJECTS)} className="navItem">Projects |</div> 
                    <div onClick={() => setShown(ABOUT)} className="navItem">About |</div> 
                    <div onClick={() => setShown(CONTACT)}  className="navItem"> Contact </div> 
                </div>
                <div>
                {!lightMode && <span onClick={() => setLightMode(!lightMode)}><SunIcon size={24} className="sun" /></span>}
                {lightMode && <span onClick={() => setLightMode(!lightMode)}><MoonIcon size={24} className="moon" /></span>}
                </div>
            </div>
            
            <div className="welcome">
                <div className={lightMode ? "welcomeText lightWelcome": "welcomeText darkWelcome"}>
                    {shown === WELCOME && <Welcome lightMode={lightMode}/>}
                    {shown === PROJECTS && <Projects lightMode={lightMode}/>}
                    {shown === ABOUT && <About lightMode={lightMode}/>}
                    {shown === CONTACT && <Contact lightMode={lightMode}/>}
                    <div className="downArrow down-bounce" onClick={() => handleChange(shown, "down")}>
                        <TriangleDownIcon size={64} className="down "/>
                    </div>
                </div> 
                
            </div>
            
        </div>
        
    )
}

export default Home