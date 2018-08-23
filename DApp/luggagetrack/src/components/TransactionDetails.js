import React from 'react';

const TransactionDetails = (props)=> {
  return (
    <div>
      <h4> Transaction Successfull!!</h4>
      <p>Ethereum Transaction Hash : {props.txhash}</p>
      <br/>
      <p>Check in ID : {props.CheckInId}</p>
    </div>
  )
}

export default TransactionDetails;
