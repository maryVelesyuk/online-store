import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { LoginContext } from "../hok/LoginProvider";

export const Header = ({ setIsModalActive }) => {
  const { isLoggedIn, setIsLogin } = useContext(LoginContext);

  return (
    <header className={s.header}>
      <h1 className={s.title}>
        <Link to="/">Mary's online store</Link>
      </h1>
      <nav className={s.menu}>
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "purple" : "inherit",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          |
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "purple" : "inherit",
              })}
              to="/about"
            >
              About us
            </NavLink>
          </li>
        </ul>
        {isLoggedIn ? (
          <button className={s.auth_btn} onClick={() => setIsLogin(false)}>
            Log Out
          </button>
        ) : (
          <button className={s.auth_btn} onClick={() => setIsModalActive(true)}>
            Log In
          </button>
        )}
      </nav>
    </header>
  );
};
