import React, {Component} from 'react';
import luggageArtifacts from '../contract/luggage.json';
import {web3,initAccount} from './userAddress';


class Web3HandsOn extends Component{
  constructor(props){
    super(props)
    this.contractAbi = web3.eth.contract(luggageArtifacts.abi)
    this.contractdeploy = this.contractAbi.at('0x8d9ae1a4257f7e7361b6dced1ec94f1dc0ba7037');
  }

  getContractInstance(){
    return this.contractdeploy;
  }

  async getDefaultAddres(){
    const identity = await initAccount();
    this.specificNetworkAddress = identity.specificNetworkAddress;
    return identity;
  }
}

export default Web3HandsOn;
