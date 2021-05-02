import React from "react";
import useGeolocation from "./components/hooks/useGeolocation";

const App = () => {
  const locationWeatherInfo = useGeolocation();

  if (locationWeatherInfo) console.log(locationWeatherInfo);

  return <div className="app-container">Buenos dias</div>;
};

export default App;
