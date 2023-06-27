import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <React.Fragment>
  
      <h3>{props.day}</h3>
      <h3>Location: <em>{props.location}</em></h3>
      <h3>Hours: <em>{props.hours}</em></h3>
      <h3>Booth: <em>{props.booth}</em></h3>
      <hr/>
    </React.Fragment>
  )
}

Market.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Market;