import React, { useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import BudgetContext from "../../context/budget-context";
import newTransactionProps from "../../Interfaces/newTransactionProps";
import Button from "../UI/Button";
import FloatingContainer from "../UI/FloatingContainer";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Select from "../UI/Select";
import Title from "../UI/Title";
import Alert from "react-bootstrap/Alert";

const NewTransaction = (props: newTransactionProps) => {
  const budgetCtx = useContext(BudgetContext);

  const [amount, setAmount] = useState<number>(Number);
  const [title, setTitle] = useState<string>("");
  const [categoryTitle, setCategoryTitle] = useState<string>("Shopping");
  const [date, setDate] = useState<string>("");

  const [isCorrect, setIsCorrect] = useState<boolean>(true);

  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryTitle(e.target.value);
  };
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onClose = () => {
    props.toggle(false);
  };

  const addTransaction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (date === "" && title.length < 1 && amount === 0) {
      setIsCorrect(false);
      // setTimeout(() => {
      //   setIsCorrect(true);
      // }, 3000);
    } else {
      setIsCorrect(true);
      budgetCtx.addTransaction(new Date(date), title, categoryTitle, amount);
      props.toggle(false);
    }
  };

  const onBackdrop = () => {
    props.toggle(false);
  };
  return (
    <FloatingContainer onBackdrop={onBackdrop}>
      <Title>Add new Transaction</Title>
      {!isCorrect ? (
        <Alert variant={"danger"}>
          Looks like you didn't fill all fields in the transaction!
        </Alert>
      ) : null}
      <form style={{ textAlign: "left" }} onSubmit={addTransaction}>
        <Label>Amount spend:</Label>
        <br />
        <Input
          type="number"
          value={amount}
          onChangeHandler={amountHandler}
          placeholder={"insert transaction cost"}
        ></Input>
        <br />
        <Label>Transaction Title:</Label>
        <br />
        <Input
          type="text"
          value={title}
          onChangeHandler={titleHandler}
          placeholder={"transaction title"}
        ></Input>
        <br />
        <Label>Category:</Label>
        <br />
        <Select
          onChangeHandler={categoryHandler}
          options={budgetCtx.categories}
          placeholder={"category"}
        ></Select>
        <br />
        <Label>Date:</Label>
        <br />
        <Input
          type="date"
          value={date}
          onChangeHandler={dateHandler}
          placeholder={"date"}
        ></Input>
        <br />
        <Row>
          <Col xs={6}>
            <Button onClickHandler={addTransaction}>Add Transaction</Button>
          </Col>
          <Col xs={6}>
            <Button onClickHandler={onClose}>Cancel</Button>
          </Col>
        </Row>
      </form>
    </FloatingContainer>
  );
};

export default NewTransaction;
