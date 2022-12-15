import React from 'react'

const Welcome = ({lightMode}) => {

    return(
        <div style={{height: "80vh"}}>
                    <div className="greeting">
                        <h3 className='welcomeHeader'>Hi, I'm Courtney</h3>
                        <p className='welcomeSubTxt'>A front-end developer based in Austin, TX <br/> building telemedicine solutions.</p>
                    </div>
        </div>
    )
}

export default Welcome