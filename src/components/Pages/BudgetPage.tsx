import { Container, Col, Row } from "react-bootstrap";
import Budget from "../Budget/Budget";

const BudgetPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Budget />
        </Col>
      </Row>
      <Row>
        <>
          The Budget page would allow the user to set a budget for each category
          and track their progress. The page would display a chart showing the
          user's spending for each category compared to their budget.
        </>
      </Row>
    </Container>
  );
};

export default BudgetPage;
