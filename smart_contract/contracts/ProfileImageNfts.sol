//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProfileImageNfts is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    mapping(uint256 => string) _tokenURIs;

    /**
     * @dev the Token Object
     */
    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileImageNfts", "piNFT") {}

    /**
     * @notice sets the Token URI mapping
     * @dev should not be called from outside
     * @param tokenId the given token ID
     * @param _tokenURI the given token URI
     */
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    /**
     * @notice gets the tokenURI
     * @dev requires tokenId to be exists
     * @param tokenId the given token ID
     * @return _RUri the token URI of given ID
     */
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), "URI does not exists for that ID");
        string memory _RUri = _tokenURIs[tokenId];
        return _RUri;
    }

    /**
     * @notice gets all available tokens
     * @dev returns an array of structs based on _tokenURIs size
     * @return _RUri the token URI of given ID
     */
    function getAllTokens() public view returns (RenderToken[] memory) {
        uint256 latestId = _tokenIds.current();
        RenderToken[] memory res = new RenderToken[](latestId);

        for (uint256 i = 0; i <= latestId; i++) {
            if (_exists(i)) {
                string memory uri = tokenURI(i);
                res[i] = RenderToken(i, uri, " ");
            }
        }
        return res;
    }

    /**
     * @notice mint an NFT
     * @param recipents the recipient's address
     * @param _uri the token URI's
     * @return newId the newly created token Id
     */
    function mint(address recipents, string memory _uri)
        public
        returns (uint256)
    {
        uint256 newId = _tokenIds.current();

        _mint(recipents, newId);
        _setTokenURI(newId, _uri);

        _tokenIds.increment();
        return newId;
    }
}
