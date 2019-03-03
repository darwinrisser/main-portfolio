import React from 'react';
import './css/Main.css'

const Main = (props) => {
  return(
    <div className="main">
      <div className="container">
        <h1>Darwin Risser</h1>
        <h2>FULL-STACK DEVELOPER</h2>
        <button><i class="fas fa-user-circle"></i> About</button><button><i class="fas fa-laptop-code"></i> Work</button><button><i class="fas fa-envelope"></i> Contact</button>
      </div>
    </div>
  )
}

export default Main;