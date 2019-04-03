import React from 'react';
import './css/Main.css'

const Main = (props) => {
  return(
    <div className="main" id="main">
      <div className="container">
        <h1>Darwin Risser</h1>
        <h2>FRONT-END DEVELOPER</h2>
        <button><a href="https://darwinrisser.github.io/DarwinRisser.pdf" target="_blank" className=
        "mainLink"><i class="fas fa-file"></i> Resume</a></button>
        <button onClick={()=>{
            props.changeState(1)}}><i class="fas fa-laptop-code"></i> Work</button>
        <button><a href="mailto: risser.darwin@gmail.com" target="_blank" className=
        "mainLink"><i class="fas fa-envelope"></i> Contact</a></button>
      </div>
    </div>
  )
}

export default Main;