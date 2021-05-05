import React from "react";
import "./styles/App.scss";
import useGeolocation from "./components/hooks/useGeolocation";
import SideBar from "./components/layout/SideBar";

const App = () => {
  const { locationWeatherInfo } = useGeolocation();

  return (
    <div className="app-container">
      <SideBar data={locationWeatherInfo} />
    </div>
  );
};

export default App;
