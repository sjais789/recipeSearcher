import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apps from './recipe';
class App extends Component {
  render() {
    return (
     <div>

         <h1>Recipe Searcher</h1>

         <Apps/>
     </div>
    );
  }
}

export default App;
