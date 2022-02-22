// import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
