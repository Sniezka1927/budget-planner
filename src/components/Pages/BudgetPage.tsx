import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Categories from "../Categories/Categories";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Title from "../UI/Title";

const BudgetPage = () => {
  const [budget, setBudget] = useState<Number>(Number);

  const budgetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };
  const onSave = () => {};

  return (
    <Container>
      <Row>
        <Title>Your Income</Title>
      </Row>
      <Row>
        <Input
          value={budget}
          type="number"
          onChangeHandler={budgetHandler}
          placeholder={"write your income"}
        ></Input>
      </Row>
      <Row>
        <Button onClickHandler={onSave}>Save</Button>
      </Row>
      <Row>
        <Title>Set up budget for each category</Title>
        <Col>
          <Categories />
        </Col>
      </Row>
      <Row>
        <Title>Expenses Chart</Title>
        {/* https://github.com/reactchartjs/react-chartjs-2 */}
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
