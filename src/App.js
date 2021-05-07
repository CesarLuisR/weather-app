import React, { useState } from "react";
import "./styles/App.scss";
import useGeolocation from "./components/hooks/useGeolocation";
import SideBar from "./components/layout/SideBar";
import Main from "./components/layout/Main";

const App = () => {
  const { locationWeatherInfo, locationError } = useGeolocation();
  const [specificLocation, setSpecificLocation] = useState(false);
  const [weatherScale, setWeatherScale] = useState("C");

  const changeLocationWeatherInfo = (data) => setSpecificLocation(data);

  const changeWeatherScale = () => {
    if (weatherScale === "C") setWeatherScale("F");
    else setWeatherScale("C");
  };

  return (
    <div className={`app-container ${locationError && "app-error"}`}>
      {locationError ? (
        <div className="error">{locationError.message}</div>
      ) : (
        <>
          <SideBar
            weatherScale={weatherScale}
            data={specificLocation ? specificLocation : locationWeatherInfo}
            changeInfo={changeLocationWeatherInfo}
          />
          <Main
            weatherScale={weatherScale}
            changeWeatherScale={changeWeatherScale}
            data={specificLocation ? specificLocation : locationWeatherInfo}
          />
        </>
      )}
    </div>
  );
};

export default App;
