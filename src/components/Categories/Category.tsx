import { Col, Container, Row } from "react-bootstrap";
import categoryProps from "../../Interfaces/categoryProps";
import styles from "./Category.module.css";
import { TiDelete as Icon } from "react-icons/ti";
const Category = (props: categoryProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Container fluid>
        <Row>
          <Col xs={8}>
            <span className={styles.title}>{props.title}</span>
          </Col>
          <Col xs={3}>
            <span className={styles.amount}>${props.totalAmount}</span>
          </Col>
          <Col xs={1}>
            <span className={styles.bin}>
              <Icon size={"1.5rem"} />
            </span>
          </Col>
        </Row>
      </Container>
    </li>
  );
};

export default Category;
