import React, { useState } from "react";
import "./styles.scss";
import loading from "../../../assets/loading.svg";
import SideBarHeader from "../../common/SideBar/SideBarHeader";
import SideBarMain from "../../common/SideBar/SideBarMain";
import SideBarFooter from "../../common/SideBar/SideBarFooter";
import Menu from "../Menu";

const SideBar = (props) => {
  const isLoaded = props.data.location;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div className="sidebar">
      {isLoaded ? (
        <>
          <SideBarHeader open={handleOpenMenu} changeInfo={props.changeInfo} />
          <SideBarMain
            type={props.data.today.weather_state_name}
            todayMaxTemp={Math.round(String(props.data.today.max_temp))}
            weatherScale={props.weatherScale}
          />
          <SideBarFooter
            location={props.data.location}
            date={props.data.today.created}
          />
          <Menu
            isOpen={isOpen}
            close={handleCloseMenu}
            changeInfo={props.changeInfo}
          />
        </>
      ) : (
        <img src={loading} alt="loading..." className="loading" />
      )}
    </div>
  );
};

export default SideBar;
