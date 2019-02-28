import React from 'react';
import './css/Nav.css'

const Nav = (props) => {
  return(
    <div className="Nav">
      <div className="name">
        Darwin Risser
      </div>
      <div className="links">
        <span>Home</span><span>About</span><span>Work</span><span>Contact</span>
      </div>
    </div>
  )
}

export default Nav;