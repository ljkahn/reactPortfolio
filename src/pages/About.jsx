import React from 'react'
import PersonalAi from '../assets/siteImages/PersonalAi.png';
function About() {
  return (
    <div className='d-flex'>
      <img src={PersonalAi} alt='Lia Kahn' className='personal'/>
      <h3>
        <p className='about'>Born and raised in Boston, ma and now developing in Denver, CO.</p>
        
<p className='about'>
I have a passion for full-stack development with a higher intererst in back end development. </p>
<p className='about'>
From being a motorcycle mechanic to studying neuroscience; from rock climbing to being an audio engineer - I have never met a problem I didnt want to solve.</p>
</h3>
</div>
  )
}

export default About