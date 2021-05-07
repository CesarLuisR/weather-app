import React, { useEffect, useRef } from "react";
import ChangeTempBtn from "../../common/ChangeTempBtn";
import DayInfo from "../../common/DayInfo";
import loading from "../../../assets/loading.svg";
import "./styles.scss";
import TodayHighlightsCard from "../../common/TodayHighlightsCard";

const Main = (props) => {
  const lineContentRef = useRef();
  const nearRef = useRef();

  useEffect(() => {
    if (lineContentRef?.current)
      lineContentRef.current.style.width = `${props.data.today.humidity}%`;
    
    if (nearRef?.current)
      nearRef.current.style.transform = `rotate(${props.data.today.wind_direction}deg)`;
  }, [props]);

  return (
    <div className="main">
      {props.data.location ? (
        <>
          <div className="main__header">
            <div className="temp-changers">
              <ChangeTempBtn
                title="°C"
                active={props.weatherScale === "C" ? true : false}
                changeWeatherScale={props.changeWeatherScale}
              />
              <ChangeTempBtn
                title="°F"
                active={props.weatherScale === "F" ? true : false}
                changeWeatherScale={props.changeWeatherScale}
              />
            </div>
          </div>
          <div className="main__principal-container">
            <div className="others-day">
              {props.data.otherDay.map((day, index) => (
                <DayInfo
                  key={index}
                  id={index}
                  day={day.applicable_date}
                  image={day.weather_state_name}
                  maxTemp={day.max_temp}
                  minTemp={day.min_temp}
                  weatherScale={props.weatherScale}
                />
              ))}
            </div>
            <div className="today-highlights">
              <div className="title">Today's Highlights</div>
              <div className="today-highlight__info">
                <TodayHighlightsCard
                  title="Wind status"
                  info={
                    <div className="info-card">
                      {Math.round(props.data.today.wind_speed)}
                      <span>mph</span>
                    </div>
                  }
                  other={
                    <div className="other-card">
                      <div className="other-circle">
                        <span className="material-icons near" ref={nearRef}>
                          navigation
                        </span>
                      </div>
                      {props.data.today.wind_direction_compass}
                    </div>
                  }
                />
                <TodayHighlightsCard
                  title="Humidity"
                  info={
                    <div className="info-card">
                      {props.data.today.humidity}
                      <span>%</span>
                    </div>
                  }
                  other={
                    <div className="other-card">
                      <div className="line-container">
                        <div className="number">
                          <span>0</span>
                          <span>50</span>
                          <span>100</span>
                        </div>
                        <div className="line">
                          <div
                            className="line-content"
                            ref={lineContentRef}
                          ></div>
                        </div>
                        <div className="porcent">%</div>
                      </div>
                    </div>
                  }
                />
                <TodayHighlightsCard
                  title="Visibility"
                  info={
                    <div className="info-card">
                      {Math.round(props.data.today.visibility)}
                      <span className="unit">miles</span>
                    </div>
                  }
                />
                <TodayHighlightsCard
                  title="Air Pressure"
                  info={
                    <div className="info-card">
                      {props.data.today.air_pressure}
                      <span className="unit">mb</span>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          <footer className="footer">
            Created by Cesar Luis Rijo - devChallenges.io
          </footer>
        </>
      ) : (
        <img src={loading} alt="loading..." className="loading" />
      )}
    </div>
  );
};

export default Main;
