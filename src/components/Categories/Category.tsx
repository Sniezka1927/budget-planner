import { Col, Container, Row } from "react-bootstrap";
import categoryProps from "../../Interfaces/categoryProps";
import styles from "./Category.module.css";
import { TiDelete as Icon } from "react-icons/ti";
import { useContext } from "react";
import BudgetContext from "../../context/BudgetContext";
const Category = (props: categoryProps) => {
  const budgetCtx = useContext(BudgetContext);

  const removeHandler = () => {
    budgetCtx.removeCategory(props.id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Container fluid>
        <Row>
          <Col xs={4}>
            <span className={styles.title}>{props.title}</span>
          </Col>
          <Col xs={2}>
            <span className={styles.amount}>
              ${JSON.stringify(props.totalSpend)}
            </span>
          </Col>
          <Col xs={2}>
            <span className={styles.amount}>
              ${JSON.stringify(props.amountLeft)}
            </span>
          </Col>
          <Col xs={3}>
            <span className={styles.amount}>
              ${JSON.stringify(props.maxBudget)}
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

export default Category;
