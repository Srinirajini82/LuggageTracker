pragma solidity ^0.4.18;

/** @title Airport luggage Check-In Ap */

contract luggage{
  /** @dev Will facilitate the air traveller to track their luggage while on-boarding.
  * @param Mapping between the address of the user and the IPFS hash which contains details.
  * @return the Checkin ID.
  */
  mapping (address => string) luggageID;
  //Address of the owner who deployed the App
  address luggageTracker;

  //Constructor which will store the address of the deployer
  constructor() public {
    luggageTracker = msg.sender;
  }

  event luggageAdded(string hash, address from);

  function CheckInLuggage(string hash) payable public returns(bool)
  {
    luggageID[msg.sender] = hash;
    emit luggageAdded(hash, msg.sender);
    return true;
  }

  //this function will retun the IPFS hash of the customer luggage check-In details
  function GetLuggageForUsr() public view returns(string)
  {
      return luggageID[msg.sender];
  }

  modifier isOwner() {
        require(msg.sender == luggageTracker);
        _;
    }

  //This function will send the balance to owner's account and selfdestruct the contract
  function killLuggage() isOwner public returns (bool)
  {
    selfdestruct(luggageTracker);
    return true;
  }
}
