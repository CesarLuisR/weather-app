import React from "react";
import "./styles.scss";

const TodayHighlightsCard = (props) => {
  return (
    <div className={`today-highlights-card ${props.other && "others"}`}>
      <div className="today-highlights-card__title">{props.title}</div>
      <div className="today-highlights-card__info">{props.info}</div>
      {props.other && (
        <div className="today-highlights-card__other">{props.other}</div>
      )}
    </div>
  );
};

export default TodayHighlightsCard;
