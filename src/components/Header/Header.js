import React, { useState, useEffect } from 'react';
import Logo from '../../images/dragon_swap.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button, Card } from "react-bootstrap";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../wallet/Connect";
import web3 from "web3";


export default function Header() {
    // // usetstate for storing and retrieving wallet details
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });

    // Button handler button for handling a
    // request event for metamask
    const btnhandler = () => {

        // Asking if metamask is already present or not
        if (window.ethereum) {

            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));
        } else {
            alert("install metamask extension!!");
        }
    };

    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                // Setting balance
                setdata({
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };

    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
            address: account,
        });

        // Setting a balance
        getbalance(account);
    };



    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-container">
                <div className="logo-container" >
                    <img src={Logo} className="logo-img" />
                </div>
                <Navbar.Brand href="#home">Dragonswap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/pool">Pool</Nav.Link>
                        <Nav.Link href="#pricing">Swap</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button onClick={btnhandler} >
                    Connect Wallet
                </Button>
            </Navbar>
            <div><strong>Balance: </strong>
                {data.Balance}</div>
        </header>);
}
