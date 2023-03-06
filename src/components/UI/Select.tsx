import selectProps from "../../Interfaces/selectProps";
import styles from "./Select.module.css";
import React from "react";
const Select = (props: selectProps) => {
  return (
    <select
      className={styles.select}
      onChange={props.onChangeHandler}
      value={props.value}
    >
      <option value={"choose one"} disabled>
        Choose one
      </option>
      {props.options.map((option) => {
        return (
          <option key={JSON.stringify(option.id)} value={option.title}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};
export default Select;
