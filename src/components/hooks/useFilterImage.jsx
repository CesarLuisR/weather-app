import { useState, useEffect } from "react";
import clear from "../../assets/Clear.png";
import hail from "../../assets/Hail.png";
import heavyCloud from "../../assets/HeavyCloud.png";
import heavyRain from "../../assets/HeavyRain.png";
import lightCloud from "../../assets/LightCloud.png";
import lightRain from "../../assets/LightRain.png";
import shower from "../../assets/shower.png";
import sleet from "../../assets/Sleet.png";
import snow from "../../assets/Snow.png";
import thunderstorm from "../../assets/Thunderstorm.png";

const useFilterImage = (weatherType) => {
  const [image, setImage] = useState();

  useEffect(() => {
    switch (weatherType) {
      case "Snow":
        return setImage(snow);

      case "Sleet":
        return setImage(sleet);

      case "Hail":
        return setImage(hail);

      case "Thunderstorm":
        return setImage(thunderstorm);

      case "Heavy Rain":
        return setImage(heavyRain);

      case "Light Rain":
        return setImage(lightRain);

      case "Showers":
        return setImage(shower);

      case "Heavy Cloud":
        return setImage(heavyCloud);

      case "Light Cloud":
        return setImage(lightCloud);

      case "Clear":
        return setImage(clear);

      default:
        return weatherType;
    }
  }, [weatherType]);

  return image;
};

export default useFilterImage;
