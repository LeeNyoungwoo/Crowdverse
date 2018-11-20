import React from "react";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  const activeStyle = {
    color: "green",
    fontSize: "2rem"
  };

  return (
    <div>
      <ul>
        <li>
          <Link exact to="/" activeStyle={activeStyle}>
            Home
          </Link>
        </li>
        <li>
          <NavLink to="/perspective/politic" activeStyle={activeStyle}>
            Politics
          </NavLink> 
        </li>
        <li>
          <NavLink to="/perspective/social" activeStyle={activeStyle}>
            Social
          </NavLink>
        </li>
        <li>
          <NavLink to="/perspective/technology" activeStyle={activeStyle}>
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink to="/event/TheEraofNoWar" activeStyle={activeStyle}>
            The Era of No War
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;
