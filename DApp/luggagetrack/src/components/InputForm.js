import React, {Component} from 'react';
import Randomize from 'randomatic';

export default class InputForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      source:"",
      dst:"",
      isChecked: false,
      isLoading: false
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  toggleCheckboxChange(event){
    event.preventDefault();
    this.setState({isChecked:event.target.checked})
  }
  async handleButtonClick(event){
    event.preventDefault();
    const min = 1;
    const max = 100;
    const rand = Math.floor(Math.random() * ((max + 1) - min)) + min;
    this.rand = Randomize('A0',8);
    this.props.onButtonClick({source:this.state.source, dst:this.state.dst, IsTransition:this.state.isChecked, CheckInId:this.rand});
    this.rand = 0;
  }
  render(){
    return(
      <form>
        <h1> Enter Luggage CheckIn details</h1>
        <label style={{padding:'20px'}}> Source Airport </label>
        <input style= {styles.inputStyle} type="text" placeholder='source airport' name="source" value={this.state.source} onChange={this.handleChange.bind(this)} />
      <br/>
        <label style={{padding:'6px'}}> Destination Airport </label>
        <input style= {styles.inputStyle} type="text" placeholder='destination airport' name="dst" value={this.state.dst} onChange={this.handleChange.bind(this)} />
      <br/>
      <br/>
        {this.state.isChecked ? (
          <div>
            <label style={{textAlign:'left'}} >
              <input type="checkbox" checked={this.state.isChecked} name ="isChecked" onChange={this.toggleCheckboxChange.bind(this)} />
              {"Is Transtition to destionation"}
            </label>
            <br/>
            <button onClick={this.handleButtonClick.bind(this)}> ChekIn </button>
          </div>
        ) : (
          <label style={{textAlign:'left'}} >
            <input type="checkbox" checked={this.state.isChecked} name ="isChecked" onChange={this.toggleCheckboxChange} />
            {"Is Transtition to destionation"}
          </label>
        )}
      </form>
    )
  }
}
const styles= {
  inputStyle:{
  padding: '0.5em',
  margin: '0.5em',
  color: 'palevioletred',
  background: 'papayawhip',
  border: 'none',
  borderRadius: '3px',
  }
}
