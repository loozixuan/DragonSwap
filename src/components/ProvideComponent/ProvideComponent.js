import React, { useState, useEffect } from 'react';
import './ProvideComponent.css';
import { Card, Button } from 'react-bootstrap';
import DragonSwap from '../../abis/DragonSwap.json'
import Web3 from 'web3';

export default function ProvideComponent() {
    let [token1, setToken1] = useState(9);
    //load the metamask account and display on web page
    async function loadBlockchainData() {
        const web3 = window.web3
        //load account
        const accounts = await web3.eth.getAccounts()
        // console.log(accounts)

        // console.log(DragonSwap.abi, DragonSwap.networks[5777].address)
        const networkId = await web3.eth.net.getId()

        const networkData = DragonSwap.networks[networkId]
        if (networkData) {
            const dragonswap = new web3.eth.Contract(DragonSwap.abi, networkData.address)
            // Check total token1 and token2 in pool
            dragonswap.methods.checkMyBalances().call(function (error, result) {
                console.log("token 1 balances : ", result[0])
                console.log("token 2 balances : ", result[1])
                token1 = setToken1(result[0]);
            });

            // Check msg.sender balances
            dragonswap.methods.getPoolDetails().call(function (error, result) {
                console.log("Total token 1 in pool : ", result[0])
                console.log("Total token 2 in pool : ", result[1])
                console.log("LP token owned : ", result[2])
                token1 = setToken1(result[0]);
            });

            // Provide Liquidity
            var amount_token_1 = parseInt(document.getElementById("token1").value);
            var amount_token_2 = parseInt(document.getElementById("token2").value);

            dragonswap.methods.provideLiquidity(amount_token_1,amount_token_2).send({from: accounts[0]})
                .then(function (receipt) {
                   console.log(receipt)
            });

        } else {
            window.alert('DragonSwap contract not deployed to detected network')
        }
    }

    return (
        <div>
            {/* background-color: rgb(33, 36, 41) */}
            <Card className="mt-5 card-provide">
                <Card.Header><div className="title">{token1}</div></Card.Header>
                <Card.Body>
                    <Card.Title className="mb-2">ETH/DRG</Card.Title>
                    <Card.Text>
                        <div className="input-field d-flex pb-2">
                            <div className='w-25'>ETH</div>
                            <div className='w-75'>
                                <input type="number" placeholder="Enter amount of token 1..." name="token1" id="token1" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="input-field d-flex pb-2">
                            <div className='w-25'>DRG</div>
                            <div className='w-75'>
                                <input type="number" placeholder="Enter amount of token 2..." name="token2" id="token2" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-around m-3">
                            {/* <div className='info-card'>
                                <div>0.0001</div>
                                <div>ETH per DRG</div>
                            </div>
                            <div className='info-card'>
                                <div>0.0001</div>
                                <div>DRG per ETH</div>
                            </div> */}
                            <div className='info-card'>
                                <div><strong>Liquidty Token</strong></div>
                                <div>0.25%</div>
                            </div>
                        </div>
                    </Card.Text>
                    <Button variant="warning" className="add-liquidity-button" onClick={loadBlockchainData}>Add Liquidity</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
