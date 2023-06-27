import React from "react";
import Market from "./Market";
import MarketList from "./MarketList";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDay: 0
    };
  }

  handleClickSunday = () => {
    this.setState(prevState => ({
      formDay: 0
    }))
  }
  handleClickMonday = () => {
    this.setState(prevState => ({
      formDay: 1
    }))
  }

  handleClickTuesday = () => {
    this.setState(prevState => ({
      formDay: 2
    }))
  }
  handleClickWednesday = () => {
    this.setState(prevState => ({
      formDay: 3
    }))
  }
  handleClickThursday = () => {
    this.setState(prevState => ({
      formDay: 4
    }))
  }
  handleClickSaturday = () => {
    this.setState(prevState => ({
      formDay: 5
    }))
  }

  
  render(){
    let currentMarket = null;
    
    //if(this.state.formDay === 1){
    currentMarket = <MarketList formDay={this.state.formDay}/>;          
  
    return(
      <React.Fragment>
        <button onClick={this.handleClickSunday}>Sunday</button>
        <button onClick={this.handleClickMonday}>Monday</button>
        <button onClick={this.handleClickTuesday}>Tuesday</button>
        <button onClick={this.handleClickWednesday}>Wednesday</button>
        <button onClick={this.handleClickThursday}>Thursday</button>
        <button onClick={this.handleClickSaturday}>Saturday</button>
        {currentMarket}
      </React.Fragment>
    );
  }
}


export default MarketControl;