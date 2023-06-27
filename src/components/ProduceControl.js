import React from "react";
import ProduceList from "./ProduceList";
import Produce from './Produce';

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formMonthCounter: 0
    };
  }

  handleClickPrevious = () => {
    if(this.state.formMonthCounter === 0){
      this.setState(prevState => ({
        formMonthCounter: 12
      }))
    }

    this.setState(prevState => ({
      formMonthCounter: prevState.formMonthCounter -1
    }));
  }

  handleClickNext = () => {
    if(this.state.formMonthCounter === 11){
      this.setState(prevState => ({
        formMonthCounter: -1
      }))
    }

    this.setState(prevState => ({
      formMonthCounter: prevState.formMonthCounter + 1
    }));
    
  }

  render(){
    let currentSelection = null;
    
    currentSelection = <ProduceList formMonthCounter={this.state.formMonthCounter}/>;
    
    return (
      <React.Fragment>
        <button onClick={this.handleClickPrevious}>Previous Month</button>
        <button onClick={this.handleClickNext}>Next Month</button>
        {currentSelection}
      </React.Fragment>
    );
  }

}

export default ProduceControl;