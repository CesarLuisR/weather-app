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
        setImage(snow);
        break;

      case "Sleet":
        setImage(sleet);
        break;

      case "Hail":
        setImage(hail);
        break;

      case "Thunderstorm":
        setImage(thunderstorm);
        break;

      case "Heavy Rain":
        setImage(heavyRain);
        break;

      case "Light Rain":
        setImage(lightRain);
        break;

      case "Showers":
        setImage(shower);
        break;

      case "Heavy Cloud":
        setImage(heavyCloud);
        break;

      case "Light Cloud":
        setImage(lightCloud);
        break;

      case "Clear":
        setImage(clear);
        break;

      default:
        break;
    }
  }, [weatherType]);

  return image;
};

export default useFilterImage;
