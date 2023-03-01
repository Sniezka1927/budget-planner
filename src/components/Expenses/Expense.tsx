import { Col, Container, Row } from "react-bootstrap";
import expenseProps from "../../Interfaces/expenseProps";
import styles from "./Expense.module.css";
import { TiDelete as Icon } from "react-icons/ti";
import BudgetContext from "../../context/BudgetContext";
import { useContext } from "react";
const Expense = (props: expenseProps) => {
  const expenseMonth = props.date.toLocaleString("en-GB", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();

  const budgetCtx = useContext(BudgetContext);
  const removeHandler = () => {
    budgetCtx.removeTransaction(props.id);
  };

  return (
    // <li className={styles.container}>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Container fluid>
        <Row>
          <Col xs={1}>
            <span className={styles.date}>
              <div className={styles.month}>{expenseMonth}</div>
              <div className={styles.day}>{expenseDay}</div>
              <div className={styles.year}>{expenseYear}</div>
            </span>
          </Col>
          <Col xs={4}>
            <span className={styles.title}>{props.title}</span>
          </Col>
          <Col xs={3}>
            <span className={styles.title}>{props.categoryTitle}</span>
          </Col>
          <Col xs={3}>
            <span className={styles.amount}>
              ${JSON.stringify(props.amount)}
            </span>
          </Col>
          <Col xs={1}>
            <span className={styles.bin} onClick={removeHandler}>
              <Icon size={"1.5rem"} />
            </span>
          </Col>
        </Row>
      </Container>
    </li>
  );
};
export default Expense;
