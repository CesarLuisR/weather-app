import React from "react";
import "./styles.scss";

const Match = (props) => {
  return (
    <div className="match">
      {props.name}
      <span className="material-icons arrow">navigate_next</span>
    </div>
  );
};

export default Match;
