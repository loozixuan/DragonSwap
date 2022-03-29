import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/rabbit-swap.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ContainerComponent from '../ContainerComponent';

export default function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-container">
                <div className="logo-container" >
                    <img src={Logo} className="logo-img" />
                </div>
                <Navbar.Brand href="#home">Rabbitswap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/pool">Pool</Nav.Link>
                        <Nav.Link href="/swap">Swap</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Button>
                    Connect Wallet
                </Button>
            </Navbar>
        </header>);
}