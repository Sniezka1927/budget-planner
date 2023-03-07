import expenseProps from "../../Interfaces/expenseProps";
import styles from "./Expense.module.css";
import { TiDelete as Icon } from "react-icons/ti";
import BudgetContext from "../../context/budget-context";
import { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
const Expense = (props: expenseProps) => {
  const expenseMonth = props.date.toLocaleString("en-GB", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();

  const budgetCtx = useContext(BudgetContext);
  const removeHandler = () => {
    budgetCtx.removeTransaction(props.id);
  };

  return (
    <React.Fragment>
      <ListGroup.Item className={styles.listItem}>
        <span className={styles.date}>
          <div className={styles.month}>{expenseMonth}</div>
          <div className={styles.day}>{expenseDay}</div>
          <div className={styles.year}>{expenseYear}</div>
        </span>
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItemTitle}>
        <span className={styles.title}>{props.title}</span>
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItem}>
        <span className={styles.title}>{props.categoryTitle}</span>
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItem}>
        <span className={styles.amount}>${String(props.amount)}</span>
      </ListGroup.Item>

      <ListGroup.Item className={styles.listItemBin}>
        <div className={styles.bin} onClick={removeHandler}>
          <Icon size={"1.5rem"} />
        </div>
      </ListGroup.Item>
    </React.Fragment>
  );
};
export default Expense;
