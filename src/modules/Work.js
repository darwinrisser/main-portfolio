import React from 'react';
import './css/Work.css'

const Work = (props) => {
  return(
    <div className="content">
      <div className="box">
          <div className="example">
            <h3>
              Game of Thrones Quiz
            </h3>
            <p>
              Javascript quiz game. Built in React.<br/>
            </p>
            <a href="https://drisser.github.io/got-react/" target="_blank"><img src="https://i.imgur.com/YQaE2Cp.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              Blue VPN
            </h3>
            <p>
              SPA for a hypothetical business. Highly responsive design.
            </p>
            <a href="https://drisser.github.io/gh-pages/blue-vpn/" target="_blank"><img src="https://i.imgur.com/AdzDtix.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              Bitcoin Miner
            </h3>
            <p>
              Simple Javascript game based on clicking a button to "mine" Bitcoin.
            </p>
            <a href="https://drisser.github.io/gh-pages/bitcoin-miner/" target="_blank"><img src="https://i.imgur.com/KD5KKcQ.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              River Rat Raku
            </h3>
            <p>
              SPA for my uncle's pottery business. Built in React.
            </p>
            <a href ="https://drisser.github.io/gh-pages/river-rat-raku/" target="_blank"><img src="https://i.imgur.com/C6NahJL.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              Placeholder Project
            </h3>
            <p>
              Eventually another project will go here.
            </p>
            <img src="https://i.imgur.com/aQx7JSJ.jpg" alt="webpage example"/>
          </div>
          <div className="example">
            <h3>
              Placeholder Project
            </h3>
            <p>
              Eventually another project will go here.
            </p>
            <img src="https://i.imgur.com/aQx7JSJ.jpg" alt="webpage example"/>
          </div>
      </div>
    </div>
  )
}

export default Work;