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
import Web3 from 'web3';
import Home from './containers/Home';
import ProvideLiquidity from './components/ProvideComponent/ProvideComponent';
import WithdrawLiquidity from './components/WithdrawComponent/WithdrawComponent';
import ContainerComponent from './components/ContainerComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/provide-liquidity" element={<ProvideLiquidity />} />
        </Routes>
        <Routes>
          <Route path="/withdraw-liquidity" element={<WithdrawLiquidity />} />
        </Routes>
        <Routes>
          <Route path="/pool" element={<ContainerComponent />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
