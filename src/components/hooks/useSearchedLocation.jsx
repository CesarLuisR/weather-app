import { useState, useEffect } from "react";
import axios from "axios";

const useSearchedLocation = (name) => {
  const [location, setLocation] = useState();

  const cors = "https://cors-anywhere.herokuapp.com";

  const axiosOptions = {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const getSearchedLocation = async () => {
    const url = `${cors}/https://www.metaweather.com/api/location/search/?query=${name.toLowerCase()}`;
    const matches = await axios.get(url, axiosOptions);
    const searchedLocationUrl = `${cors}/https://www.metaweather.com/api/location/${matches?.data[0]?.woeid}/`;
    const location = await axios.get(searchedLocationUrl, axiosOptions);

    const matchesDisplayed = await matches.data.map((element) => element.title);
    matchesDisplayed.length = 3;

    setLocation({
      today: location.data.consolidated_weather[0],
      otherDay: location.data.consolidated_weather.slice(1),
      matches: matchesDisplayed,
      location: location.data.title,
    });
  };

  useEffect(() => {
    if (name === "") return;
    getSearchedLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return location;
};

export default useSearchedLocation;
