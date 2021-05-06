import React, { useState } from "react";
import useGeolocation from "../../hooks/useGeolocation";

const SideBarHeader = (props) => {
  const [controllerUpdate, setControllerUpdate] = useState([]);

  useGeolocation(controllerUpdate);

  const handleUpdateGeolocation = () => {
    setControllerUpdate(...controllerUpdate, "update");
    props.changeInfo(false);
  }

  return (
    <div className="header">
      <button className="header__btn" onClick={props.open}>
        Search for places
      </button>
      <button
        className="header__btn header__btn--circle"
        onClick={handleUpdateGeolocation}
      >
        <span className="material-icons">gps_fixed</span>
      </button>
    </div>
  );
};

export default SideBarHeader;
