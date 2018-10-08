import React, { Component } from 'react';
import annalee from '../src/annalee.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={annalee}  alt="Annalee Switek" className="headshot" />
          <h1>Hi, I'm Annalee</h1>
        </header>
      </div>
    );
  }
}

export default App;
