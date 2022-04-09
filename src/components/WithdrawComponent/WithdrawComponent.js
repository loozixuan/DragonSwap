import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './WithdrawComponent.css';
import { Card, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function WithdrawComponent() {
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
                    <Button  className="withdraw-btn">Withdraw</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
