import React from 'react'
import "../main.css"
import Charts from "../files/Charts.gif"
import Formulary from "../files/Formulary.gif"
import Overview from "../files/overview2.gif"
import PChart from "../files/patientChart.gif"
const Projects = ({lightMode}) => {
    
    return(
        <>
        <div className={lightMode ? 'projectsTitle tagLight' : 'projectsTitle tagDark'}>Projects</div>
        <div className='projectBlock '>
        <img src={Charts} alt="Charts Gif" className='projectGif project'/>
          <img src={Formulary} alt="Table Gif" className='projectGif project'/>
        </div>
        <div className='projectBlock projects'>

          <img src={PChart} alt="Table Gif" className='projectGif project'/>
          <img src={Overview} alt="Overview Gif" className='projectGif project'/>
        </div>
        <div className='comingSoon'>
            More Coming Soon...
        </div>
        </>
    )
}

export default Projects;