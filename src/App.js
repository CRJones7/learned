import React, {useCallback} from "react"
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "../src/Components/main.css"
import Home from "../src/Components/Home"
import About from '../src/Components/About';
import Projects from '../src/Components/Projects';
import Contact from '../src/Components/Contact';
import LightLogo from "../src/images/logoLight.svg"
import DarkLogo from "../src/images/logoDark.svg"
import { MoonIcon, SunIcon} from "@primer/octicons-react"

function App() {
  const [lightMode, setLightMode] = React.useState(true)

  return (
    <Router>
    <div className="home">
    <div className={lightMode ? "header lightHeader" : "header darkHeader"} >
                <Link className="logoBox" to="/">
                   {!lightMode && <img src={LightLogo} className="mainLogo" alt="logo" loading="lazy"/>}
                   {lightMode && <img src={DarkLogo} className="mainLogo" alt="logo" loading="lazy"/>}
                </Link>
                <div className={lightMode ? "navs lightNavs" : "navs darkNavs"}>
                    <Link to="/about" className="navItem">About |</Link> 
                    <Link to="/contact"  className="navItem"> Contact |</Link> 
                    <Link  to="/projects" className="navItem">Projects</Link> 
                </div>
                <div>
                {!lightMode && <span onClick={() => setLightMode(!lightMode)}><SunIcon size={24} className="sun" loading="lazy"/></span>}
                {lightMode && <span onClick={() => setLightMode(!lightMode)}><MoonIcon size={24} className="moon" loading="lazy"/></span>}
                </div>
            </div>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/projects" element={<Projects/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
