import React from "react";
import "./styles/App.scss";
import useGeolocation from "./components/hooks/useGeolocation";
import TodayWeather from "./components/layout/TodayWeather";

const App = () => {
  const { locationWeatherInfo, locationError } = useGeolocation();

  return (
    <div className="app-container">
      <TodayWeather data={locationWeatherInfo} />
    </div>
  );
};

export default App;
