import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BudgetContext from "../../context/BudgetContext";
import Expense from "./Expense";
import styles from "./Expense.module.css";

const Expenses = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <Container fluid>
          <Row>
            <Col xs={1}>
              <span className={styles.date}>Date</span>
            </Col>
            <Col xs={4}>
              <span className={styles.title}>Transaction Title</span>
            </Col>
            <Col xs={3}>
              <span className={styles.title}>Transaction Category</span>
            </Col>
            <Col xs={3}>
              <span className={styles.amount}>Amount</span>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Container>
      </li>
      {budgetContext.transactions.map((expenseItem) => {
        return (
          <Expense
            key={expenseItem.id}
            id={expenseItem.id}
            amount={expenseItem.amount}
            title={expenseItem.title}
            categoryTitle={expenseItem.categoryTitle}
            date={expenseItem.date}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
