import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>Available produce - {props.month}</h3>
      <p><em>{props.selection}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default Produce;