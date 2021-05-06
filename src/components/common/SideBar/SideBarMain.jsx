import React from "react";
import useFilterImage from "../../hooks/useFilterImage";

const SideBarMain = (props) => {
  const image = useFilterImage(props.type);

  return (
    <div className="sidebar__main">
      <div className="sidebar__ilustration">
        <div className="background"></div>
        <img src={image} alt={props.type} className="sidebar__img" />
      </div>
      <div className="sidebar__temperature">
        {Math.round(String(props.todayMaxTemp))}
        <span>°C</span>
      </div>
      <div className="sidebar__temperature-type">{props.type}</div>
    </div>
  );
};

export default SideBarMain;
