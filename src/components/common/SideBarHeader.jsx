import React from "react";

const SideBarHeader = () => {
  return (
    <div className="header">
      <button className="header__btn">Search for places</button>
      <button className="header__btn header__btn--circle">
        <span className="material-icons">gps_fixed</span>
      </button>
    </div>
  );
};

export default SideBarHeader;
