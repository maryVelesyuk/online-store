import s from "./InputField.module.css";

const InputField = (props) => {
  return <input className={s.input_field} {...props} />;
};

export default InputField;
