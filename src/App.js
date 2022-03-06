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
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import Profile from './containers/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
