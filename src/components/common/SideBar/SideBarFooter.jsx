import React from "react";

const SideBarFooter = (props) => {
  const d = new Date(props.date).toDateString(),
    splitted = d.split(" ");

  const date = `${splitted[0]}, ${Number(splitted[2])} ${splitted[1]}`;

  return (
    <div className="sidebar__footer">
      <div className="sidebar__date">
        Today <span>-</span> {date}
      </div>
      <div className="sidebar__location">
        <span className="material-icons">location_on</span>
        {props.location}
      </div>
    </div>
  );
};

export default SideBarFooter;
