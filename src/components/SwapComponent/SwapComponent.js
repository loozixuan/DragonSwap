import React, { useContext, useState, useEffect } from 'react';
// import Image from 'next/image';
import { RiSettings3Fill } from 'react-icons/ri';
import { AiOutlineDown } from "react-icons/ai";
import ethLogo from '../../images/eth.jpeg';
import Header from '../Header/Header.js';
import '../SwapComponent/SwapComponent.css';
import DragonSwap from '../../abis/DragonSwap.json'
import Web3 from 'web3';
import Logo from '../../images/dragon_swap.png';

export default function SwapComponent() {
    //load the metamask account and display on web page
    async function loadBlockchainData() {
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await web3.eth.requestAccounts()
        const networkId = await web3.eth.net.getId()
        const networkData = DragonSwap.networks[networkId]

        if (networkData) {
            const dragonswap = new web3.eth.Contract(DragonSwap.abi, networkData.address)

            // Provide Liquidity
            var amount_token_1 = parseInt(document.getElementById("token1").value);
            var amount_token_2 = parseInt(document.getElementById("token2").value);

            dragonswap.methods.LPToken(amount_token_1, amount_token_2).call(function (error, result) {

            });

            dragonswap.methods.provideLiquidity(amount_token_1, amount_token_2).send({ from: accounts[0] })
                .then(function (receipt) {
                    console.log(receipt)
                });
        } else {
            window.alert('DragonSwap contract not deployed to detected network')
        }
    }

    // handleTokenValue1(value){
 
    // }

    return (
        <div style={{ height: "100vh", background: "#F8F8F8" }}>
            <Header />
            <div className="wrapper">
                <div className="content">
                    <div className="formHeader">
                        <div>Swap</div>
                        <div>
                            <RiSettings3Fill />
                        </div>
                    </div>
                    <div className="transferPropContainer">
                        <input
                            type='text'
                            className="transferPropInput"
                            placeholder='Enter amount of ETH...'
                            pattern='^[0-9]*[.,]?[0-9]*$'
                            style={{ textIndent: '10px' }}
                            id="token1"
                            value={this.state.token1}
                            onChange={e => this.handleTokenValue1(e.target.value)}
                        // onChange={e => handleChange(e, 'amount')}
                        />
                        <div className="currencySelector">
                            <div className="currencySelectorContent">
                                <div className="currencySelectorIcon">
                                    <img className="ethLogo" src={ethLogo} alt='eth logo' />
                                </div>
                                <div className="currencySelectorTicker">ETH</div>
                                {/* <AiOutlineDown className="currencySelectorArrow" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="transferPropContainer">
                        <input
                            type='text'
                            className="transferPropInput"
                            placeholder='Enter amount of DRG ...'
                            style={{ textIndent: '10px' }}
                            id="token2"
                        // onChange={e => handleChange(e, 'addressTo')}
                        />
                        <div className="currencySelector">
                            <div className="currencySelectorContent">
                                <div className="currencySelectorIcon">
                                    <img className="ethLogo" src={Logo} alt='eth logo' />
                                </div>
                                <div className="currencySelectorTicker">DRG</div>
                                {/* <AiOutlineDown className="currencySelectorArrow" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="confirmButton">
                        Confirm
                    </div>
                    {/* <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
                        Confirm
                    </div> */}
                </div>
                {/* <Modal isOpen={!!router.query.loading} style={customStyles}>
                    <TransactionLoader />
                </Modal> */}
            </div>
        </div>
    );
}