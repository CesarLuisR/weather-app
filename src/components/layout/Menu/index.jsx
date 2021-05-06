import React from "react";
import "./styles.scss";

const Menu = (props) => {
  const menuState = props.isOpen ? "menu" : "menu disabled";

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const close = (e) => {
    const element = e.target.parentElement.parentElement;
    element.style.animation = "closeMenu 0.8s";
  }

  return (
    <div className={menuState}>
      <div
        className="closeMenu"
        onClick={(e) => {
          props.close();
          close(e);
        }}
      >
        <span className="material-icons close">close</span>
      </div>
      <form className="search-zone" onSubmit={handleSubmit}>
        <div className="input-container">
          <span className="material-icons">search</span>
          <input type="text" placeholder="search location" />
        </div>
        <input type="submit" value="Search" className="search-btn" />
      </form>
      <div className="matches-zone">
        <div className="item">
          London
          <span className="material-icons arrow">navigate_next</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
