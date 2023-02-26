import labelProps from "../../Interfaces/labelProps";
import styles from "./Label.module.css";
const Label = (props: labelProps) => {
  return <label className={styles.label}>{props.children}</label>;
};
export default Label;
