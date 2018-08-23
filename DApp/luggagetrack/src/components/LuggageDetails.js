import React, {Component, PropTypes} from 'react';
import Web3HandsOn from './Web3fe';
import InputForm from './InputForm';
import Loader from './Loader';
import { setJSON, getJSON } from './Ipfs';
import TransactionDetails from './TransactionDetails';

class LuggageDetailsForCheckIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked: false,
      isLoading: false
    }
    this.w3 = new Web3HandsOn();
    this.Tracker = this.w3.getContractInstance();
    console.log('My Contract address :', this.Tracker);
  }

  async DoChekIn(hash){
    this.setState({isLoading : true})
    console.log('TxHash' , this.TxHash);
    this.Tracker.CheckInLuggage(hash, {from: this.TransactionAddr}, (error, TxHash) => {
    if(error){
      this.setState({isLoading : false})
       console.log('could not do transaction');
    }else{
      console.log('TxHash', TxHash);
      this.TxHash = TxHash;
      this.setState({isLoading : false})
      }
   })
  }
  async handleButtonClick(usrData){
    const min = 10;
    const max = 100000;
    const rand = Math.floor(Math.random() * ((max + 1) - min)) + min;
    this.CheckId = usrData.CheckInId;
    const hash = await setJSON(this,{source:usrData.source, dst:usrData.dst, IsTransition:usrData.IsTransition, CheckInId:usrData.CheckInId})
    this.setState({isLoading: true})
  }
  async ipfsCallbck(inst, hash){
    console.log('Going to Checkin the luggage');
    if(hash != undefined){
      await inst.DoChekIn(hash)
    }
    else{
      console.log('Could not add hash to IPFS');
    }
  }

  render(){
    if(this.TxHash !== undefined){
      var TxHash = this.TxHash;
      var CheckInid = this.CheckId;
      this.TxHash = undefined;
      this.CheckId = undefined;
      console.log('Transaction ID : ' + TxHash + 'Check in ID : ' + CheckInid);
      return (
          <TransactionDetails txhash={TxHash} CheckInId={CheckInid}/>
      )
    }
    else{
      return(
        <div className="ChekInForm">
        {this.state.isLoading ? <Loader/> :
          <InputForm onButtonClick={this.handleButtonClick.bind(this)}/>
        }
        </div>
      )
    }
  }
}
export default LuggageDetailsForCheckIn;
