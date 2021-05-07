import React from "react";
import useFilterImage from "../../hooks/useFilterImage";

const SideBarMain = (props) => {
  const image = useFilterImage(props.type);

    const changeScale = (degrees) => (degrees * 9) / 5 + 32;

    let maxTemp = props.todayMaxTemp;

    if (props.weatherScale === "F") 
      maxTemp = changeScale(Number(maxTemp));
    
  return (
    <div className="sidebar__main">
      <div className="sidebar__ilustration">
        <div className="background"></div>
        <img src={image} alt={props.type} className="sidebar__img" />
      </div>
      <div className="sidebar__temperature">
        {Math.round(String(maxTemp))}
        <span>°{props.weatherScale}</span>
      </div>
      <div className="sidebar__temperature-type">{props.type}</div>
    </div>
  );
};

export default SideBarMain;
