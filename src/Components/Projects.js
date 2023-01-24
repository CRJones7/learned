import React, {useState} from 'react'
import "../main.css"
import Charts from "../files/Charts.gif"
import Formulary from "../files/Formulary.gif"
import Overview from "../files/overview2.gif"
import PChart from "../files/patientChart.gif"
import CarShow from "../images/carShow.png"
import MathyMath from "../images/mathyMath.png"
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react'

// const Overlay = (image, setShow, show) => {
  

//   return(
//     <div className='modalOverlay'>
//       <div><img src={image === "charts" ? Charts : image === "overview" ? Overview : image === "pchart" ? PChart : Formulary} alt="largeImage"/></div>
//     </div>
//   )
// }

const Projects = ({lightMode}) => {
const [showPersonal, setShowPersonal] = useState(false)
  // const [showModal, setShowModal] = useState(false)
  // const [img, setImg] = useState(null)

    const handleClick = (img) => {
      // setShowModal(true)
      // setImg(img)
    }
    
    return(
        <div className='projectsGroup'>
        {/* {showModal && <Overlay image={img} setShow={setShowModal} show={showModal}/>} */}
        <div className={lightMode ? 'projectsTitle tagLight' : 'projectsTitle tagDark'}>Professional Projects</div>
        <div className='projectBlock '>
        <img src={Charts} alt="Charts Gif" className='projectGif project' onClick={() => handleClick("charts")}/>
          <img src={Formulary} alt="Table Gif" className='projectGif project' onClick={() => handleClick("formulary")}/>
        </div>
        <div className='projectBlock projects'>

          <img src={PChart} alt="Table Gif" className='projectGif project' onClick={() => handleClick("pchart")}/>
          <img src={Overview} alt="Overview Gif" className='projectGif project' onClick={() => handleClick("overview")}/>
        </div>
        <div className={lightMode ? 'projectsTitle tagLight personal' : 'projectsTitle tagDark personal'} onClick={() => setShowPersonal(!showPersonal)}>Personal Projects </div>
        {/* {showPersonal && 
        <> */}
        <div className='projectBlock '>
          <div className='chunks projectGif '>
          <img src={CarShow} alt="React Three Fiber - Car Show" className='project personalProject' onClick={() => window.open('https://crjones7.github.io/car_show/', '_blank')}/>
          <span>React Three Fiber Project</span>
          </div>
          <div className='chunks projectGif '>
          <img src={MathyMath} alt="Math Practice Site" className='project personalProject' onClick={() => window.open('https://crjones7.github.io/mathymath', '_blank')}/>
          <span>Kids Math Practice</span>
          </div>
        </div>
        <div className='comingSoon'>
        More Coming Soon...
        </div>
        {/* </>
        } */}
        
        </div>
    )
}

export default Projects;