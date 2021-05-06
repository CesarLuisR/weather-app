import React, { useState } from "react";
import "./styles/App.scss";
import useGeolocation from "./components/hooks/useGeolocation";
import SideBar from "./components/layout/SideBar";

const App = () => {
  const [specificLocation, setSpecificLocation] = useState(false);
  const { locationWeatherInfo } = useGeolocation();

  const changeLocationWeatherInfo = (data) => setSpecificLocation(data);

  return (
    <div className="app-container">
      <SideBar
        data={specificLocation ? specificLocation : locationWeatherInfo}
        changeInfo={changeLocationWeatherInfo}
      />
    </div>
  );
};

export default App;
