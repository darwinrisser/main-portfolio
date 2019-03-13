import React from 'react';
import './css/Nav.css'

const Nav = (props) => {
   return(
    <div className="Nav">
      <div className="name">
        <span className="title">Darwin Risser</span>
        <a href="https://github.com/drisser" target="_blank"><span className="icons"><i class="fab fa-github"></i></span></a>
        <a href="https://www.linkedin.com/in/darwinrisser/" target="_blank"><span className="icons"><i class="fab fa-linkedin"></i></span></a>   
      </div>
      <div className="links">
        <span style={props.home} onClick={()=>{
          props.changeState(0)}} >Home</span>
        <span style={props.work} onClick={()=>{
          props.changeState(1)}} >Work</span>
        <span><a href="mailto: risser.darwin@gmail.com" target="_blank" className="navLink">Contact</a></span>
      </div>      
    </div>
  )
}

export default Nav;