import React, { useState, useEffect } from 'react';
import './ProvideComponent.css';
import { Card, Button } from 'react-bootstrap';

export default function ProvideComponent() {
    return (
        <div>
            {/* background-color: rgb(33, 36, 41) */}
            <Card className="mt-5">
                <Card.Header><h5>Add Liquidity</h5></Card.Header>
                <Card.Body>
                    <Card.Title>ERC-20/ETH</Card.Title>
                    <Card.Text>
                        <div className="input-field d-flex pb-2">
                            <div className='w-25'>ERC-20</div>
                            <div className='w-75'>
                                <input type="text" placeholder="Enter amount of token 1..." name="token1" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="input-field d-flex pb-2">
                            <div className='w-25'>ETH</div>
                            <div className='w-75'>
                                <input type="text" placeholder="Enter amount of token 2..." name="token2" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-around m-3">
                            <div className='info-card'>
                                <div>0.0001</div>
                                <div>ERC-20 per ETH</div>
                            </div>
                            <div className='info-card'>
                            <div>0.0001</div>
                                <div>ERC-20 per ETH</div>
                            </div>
                            <div className='info-card'>
                                <div>0.25%</div>
                                <div>Share of Pool</div>
                            </div>
                        </div>
                    </Card.Text>
                    <Button variant="warning" className="add-liquidity-button">Add Liquidity</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
