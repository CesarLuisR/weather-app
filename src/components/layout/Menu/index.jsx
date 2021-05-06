import React, { useState } from "react";
import "./styles.scss";
import Match from "../../common/Match";
import useSearchedLocation from "../../hooks/useSearchedLocation";

const Menu = (props) => {
  const [location, setLocation] = useState("");
  const [inputText, setInputText] = useState("");
  const menuState = props.isOpen ? "menu" : "menu disabled";
  const data = useSearchedLocation(location);

  const handleChange = (e) => {
    setLocation(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeInfo(data);
    props.close();
    e.target.reset();
  };

  const matchesToInput = (name) => setInputText(name);

  return (
    <div className={menuState}>
      <div className="closeMenu" onClick={props.close}>
        <span className="material-icons close">close</span>
      </div>
      <form className="search-zone" onSubmit={handleSubmit}>
        <div className="input-container">
          <span className="material-icons">search</span>
          <input
            type="text"
            placeholder="search location"
            onChange={handleChange}
            value={inputText}
          />
        </div>
        <input type="submit" value="Search" className="search-btn" />
      </form>
      <div className="matches-zone">
        {data?.matches &&
          data.matches.map((match, index) => (
            <Match name={match} key={index} click={matchesToInput} />
          ))}
      </div>
    </div>
  );
};

export default Menu;
