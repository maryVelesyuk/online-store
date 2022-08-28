import React from "react";
import { ErrorMessage } from "../../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import s from "./Page404.module.css";

export const Page404 = ({ error = "" }) => {
  return (
    <div>
      <ErrorMessage />
      <p className={s.error_message}>{error ? error : "Page doesn't exist"}</p>
      {!error && (
        <Link className={s.back} to="/">
          Back to home page
        </Link>
      )}
    </div>
  );
};
