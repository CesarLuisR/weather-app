import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [locationWeatherInfo, setLocationWeatherInfo] = useState({});
  const [locationError, setLocationError] = useState(false);

  const getLocationWeatherInfo = (latitude, longitude) => {
    const url = `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`;

    const fetchOptions = {
      mode: "cors",
      "Access-Control-Allow-Origin": "*",
    };

    fetch(url, fetchOptions)
      .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
      .then((data) => {
        console.log(data);
        setLocationWeatherInfo(data);
      })
      .catch((err) => console.log("error:", err));
  };

  const position = (pos) => {
    getLocationWeatherInfo(pos.coords.latitude, pos.coords.longitude);
  };

  const error = (err) => setLocationError(true);

  const options = {
    timeout: 5000,
    maximumAge: 0,
    enableHighAccuracy: true,
  };

  navigator.geolocation.getCurrentPosition(position, error, options);

  useEffect(() => {
    // console.log(locationWeatherInfo, locationError);
  }, [locationWeatherInfo, locationError]);
};

export default useGeolocation;
