import styles from "./FloatingContainer.module.css";
import React from "react";
import floatingContainerProps from "../../Interfaces/floatingContainerProps";

const FloatingContainer = (props: floatingContainerProps) => {
  const onBackdrop = () => {
    props.onBackdrop();
  };
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={onBackdrop}></div>
      <div className={styles.container}>{props.children}</div>
    </React.Fragment>
  );
};
export default FloatingContainer;
