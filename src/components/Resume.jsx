import React from 'react';
import resume from '../assets/workImages/resume.png'
import pdf from '../assets/workImages/pdf.png'

function Resume() {
    return (
      <div className='d-flex flex-column align-items-center'>
         <h4>Click to download!</h4>
        <a href={pdf} target='_blank'>
        <img src={resume} alt="" className='d-flex justify-content-center resume'/></a>
       
        </div>
        
    )
  
}

export default Resume