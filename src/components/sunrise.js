import React from "react";

const Sun = (props) => {
  let unix_timestamp = props.sunset;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();

  // Will display time in 10:30:23 format
  var formattedTime = hours + ":" + minutes.substr(-2);

  return <div>{props.sunset ? "Sunset: " + formattedTime : ""}</div>;
};

export default Sun;
