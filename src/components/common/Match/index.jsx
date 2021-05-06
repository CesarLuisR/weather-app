import React from "react";
import "./styles.scss";

const Match = (props) => {
  return (
    <div className="match" onClick={() => props.click(props.name)}>
      <span>{props.name}</span>
      <span className="material-icons arrow">navigate_next</span>
    </div>
  );
};

export default Match;
