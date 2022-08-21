// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ICO is ERC20 {
    // uint public bonusEnds;
    // uint public icoStarts;
    // uint public icoEnds;
    // uint public allContributors;

    
        // name = 'KOiN';
        // symbol = 'KN';

    constructor(string memory tokenName, string memory tokenSymbol, uint totalSupply) ERC20(tokenName, tokenSymbol) {
        _mint(_msgSender(), totalSupply);
    }

}
