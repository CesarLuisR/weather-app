import React, { Fragment } from "react";
import "./styles.scss";
import loading from "../../../assets/loading.svg";
import useFilterImage from "../../hooks/useFilterImage";

const TodayWeather = (props) => {
  const formatDate = (date) => {
    const d = new Date(date).toDateString(),
      splittedDate = d.split(" "),
      number = Number(splittedDate[2]);

    return `${splittedDate[0]}, ${number} ${splittedDate[1]}`;
  };

  // UI components
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

  const SideBarMain = () => {
    const image = useFilterImage(props.data.today.weather_state_name);

    return (
      <div className="sidebar__main">
        <div className="sidebar__ilustration">
          <div className="background"></div>
          <img
            src={image}
            alt={props.data.today.weather_state_name}
            className="sidebar__img"
          />
        </div>
        <div className="sidebar__temperature">
          {Math.round(String(props.data.today.max_temp))}
          <span>°C</span>
        </div>
        <div className="sidebar__temperature-type">
          {props.data.today.weather_state_name}
        </div>
      </div>
    );
  };

  const SideBarFooter = () => {
    return (
      <div className="sidebar__footer">
        <div className="sidebar__date">
          Today
          <span>-</span>
          {formatDate(props.data.today.applicable_date)}
        </div>
        <div className="sidebar__location">
          <span className="material-icons">location_on</span>
          {props.data.location}
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar">
      {props.data.location ? (
        <Fragment>
          <SideBarHeader />
          <SideBarMain />
          <SideBarFooter />
        </Fragment>
      ) : (
        <img src={loading} alt="loading..." className="loading" />
      )}
    </div>
  );
};

export default TodayWeather;
