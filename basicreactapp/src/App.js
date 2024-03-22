import './App.css';
import React, { Component } from 'react';
import Home from './components/Home/Home';

class App extends Component {
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <div>
        <Home/>
      </div>
    </div>
  );
}}

export default App;
