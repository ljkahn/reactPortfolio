import React from 'react';
import resume from '../assets/workImages/resume.png'

function Resume() {
    return (
      <div>
        <a href={pdf} target='_blank'>
        <img src={resume} alt="" className='d-flex justify-content-center resume'/></a>
        </div>
    )
  
}

export default Resume