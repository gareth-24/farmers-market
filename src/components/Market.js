import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <React.Fragment>
      <h3>hi</h3>
    </React.Fragment>
  )
}

Market.PropTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Market;