import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Workout from  './component/workout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Workout/>
      </div>
    );
  }
}

export default App;
