import React, { useState, useEffect } from 'react';
import './ProvideComponent.css';
import { Card, Button } from 'react-bootstrap';
import DragonSwap from '../../abis/DragonSwap.json'
import Web3 from 'web3';

export default function ProvideComponent() {
    let [LPTokenReturned, setLPTokenReturned] = useState('to be calculate');
    let [totaltoken1, settotaltoken1] = useState(0);
    let [totaltoken2, settotaltoken2] = useState(0);
    let [token1balances, settoken1balances] = useState(0);
    let [token2balances, settoken2balances] = useState(0);

    useEffect(() => {
        const getDataOnPageLoad = async () => {
            const web3 = new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.requestAccounts()
            const networkId = await web3.eth.net.getId()
            const networkData = DragonSwap.networks[networkId]

            if (networkData) {
                const dragonswap = new web3.eth.Contract(DragonSwap.abi, networkData.address)
                // Check total token1 and token2 in pool
                dragonswap.methods.getPoolDetails().call(function (error, result) {
                    totaltoken1 = settotaltoken1(result[0])
                    totaltoken2 = settotaltoken2(result[1])
                });

                // Check total token1 and token2 in pool
                dragonswap.methods.checkMyBalances().call(function (error, result) {
                    token1balances = settoken1balances(result[0])
                    token2balances = settoken2balances(result[1])
                });
            }
        }
        getDataOnPageLoad()
    }, [])

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
                LPTokenReturned = setLPTokenReturned(result);
            });

            dragonswap.methods.provideLiquidity(amount_token_1, amount_token_2).send({ from: accounts[0] })
                .then(function (receipt) {
                    console.log(receipt)
                });
        } else {
            window.alert('DragonSwap contract not deployed to detected network')
        }
    }

    return (
        <div>
            <Card className="mt-5 card-provide">
                <Card.Header><div className="title">Add Liquidity</div></Card.Header>
                <Card.Body>
                    <Card.Title className="mb-2">ETH/DRG</Card.Title>
                    <Card.Text>
                        <div className='d-flex flex-column pb-2'>
                            <span>Your ETH token balance : <strong>{token1balances}</strong></span>
                            <span>Your DRG token balance : <strong>{token2balances}</strong></span>
                        </div>
                        <div className="input-field d-flex pb-2">
                            <div className='w-25'>ETH</div>
                            <div className='w-75'>
                                <input type="number" placeholder="Enter amount of ETH ..." name="token1" min="1" id="token1" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="input-field d-flex pb-2">
                            <div className='w-25'>DRG</div>
                            <div className='w-75'>
                                <input type="number" placeholder="Enter amount of DRG ..." name="token2" min="1" id="token2" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-around m-3">
                            <div className='info-card'>
                                <div><strong>Total ETH in pool</strong></div>
                                <div>{totaltoken1}</div>
                            </div>
                            <div className='info-card'>
                                <div><strong>Total DRG in pool</strong></div>
                                <div>{totaltoken2}</div>
                            </div>
                            <div className='info-card'>
                                <div><strong>LP Token returned</strong></div>
                                <div style={{fontStyle: 'italic'}}>{LPTokenReturned}</div>
                            </div>
                        </div>
                    </Card.Text>
                    <Button variant="warning" className="add-liquidity-button" onClick={loadBlockchainData}>Add Liquidity</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
