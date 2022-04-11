import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './WithdrawComponent.css';
import { Card, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DragonSwap from '../../abis/DragonSwap.json'
import Web3 from 'web3';

export default function WithdrawComponent() {

    let [enteredToken, setEnteredToken] = useState(0);
    let [totaltoken1, settotaltoken1] = useState(0);
    let [totaltoken2, settotaltoken2] = useState(0);
    let [totalLPToken, settotalLPToken] = useState(0);
    let [token1Estimate, settoken1Estimate] = useState(0);
    let [token2Estimate, settoken2Estimate] = useState(0);

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

                dragonswap.methods.getProviderLPToken().call(function (error, result) {
                    totalLPToken = settotalLPToken(result);
                });
            }
        }
        getDataOnPageLoad()
    }, [])


    const handleToken1Change = async (e) => {

        const web3 = new Web3(window.web3.currentProvider);
        const networkId = await web3.eth.net.getId();
        const accounts = await web3.eth.requestAccounts();
        console.log("Account:" + accounts);
        const networkData = DragonSwap.networks[networkId]
        if (networkData) {
            console.log("N" + networkData)
            const dragonswap = new web3.eth.Contract(DragonSwap.abi, networkData.address)
            console.log(dragonswap);
            var amount_token_1 = e.target.value;
            console.log("Enter" + amount_token_1);
            dragonswap.methods.getWithdrawTokenEstimate(web3.utils.toWei(amount_token_1)).call(function (error, result) {
                console.log("Estimate:" + result)
                token1Estimate = settoken1Estimate(result[0])
                token2Estimate = settoken2Estimate(result[1])
            });

        } else {
            window.alert('DragonSwap contract not deployed to detected network')
        }
    }



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

            dragonswap.methods.provideLiquidity(amount_token_1, amount_token_2).send({ from: accounts[0] })
                .then(function (receipt) {
                    console.log(receipt)
                });
        } else {
            window.alert('DragonSwap contract not deployed to detected network')
        }
    }



    return (
        <div >
            {/* background-color: rgb(33, 36, 41) */}
            <Card className="mt-5">
                <Card.Header><h5>Withdraw Liquidity</h5></Card.Header>
                <Card.Body>
                    <Card.Title>
                        ETH/DRG Pool Token
                    </Card.Title>
                    <Card.Text>
                        <div className="pool-token">
                            <div className='label'>Your pool tokens:</div>
                            <div className="" >{totalLPToken}</div>
                        </div>
                        {/* <div className="pool-share">
                            <div className='label'>Your pool share :</div>
                            <div className="float:right">0.3%</div>
                        </div> */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">ERC-20</InputGroup.Text>
                            <FormControl
                                type="text"
                                placeholder="Enter LP Token to withdraw..."
                                id="token1"

                                onChange={handleToken1Change}
                            />
                        </InputGroup>
                        <div className="token-get-back">
                            <div className="pool-token">
                                <div className='label'>Token you will get:</div>
                            </div>
                            <div className="pool-token">
                                <div className='label'>ETH :</div>
                                <div className="" >{token1Estimate}</div>
                            </div>
                            <div className="pool-token">
                                <div className='label'>DRG:</div>
                                <div className="" >{token2Estimate}</div>
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
                                <div style={{ fontStyle: 'italic' }}>{totalLPToken}</div>
                            </div>
                        </div>

                    </Card.Text>
                    <Button className="withdraw-btn" onClick={loadBlockchainData}>Withdraw</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
