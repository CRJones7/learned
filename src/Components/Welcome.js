import React from 'react'

const Welcome = ({lightMode}) => {

    return(
        <div style={{height: "100vh"}}>
                    <div className="greeting">
                        <h3 className='welcomeHeader'>Hi, I'm</h3>
                        <h4  className='welcomeHeader'>Courtney Jones</h4>
                        <p className='welcomeSubTxt'>The Front-End Developer</p>
                    </div>
        </div>
    )
}

export default Welcome