import React from 'react';
import './css/Nav.css'

const Nav = (props) => {
  
  let linkStyle = {
    backgroundColor: 'none'
  }

  if (props.display === 0){
      linkStyle = {
        backgroundColor: 'black'
    }
  } else if (props.display === 1){
      linkStyle = {
        backgroundColor: 'none'
    }
  }
  
  return(
    <div className="Nav">
      <div className="name">
        <span className="title">Darwin Risser</span>
        <a href="https://github.com/drisser" target="_blank"><span className="icons"><i class="fab fa-github"></i></span></a>
        <a href="https://www.linkedin.com/in/darwinrisser/" target="_blank"><span className="icons"><i class="fab fa-linkedin"></i></span></a>        
      </div>
      <div className="links">
        <span onClick={()=>{
          props.changeState(0)}} style={linkStyle}>Home</span><span onClick={()=>{
            props.changeState(1)}}>About</span><span onClick={()=>{
              props.changeState(2)}}>Work</span><span><a href="mailto: risser.darwin@gmail.com" className="navLink">Contact</a></span>
      </div>
    </div>
  )
}

export default Nav;