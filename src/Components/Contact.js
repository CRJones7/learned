import React from 'react'
import "./main.css"

const Contact = ({}) => {
    return(
        <>
            <div className='contact '>
                <div className='callMe contactTag'>Call me at:</div>
                <h1 className='phone info'>(737)-346-1265</h1>
            </div>
            <div className='contact'>
               <div className='findMe contactTag'>Find me in:</div> 
               <h1 className='location info'>Austin, TX</h1>
            </div>
            <div className='contact'>
                <div className='messageMe contactTag'>Message me at: </div>
                <h1 className='email info'
                onClick={(e) => {
                    window.location = "mailto:courtneyrjones95@gmail.com";
                  }}
                  >
                    courtneyrjones95@gmail.com
                </h1>
           
            </div>
        </>
    )
}

export default Contact;