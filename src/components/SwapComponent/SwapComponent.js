import React, { useContext, useState, useEffect } from 'react';
// import Image from 'next/image';
import { RiSettings3Fill } from 'react-icons/ri';
import { AiOutlineDown } from "react-icons/ai";
import ethLogo from '../../images/eth.jpeg';
import Header from '../Header/Header.js';
import '../SwapComponent/SwapComponent.css';
import DragonSwap from '../../abis/DragonSwap.json'
import Web3 from 'web3';

export default function SwapComponent() {

    //load the metamask account and display on web page
    async function loadBlockchainData() {
        const web3 = new Web3(window.web3.currentProvider);
        //load account
        const accounts = await web3.eth.requestAccounts()

        // this.setState({ account: accounts[0] })  //error

        // console.log(DragonSwap.abi, DragonSwap.networks[5777].address)
        const networkId = await web3.eth.net.getId()

        const networkData = DragonSwap.networks[networkId]
        if (networkData) {
            const dragonswap = new web3.eth.Contract(DragonSwap.abi, networkData.address)

            console.log('Marketplace' + dragonswap)
            const tokenCount = await dragonswap.methods.token1().call()
            console.log("product:" + tokenCount.toString())

        } else {
            window.alert('Marketplace contract not deployed to detected network')

        }
    }

    return (
        <div style={{ height: "100vh", background: "#F8F8F8" }}>
            <Header />
            <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.token1.value
          const price = window.web3.utils.toWei(this.token1.value.toString(), 'Ether')
          this.props.createProduct(name, price)

        }}>
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
                                type='number'
                                className="transferPropInput"
                                placeholder='0.0'
                                pattern='^[0-9]*[.,]?[0-9]*$'
                                id="productPrice"
                               // ref={(input) => { this.token1 = input }}
                            // onChange={e => handleChange(e, 'amount')}
                            />
                            <div className="currencySelector">
                                <div className="currencySelectorContent">
                                    <div className="currencySelectorIcon">
                                        <img className="ethLogo" src={ethLogo} alt='eth logo' />
                                    </div>
                                    <div className="currencySelectorTicker">ETH</div>
                                    <AiOutlineDown className="currencySelectorArrow" />
                                </div>
                            </div>
                        </div>
                        <div className="transferPropContainer">
                            <input
                                type='text'
                                className="transferPropInput"
                                placeholder='0x...'
                            // onChange={e => handleChange(e, 'addressTo')}
                            />
                            <div className="currencySelector">
                                <div className="currencySelectorContent">
                                    <div className="currencySelectorTicker">Select a Token</div>
                                    <AiOutlineDown className="currencySelectorArrow" />
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
            </form>

        </div>
    );
}