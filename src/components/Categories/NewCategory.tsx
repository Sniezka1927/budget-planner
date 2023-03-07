import React, { useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import BudgetContext from "../../context/budget-context";
import newCategoryProps from "../../Interfaces/newCategoryProps";
import Button from "../UI/Button";
import FloatingContainer from "../UI/FloatingContainer";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Title from "../UI/Title";
import Alert from "react-bootstrap/Alert";

const NewCategory = (props: newCategoryProps) => {
  const [title, setTitle] = useState<string>("");
  const [dedicatedAmount, setDedicatedAmount] = useState<number>(0);

  const [isCorrect, setIsCorrect] = useState<boolean>(true);

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const dedicatedAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDedicatedAmount(Number(e.target.value));
  };

  const budgetCtx = useContext(BudgetContext);

  const onClose = () => {
    props.toggle(false);
  };

  const addCategory = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (title.length === 0 && dedicatedAmount === 0) {
      setIsCorrect(false);
      return;
    } else {
      setIsCorrect(true);
      budgetCtx.addCategory(title, dedicatedAmount);
      props.toggle(false);
    }
  };

  const onBackdrop = () => {
    props.toggle(false);
  };
  return (
    <FloatingContainer onBackdrop={onBackdrop}>
      <Title>Add new Category</Title>
      {!isCorrect ? (
        <Alert variant={"danger"}>
          Looks like you didn't fill all fields in the category!
        </Alert>
      ) : null}
      <form style={{ textAlign: "left" }} onSubmit={addCategory}>
        <Label>Category Title:</Label>
        <br />
        <Input
          type="text"
          value={title}
          onChangeHandler={titleHandler}
          placeholder={"category title"}
        ></Input>
        <br />
        <Label>Amount dedicated to this Category:</Label>
        <br />
        <Input
          type="number"
          value={dedicatedAmount}
          onChangeHandler={dedicatedAmountHandler}
          placeholder={"dedicated amount"}
        ></Input>
        <br />
        <Row>
          <Col xs={6}>
            <Button onClickHandler={addCategory}>Add Category</Button>
          </Col>
          <Col xs={6}>
            <Button onClickHandler={onClose}>Cancel</Button>
          </Col>
        </Row>
      </form>
    </FloatingContainer>
  );
};

export default NewCategory;
