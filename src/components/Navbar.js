import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={classes["nav-list"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            New Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
