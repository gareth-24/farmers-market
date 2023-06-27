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
  
  render(){
    let currentMarket = null;
    // let currentlyVisibleState = null;
    if(this.state.formDay === 1){
      currentMarket = <MarketList formDay={this.state.formDay}/>;
      // currentlyVisibleState = currentMarket[1];            
    } 
    // else if(this.state.formDay === 2){

    // }
    return(
      <React.Fragment>
        <button onClick={this.handleClickMonday}>Monday</button>
        <button onClick={this.handleClickTuesday}>Tuesday</button>
        {currentMarket}
      </React.Fragment>
    );
  }
}


export default MarketControl;