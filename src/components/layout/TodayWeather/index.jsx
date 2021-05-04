import React from "react";
import "./styles.scss";
import image from "../../../assets/shower.png";
import loading from "../../../assets/loading.svg";

const TodayWeather = (props) => {
  // console.log(props.data);

  const isLoaded = props.data.location;

  const formatDate = (date) => {
    const d = new Date(date).toDateString();
    const splittedDate = d.split(" ");

    let day = splittedDate[0];
    let month = splittedDate[1];
    let number = Number(splittedDate[2]) + 1;

    return `${day}, ${number} ${month}`;
  };

  return (
    <div className="today-weather">
      {isLoaded ? (
        <>
          <div className="today-weather__header">
            <button className="search-for-places-btn">Search for places</button>
            <button className="btn-idontnow">
              <span className="material-icons">gps_fixed</span>
            </button>
          </div>
          <div className="today-weather__main">
            <div className="today-weather__ilustration">
              <div className="background"></div>
              <img src={image} alt="xd" className="today-weather__img" />
            </div>
            <div className="today-weather__temperature">
              {Math.round(String(props.data.today.max_temp))}
              <span>°C</span>
            </div>
            <div className="today-weather__temperature-type">
              {props.data.today.weather_state_name}
            </div>
          </div>
          <div className="today-weather__footer">
            <div className="today-weather__date">
              Today <span>-</span>{" "}
              {formatDate(props.data.today.applicable_date)}
            </div>
            <div className="today-weather__location">
              <span className="material-icons">location_on</span>
              {props.data.location}
            </div>
          </div>
        </>
      ) : (
        <img src={loading} alt="loading..." className="loading" />
      )}
    </div>
  );
};

export default TodayWeather;
