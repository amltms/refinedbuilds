import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <NavLink activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" exact to="/components">
        Components
      </NavLink>
      <NavLink activeClassName="active" exact to="/help">
        Help
      </NavLink>
    </nav>
  );
};
