import { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
// import Col from "react-bootstrap/esm/Col";
// import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";
import BudgetContext from "../../context/BudgetContext";
import Budget from "../Budget/Budget";
import Remaining from "../Budget/Remaining";
import Spent from "../Budget/Spent";
import Expenses from "../Expenses/Expenses";
import Button from "../UI/Button";
import Title from "../UI/Title";

const HomePage = () => {
  const navigate = useNavigate();
  const onAdd = () => {
    navigate("/transactions");
  };

  const budgetCtx = useContext(BudgetContext);

  return (
    <Container>
      <Row>
        <Col>
          <Budget />
        </Col>
        <Col>
          <Remaining />
        </Col>
        <Col>
          <Spent />
        </Col>
      </Row>
      <Row>
        <Title>Recent Transactions</Title>
      </Row>
      <Row>
        <Col>
          <Expenses transactions={budgetCtx.transactions.slice(0, 5)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClickHandler={onAdd}>Add new transaction</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
