import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { LoginContext } from "../hok/LoginProvider";
import { Cart } from "../cart/Cart";
import { Modal } from "../modal/Modal";
import Button from "../button/Button";

export const Header = ({ cart }) => {
  const { isLoggedIn, setIsLogin } = useContext(LoginContext);
  const [isModalActive, setIsModalActive] = useState(false);

  const switchModalActive = () => {
    setIsModalActive(!isModalActive);
  };

  const switchAuth = () => {
    setIsLogin(!isLoggedIn);
  };

  return (
    <>
      <header className={s.header}>
        <h1 className={s.title}>
          <Link to="/">Mary's online store</Link>
        </h1>
        <nav className={s.menu}>
          <ul>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "active_nav_link" : "nav_link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            |
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? "active_nav_link" : "nav_link"
                }
                to="/about"
              >
                About us
              </NavLink>
            </li>
          </ul>
          {isLoggedIn ? (
            <Button
              className={s.auth_btn}
              onClick={switchAuth}
              text="Log Out"
            />
          ) : (
            <Button
              className={s.auth_btn}
              onClick={switchModalActive}
              text="Log In"
            />
          )}
        </nav>
      </header>
      {isLoggedIn && <Cart cart={cart} />}
      {isModalActive && <Modal switchModalActive={switchModalActive} />}
    </>
  );
};
