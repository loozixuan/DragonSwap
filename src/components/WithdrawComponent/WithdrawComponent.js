import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './WithdrawComponent.css';
import { Card, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DragonSwap from '../../abis/DragonSwap.json'
import Web3 from 'web3';

export default function WithdrawComponent() {

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

        //const abi = Marketplace.abi
        //const address = Marketplace.networks[5777].address
        //make it dynamic to get network ID
        //const address = Marketplace.networks[networkId].address
        //const marketplace = new web3.eth.Contract(abi, address)
        //console.log(marketplace)
    }



    return (
        <div >
            {/* background-color: rgb(33, 36, 41) */}
            <Card className="mt-5">
                <Card.Header><h5>Withdraw Liquidity</h5></Card.Header>
                <Card.Body>
                    <Card.Title>
                        ERC-20/ETH
                    </Card.Title>
                    <Card.Text>
                        <div className="pool-token">
                            <div className='label'>Your pool tokens:</div>
                            <div className="float:right">0.6728</div>
                        </div>
                        {/* <div className="pool-share">
                            <div className='label'>Your pool share :</div>
                            <div className="float:right">0.3%</div>
                        </div> */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">ERC-20</InputGroup.Text>
                            <FormControl
                              id="productName"
                              type="text"
                             // ref={(input) => { this.productName = input }}
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">ETH</InputGroup.Text>
                            <FormControl
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </Card.Text>
                    <Button className="withdraw-btn" onClick={loadBlockchainData}>Withdraw</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
