import React, { useContext, useState, useEffect } from 'react';
// import Image from 'next/image';
import { RiSettings3Fill } from 'react-icons/ri';
import { AiOutlineDown } from "react-icons/ai";
import ethLogo from '../../assets/images/eth.png';
import Header from '../Header/Header.js';
import '../SwapComponent/SwapComponent.css';

export default function SwapComponent() {
    return (
        <div style={{height: "100vh",background: "#F8F8F8" }}>
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
                            placeholder='0.0'
                            pattern='^[0-9]*[.,]?[0-9]*$'
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
        </div>
    );
}