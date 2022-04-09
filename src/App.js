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
import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/Connect";
import web3 from "web3";

function App() {
 
  async function componentWillMount(){
    await this.loadWeb3()
    //console.log(window.web3)
    await this.loadBlockchainData()


  }

  // wire up the component to talk to the blockchain, 
  //use web3.js to talk to blockchain 
  async function loadWeb3(){
   // initWeb3: async function() {
       if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
              // Request account access if needed
              //await window.ethereum.enable()
              await window.ethereum.request({ method: "eth_requestAccounts" });;

       }
         // Legacy dapp browsers...
      else if (window.web3) {
             window.web3  = new Web3(window.web3.currentProvider)      
       }
          // If no injected web3 instance is detected, fall back to Ganache
       else {
          window.alert('Non-Ethereum browser detected. http://localhost:7545 and metamask')
       }
  
  }

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

export default App;
