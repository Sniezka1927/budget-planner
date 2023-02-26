import buttonProps from "../../Interfaces/buttonProps";
import styles from "./Button.module.css";
const Button = (props: buttonProps) => {
  return (
    <button onClick={props.onClickHandler} className={styles.btn}>
      {props.children}
    </button>
  );
};

export default Button;
