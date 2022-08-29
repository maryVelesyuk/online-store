import { useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import s from "./Header.module.css";
import { Cart } from "../cart/Cart";
import { Modal } from "../modal/Modal";
import Button from "../button/Button";
import { logOut } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const match = useMatch("/cart");
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  const switchModalActive = () => {
    setIsModalActive(!isModalActive);
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
          {isAuth ? (
            <Button
              className={s.auth_btn}
              onClick={() => {
                dispatch(logOut());
              }}
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
      {isAuth && !match && <Cart />}
      {isModalActive && <Modal switchModalActive={switchModalActive} />}
    </>
  );
};
