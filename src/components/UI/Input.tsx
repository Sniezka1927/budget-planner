import inputProps from "../../Interfaces/inputProps";
import styles from "./Input.module.css";
const Input = (props: inputProps) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChangeHandler}
      placeholder={props.placeholder}
      className={styles.input}
    ></input>
  );
};
export default Input;
