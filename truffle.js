var HDWalletProvider = require('truffle-hdwallet-provider');
//var mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';
var mnemonic = 'celery robot vague amazing anchor order receive napkin anger genuine manual arrow';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function(){
        return new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/33b95bbeaa8e410181be311c89ff800d" );
      },
      network_id: 5,
      gas: 700000,
      gasPrice: 10000000000
    },
  },
};
