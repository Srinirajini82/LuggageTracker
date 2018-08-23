import React, {Component} from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import Web3HandsOn from './Web3fe';
import logo from './images.png'
import LuggageDetailsForCheckIn from './LuggageDetails';

class DrawInput extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      UsrName: "",
      UsrAddr: "",
      AvatarUri:"",
      isLoading: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.w3 = new Web3HandsOn();
    this.Tracker = this.w3.getContractInstance();
    console.log('My Contract address :', this.Tracker);
  }
    async handleLogin(event){
      event.preventDefault();
      this.setState({isLoading: true});

      this.identity =  await this.w3.getDefaultAddres();
      if(this.identity !== undefined )
      {
        console.log('Setting state at first attempt', this.identity);
        this.setState({isLoading: false, UsrAddr:this.identity.specificNetworkAddress,UsrName: this.identity.user.name, AvatarUri:this.identity.user.avatar.uri })
        this.TransactionAddr = this.identity.specificNetworkAddress;
        console.log('address:' + this.TransactionAddr, 'User : ' + this.state.UsrName, 'Avatar : ' + this.state.AvatarUri);
      }
    }

   render(){
      return(
        <div style={styles.headingStyle}>
        <header className="App-header" style={{color:'yellow',backgroundColor:'#e91e63', backgroundPosition: 'left-top'}}>
          <h1 className="App-title">Digital Luggage Tracking</h1>
            <p  style={{padding:'10px'}}> Powered by Ethereum
            <img src={logo} alt="ETH" style={{width:30, height:30,mode:'cover',border: '0px', alignItems:'center'}}/>
            </p>
          {this.state.AvatarUri &&
            <React.Fragment>
              <div className="avatar">
                <div>
                  <p>{this.state.UsrName}</p>
                  <a href="" onClick={this.handleLogout} className="logout">Logout</a>
                </div>
                <img src={this.state.AvatarUri} alt="avatar" />
              </div>
            </React.Fragment>
          }
        </header>
        <Grid>
          <Row className="grid-row">
            {this.state.UsrName ? (
              <LuggageDetailsForCheckIn/>
            ) : (
                <Col sm={6} smOffset={3} className="login">
                  <p className="text-large">This app uses Digital identity management enabled by uPort, for login and transaction approvals.
                      Download the uPort app on your mobile phone to begin.
                      <a href="https://www.uport.me/" rel="noopener noreferrer" target="_blank"> https://www.uport.me/</a>
                  </p>
                    <Button onClick={this.handleLogin}>Login with uPort</Button>
                </Col>
              )}
          </Row>
        </Grid>
        </div>
      )
  }
}

var styles = {
	headingStyle :{
    color:'steelblue',
  	backgroundColor:'powderblue',
  	fontWeight:'bold'
  }
};

export default DrawInput;
