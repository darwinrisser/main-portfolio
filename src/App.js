import React, { Component } from 'react';
import './App.css';
import Nav from './modules/Nav.js';
import Main from './modules/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Main/>          
      </div>
    );
  }
}

export default App;