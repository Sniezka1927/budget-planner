import { Col, Container, Row } from "react-bootstrap";
import Category from "./Category";
import styles from "./Category.module.css";
import { useContext } from "react";
import BudgetContext from "../../context/BudgetContext";

const Categories = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <Container fluid>
          <Row>
            <Col xs={4}>
              <span className={styles.title}>Category Title</span>
            </Col>
            <Col xs={2}>
              <span className={styles.amount}>Amount Spent so far</span>
            </Col>
            <Col xs={2}>
              <span className={styles.amount}>Amount Left</span>
            </Col>
            <Col xs={3}>
              <span className={styles.amount}>
                Amount dedicated to category:
              </span>
            </Col>
          </Row>
        </Container>
      </li>
      {budgetContext.categories.map((categoryItem) => {
        return (
          <Category
            key={categoryItem.id}
            id={categoryItem.id}
            title={categoryItem.title}
            maxBudget={categoryItem.maxBudget}
            totalSpend={categoryItem.totalSpend}
            amountLeft={categoryItem.amountLeft}
          />
        );
      })}
    </ul>
  );
};

export default Categories;
