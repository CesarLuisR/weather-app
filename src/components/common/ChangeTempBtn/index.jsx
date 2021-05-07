import React from "react";
import "./styles.scss";

const ChangeTempBtn = (props) => {
  return (
    <div
      className={`change-temp-btn ${props.active ? "active" : "inactive"}`}
      onClick={props.changeWeatherScale}
    >
      {props.title}
    </div>
  );
};

export default ChangeTempBtn;
