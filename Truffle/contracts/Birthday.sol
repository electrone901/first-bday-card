// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC721/ERC721.sol";

// pragma solidity ^0.6.12;
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Birthday is ERC721 {
    event BirthdayNFTCreated (
        uint tokenId,
        string imageURL,
        uint date,
        address payable from
    );

    constructor() ERC721("Birthday", "BDAY") public  {}

    function mintCardNFT(string memory _tokenURI) external {
        uint _tokenId = totalSupply().add(1);
        _safeMint(msg.sender, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);

        emit BirthdayNFTCreated(_tokenId, _tokenURI, now, msg.sender);
    }

}
