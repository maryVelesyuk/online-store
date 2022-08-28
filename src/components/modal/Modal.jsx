import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Modal.module.css";
import { LoginContext } from "../hok/LoginProvider";
import { authorizedUser } from "../../constants/authorizedUser";
import SvgIcons from "../../icons/SvgIcons";
import InputField from "../inputField/InputField";
import Button from "../button/Button";

export const Modal = ({ switchModalActive }) => {
  return (
    <div className={s.modal} onClick={switchModalActive}>
      <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
        <LogInForm switchModalActive={switchModalActive} />
      </div>
    </div>
  );
};

const LogInForm = ({ switchModalActive }) => {
  const [creds, setCreds] = useState({ email: "", pass: "" });
  const { setIsLogin } = useContext(LoginContext);
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      creds.email === authorizedUser.email &&
      creds.pass === authorizedUser.pass
    ) {
      setIsLogin(true);
      switchModalActive();
      navigate("/");
    } else {
      setError("User is not found");
    }
  };
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <InputField
        type="email"
        name="email"
        value={creds.email}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="email"
      />
      <InputField
        type="password"
        name="pass"
        value={creds.pass}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="password"
      />
      {error && <div className={s.error}>{error}</div>}
      <div className={s.buttons_block}>
        <Button onClick={switchModalActive} text="Cancel" />
        <Button type="submit" text="Sign in" />
      </div>
      <button className={s.close} onClick={switchModalActive}>
        <SvgIcons id="close" />
      </button>
    </form>
  );
};
