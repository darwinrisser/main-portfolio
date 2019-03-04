import React from 'react';
import './css/About.css'

const About = (props) => {
  return(
    <div className="about">
      <div className="aboutBox">
        <p id="aboutContent">I am a full-stack web developer from Austin, TX.</p>
        <button id="resumeButton">RESUME <i class="fas fa-file-download"></i></button>
        <p className="sectionHead">Front End</p>
        <p className="items">React &#8226; Redux &#8226; Javascript &#8226; jQuery &#8226; HTML5 &#8226; CSS3 &#8226; SASS &#8226; Bootstrap</p>
        <p className="sectionHead">Back End</p>
        <p className="items">Node &#8226; Express &#8226; MongoDB &#8226; Mongoose &#8226; RESTful API &#8226; Fetch &#8226; Axios</p>
        <p className="sectionHead">Tools</p>
        <p className="items">Webpack &#8226; Git &#8226; Npm</p>
        <p className="sectionHead">Software</p>
        <p className="items">Adope Photoshop &#8226; Adobe Illustrator &#8226; Adobe After Effects</p>
      </div>
    </div>
  )
}

export default About;