import React from 'react'
import "../main.css"
import Charts from "../files/Charts.gif"
import Formulary from "../files/Formulary.gif"
import Overview from "../files/overview2.gif"
import PChart from "../files/patientChart.gif"

// const Overlay = (image, setShow, show) => {
  

//   return(
//     <div className='modalOverlay'>
//       <div><img src={image === "charts" ? Charts : image === "overview" ? Overview : image === "pchart" ? PChart : Formulary} alt="largeImage"/></div>
//     </div>
//   )
// }

const Projects = ({lightMode}) => {

  // const [showModal, setShowModal] = useState(false)
  // const [img, setImg] = useState(null)

    const handleClick = (img) => {
      // setShowModal(true)
      // setImg(img)
    }
    
    return(
        <div className='projectsGroup'>
        {/* {showModal && <Overlay image={img} setShow={setShowModal} show={showModal}/>} */}
        <div className={lightMode ? 'projectsTitle tagLight' : 'projectsTitle tagDark'}>Projects</div>
        <div className='projectBlock '>
        <img src={Charts} alt="Charts Gif" className='projectGif project' onClick={() => handleClick("charts")}/>
          <img src={Formulary} alt="Table Gif" className='projectGif project' onClick={() => handleClick("formulary")}/>
        </div>
        <div className='projectBlock projects'>

          <img src={PChart} alt="Table Gif" className='projectGif project' onClick={() => handleClick("pchart")}/>
          <img src={Overview} alt="Overview Gif" className='projectGif project' onClick={() => handleClick("overview")}/>
        </div>
        <div className='comingSoon'>
            More Coming Soon...
        </div>
        </div>
    )
}

export default Projects;