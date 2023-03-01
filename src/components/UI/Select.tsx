import selectProps from "../../Interfaces/selectProps";
import styles from "./Select.module.css";
const Select = (props: selectProps) => {
  return (
    <select className={styles.select} onChange={props.onChangeHandler}>
      <option value={"choose one"} disabled>
        Choose one
      </option>
      {props.options.map((option) => {
        return (
          <option key={option.id} value={option.title}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};
export default Select;
