import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import newTransactionProps from "../../Interfaces/newTransactionProps";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Title from "../UI/Title";
import styles from "./NewTransaction.module.css";
const NewTransaction = (props: newTransactionProps) => {
  const [amount, setAmount] = useState<number | string>(0);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<Date>();

  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  props.toggle(true);

  return (
    <div className={styles.container}>
      <Title>Add new Transaction</Title>
      <form style={{ textAlign: "left" }}>
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
        <Input
          type="text"
          value={category}
          onChangeHandler={categoryHandler}
          placeholder={"category"}
        ></Input>
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
            <Button onClickHandler={() => {}}>Add Transaction</Button>
          </Col>
          <Col xs={6}>
            <Button onClickHandler={() => {}}>Cancel</Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default NewTransaction;
