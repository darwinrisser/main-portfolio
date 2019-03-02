import React, { Component } from 'react';
import './App.css';
import Nav from './modules/Nav.js';
import Main from './modules/Main.js';
import About from './modules/About.js'

class App extends Component {

  state={
    display: 0
  }
  
  changeState = (num) => {
    this.setState(()=>{
      return {display:num}
    })
  }

  render() {
    let content = null;
    if (this.state.display === 0){
      content = <Main/>
    } else if (this.state.display === 1){
      content = <About/>
    }

    return (
      <div className="App">
        <Nav changeState={this.changeState} display={this.state.display}/>
        {content}          
      </div>
    );
  }
}

export default App;