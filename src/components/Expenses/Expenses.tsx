import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import BudgetContext from "../../context/BudgetContext";
import Expense from "./Expense";
import styles from "./Expense.module.css";
import ListGroup from "react-bootstrap/ListGroup";

const Expenses = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <Container fluid>
      {window.innerWidth > 768 ? (
        <ListGroup horizontal={"sm"} className="my-2">
          <ListGroup.Item className={styles.listItem}>Date</ListGroup.Item>
          <ListGroup.Item className={styles.listItemTitle}>
            Transaction Title
          </ListGroup.Item>
          <ListGroup.Item className={styles.listItem}>Category</ListGroup.Item>
          <ListGroup.Item className={styles.listItem}>Amount</ListGroup.Item>
          <ListGroup.Item className={styles.listItemBin}></ListGroup.Item>
        </ListGroup>
      ) : null}

      {budgetContext.transactions.map((expenseItem) => {
        return (
          <ListGroup horizontal={"sm"} className="my-2">
            <Expense
              key={expenseItem.id}
              id={expenseItem.id}
              amount={expenseItem.amount}
              title={expenseItem.title}
              categoryTitle={expenseItem.categoryTitle}
              date={expenseItem.date}
            />
          </ListGroup>
        );
      })}
    </Container>
  );
};

export default Expenses;
