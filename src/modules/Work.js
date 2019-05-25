import React from 'react';
import './css/Work.css'

const Work = (props) => {
  return(
    <div className="content">
      <div className="box">
          <div className="example">
            <h3>
              teacherr
            </h3>
            <p>
              Full stack networking service, connects private music teachers with schools that want to hire them.
            </p>
            <p>
              - React, Node, Express, MongoDB, Javascript, HTML, CSS, Material UI - 
            </p>
            <a href="https://darwinrisser.github.io/teacherr/" target="_blank"><img src="https://i.imgur.com/Q7BtFNt.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              Game of Thrones Quiz
            </h3>
            <p>
              Javascript quiz game. Attempt to correctly answer four questions for a dynamically generated result.
            </p>
            <p>
              - React, Javascript, HTML, CSS - 
            </p>
            <a href="https://darwinrisser.github.io/got-react/" target="_blank"><img src="https://i.imgur.com/YQaE2Cp.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              Redux Dashboard
            </h3>
            <p>
              Hypothetical software dashboard page.
            </p>
            <p>
              - React, Redux, Javascript, HTML, CSS -
            </p>
            <img src="https://i.imgur.com/7yXsINs.jpg" alt="webpage example"/>
          </div>
          <div className="example">
            <h3>
              Blue VPN
            </h3>
            <p>
              SPA for a hypothetical business. Highly responsive design.
            </p>
            <p>
              - HTML, CSS - 
            </p>
            <a href="https://darwinrisser.github.io/blue-vpn/" target="_blank"><img src="https://i.imgur.com/AdzDtix.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              Bitcoin Miner
            </h3>
            <p>
              Simple Javascript game based on clicking a button to "mine" Bitcoin.
            </p>
            <p>
              - Javascript, HTML, CSS -
            </p>
            <a href="https://darwinrisser.github.io/bitcoin-miner/" target="_blank"><img src="https://i.imgur.com/KD5KKcQ.jpg" alt="webpage example"/></a>
          </div>
          <div className="example">
            <h3>
              River Rat Raku
            </h3>
            <p>
              SPA for my uncle's pottery business.
            </p>
            <p>
              - React, HTML, CSS -
            </p>
            <a href ="https://darwinrisser.github.io/river-rat-raku/" target="_blank"><img src="https://i.imgur.com/C6NahJL.jpg" alt="webpage example"/></a>
          </div>
      </div>
    </div>
  )
}

export default Work;