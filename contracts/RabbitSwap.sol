//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract RabbitSwap{
    struct Pool{
        uint256 total_token_1;
        uint256 total_token_2;
        uint256 total_shares;
    }

    struct LiquidityProvider{
        uint256 token_1_balance;
        uint256 token_2_balance;
        uint256 LPToken;
        uint256 share;
    }

    mapping (address => LiquidityProvider) LP;
    mapping (address => uint) trader_balances;
}