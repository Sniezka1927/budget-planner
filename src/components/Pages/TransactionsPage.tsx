import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewTransaction from "../NewTransaction/NewTransaction";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Title from "../UI/Title";

const TransactionsPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (value: boolean) => {
    setIsVisible(value);
  };
  return (
    <Container>
      {isVisible ? <NewTransaction toggle={toggleVisibility} /> : null}
      <Row
        onClick={() => {
          setIsVisible((prevState) => !prevState);
        }}
      >
        <Title>Add new transaction </Title>
      </Row>
      <Row></Row>
      <Row>
        <Title>All Transactions</Title>
      </Row>
      <>
        Clicking on the "Add Transaction" button would take the user to the
        Transactions page. Here, the user could add a new transaction by filling
        out a form with details such as the amount, category, and date. There
        would also be a table displaying all of the user's transactions, with
        the ability to sort and filter by date, category, and amount.
      </>
    </Container>
  );
};

export default TransactionsPage;
