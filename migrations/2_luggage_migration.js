var luggage = artifacts.require("./luggage.sol");
module.exports = function(deployer) {
  deployer.deploy(luggage);
};
