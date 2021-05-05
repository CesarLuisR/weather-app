import React from "react";
import "./styles.scss";
import loading from "../../../assets/loading.svg";
import SideBarHeader from "../../common/SideBarHeader";
import SideBarMain from "../../common/SideBarMain";
import SideBarFooter from "../../common/SideBarFooter";

const TodayWeather = (props) => {
  const isLoaded = props.data.location;

  return (
    <div className="sidebar">
      {isLoaded ? (
        <>
          <SideBarHeader />
          <SideBarMain
            type={props.data.today.weather_state_name}
            todayMaxTemp={Math.round(String(props.data.today.max_temp))}
          />
          <SideBarFooter
            location={props.data.location}
            date={props.data.today.created}
          />
        </>
      ) : (
        <img src={loading} alt="loading..." className="loading" />
      )}
    </div>
  );
};

export default TodayWeather;
