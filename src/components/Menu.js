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
            Politic
          </NavLink> 
        </li>
        <li>
          <NavLink to="/perspective/social" activeStyle={activeStyle}>
            social
          </NavLink>
        </li>
        <li>
          <NavLink to="/perspective/technology" activeStyle={activeStyle}>
            technology
          </NavLink>
        </li>
        <li>
          <NavLink to="/event/foo" activeStyle={activeStyle}>
            Event foo
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;
