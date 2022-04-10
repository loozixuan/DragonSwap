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
import SwapComponent from './components/SwapComponent/SwapComponent';
import ContainerComponent from './components/ContainerComponent';
import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/Connect";
import web3 from "web3";

function App() {


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
         <Routes>
        <Route path="/swap" element={<SwapComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
