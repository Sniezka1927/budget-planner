import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";
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
  return (
    <Container>
      <Row>
        <Title>My Budget Planner</Title>
      </Row>
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
          <Expenses />
        </Col>
      </Row>
      <Row>
        <Button onClickHandler={onAdd}>Add new transaction</Button>
      </Row>
      {/* <Row>
        <Col>
          <>
            <>My Budget Planner</>
            <>Budget:</>
            The homepage would be a simple dashboard displaying the user's
            current expenses, income, and budget progress. It would also have a
            button to add a new transaction.
          </>
        </Col>
      </Row> */}
    </Container>
  );
};

export default HomePage;
