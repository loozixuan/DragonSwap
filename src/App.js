// import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProvideLiquidity from './components/ProvideComponent/ProvideComponent';
import WithdrawLiquidity from './components/WithdrawComponent/WithdrawComponent';
import SwapComponent from './components/SwapComponent/SwapComponent';
import ContainerComponent from './components/ContainerComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainerComponent />} />
      </Routes>
      <Routes>
        <Route path="/provide-liquidity" element={<ProvideLiquidity />} />
      </Routes>
      <Routes>
        <Route path="/withdraw-liquidity" element={<WithdrawLiquidity />} />
      </Routes>
      <Routes>
        <Route path="/swap" element={<SwapComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
