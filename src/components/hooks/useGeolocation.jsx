import { useState, useEffect } from "react";
import axios from "axios";

const useGeolocation = (updateLocation) => {
  const [locationWeatherInfo, setLocationWeatherInfo] = useState({});
  const [locationError, setLocationError] = useState(false);

  const cors = "https://cors-anywhere.herokuapp.com";

  const axiosOptions = {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const getLocationWeatherInfo = async (latitude, longitude) => {
    const url = `${cors}/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`;
    const resp = await axios.get(url, axiosOptions);
    const weatherInfoUrl = `${cors}/https://www.metaweather.com/api/location/${resp.data[0].woeid}/`;
    const data = await axios.get(weatherInfoUrl, axiosOptions);

    setLocationWeatherInfo({
      today: data.data.consolidated_weather[0],
      otherDay: data.data.consolidated_weather.slice(1),
      location: data.data.title,
    });
  };

  const error = (err) => setLocationError(err);

  useEffect(() => {
    const position = (pos) =>
      getLocationWeatherInfo(pos.coords.latitude, pos.coords.longitude);

    const options = {
      timeout: 5000,
      maximumAge: 0,
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(position, error, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateLocation]);

  return { locationWeatherInfo, locationError };
};

export default useGeolocation;
