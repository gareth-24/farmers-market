import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <React.Fragment>
  
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
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