import React from "react";
import useFilterImage from "../../hooks/useFilterImage";
import "./styles.scss";

const DayInfo = (props) => {
  const image = useFilterImage(props.image);

  const d = new Date(`${props.day}T12:00`).toDateString(),
    splitted = d.split(" ");

  const date = `${splitted[0]}, ${Number(splitted[2])} ${splitted[1]}`;

  const changeScale = (degrees) => (degrees * 9) / 5 + 32;

  let maxTemp = props.maxTemp;
  let minTemp = props.minTemp;

  if (props.weatherScale === "F") {
    maxTemp = changeScale(Number(maxTemp));
    minTemp = changeScale(Number(minTemp));
  }

  return (
    <div className="day-info">
      <div className="day">{props.id === 0 ? "Tomorrow" : date}</div>
      <div className="day-info__image">
        <img src={image} alt={date} />
      </div>
      <div className="temps">
        <div className="max-temp">
          {Math.round(maxTemp)}°{props.weatherScale}
        </div>
        <div className="min-temp">
          {Math.round(minTemp)}°{props.weatherScale}
        </div>
      </div>
    </div>
  );
};

export default DayInfo;
