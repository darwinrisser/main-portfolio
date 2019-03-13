import React, { Component } from 'react';
import './App.css';
import Nav from './modules/Nav.js';
import Main from './modules/Main.js';
import Work from './modules/Work.js'

class App extends Component {

  state={
    display: 0,
    homeStyle: true,
    workStyle: false
  }
   
  changeState = (num) => {
    this.setState(()=>{
      return {display:num}
    })
    if (num === 0){
      this.setState(()=>{
        return {homeStyle:true, workStyle:false}
      })} else if (num === 1){
            this.setState(()=>{
              return {homeStyle:false, workStyle:true}
          })}
  }
  
  render() {
    let content = null;
    if (this.state.display === 0){
      content = <Main changeState={this.changeState}/>
    } else if (this.state.display === 1){
      content = <Work/>
    }

    return (
      <div className="App">
        <Nav changeState={this.changeState} display={this.state.display} homeStyle={this.state.homeStyle} workStyle={this.state.workStyle}/>
        {content}
      </div>
    );
  }
}

export default App;