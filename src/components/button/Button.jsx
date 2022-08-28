import s from "./Button.module.css";

const Button = ({ text, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {text}
    </button>
  );
};
export default Button;
