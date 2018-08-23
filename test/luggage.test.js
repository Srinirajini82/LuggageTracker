var luggage = artifacts.require("./luggage.sol");

contract('LuggageCheckIn', function(accounts) {
  const owner = accounts[0]
  const passenger = accounts[1]
  it("should Check in luggage hash to in the smart contract", async () => {
    const Airport = await luggage.deployed();
    var testhash = 'QmTeW79w7QQ6Npa3b1d5tANreCDxF2iDaAPsDvW6KtLmfB';

    await Airport.CheckInLuggage(testhash, {from: passenger});

    const PassengerHash = await Airport.GetLuggageForUsr({from: passenger});
    assert.equal(PassengerHash, testhash, 'Passenger hash did not match');

  });
  it("Should kill the contract" , async() => {
    const Airport = await luggage.deployed();

    await Airport.killLuggage({from: owner});
    //const PassengerHash = await Airport.GetLuggageForUsr({from: passenger});
  })
});
