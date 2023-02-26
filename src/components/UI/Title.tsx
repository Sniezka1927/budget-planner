import React from "react";
import styles from "./Title.module.css";
import titleProps from "../../Interfaces/titleProps";

const Title = (props: titleProps) => {
  return <h2 className={styles.title}>{props.children}</h2>;
};

export default Title;
