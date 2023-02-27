import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import newCategoryProps from "../../Interfaces/newCategoryProps";
import Button from "../UI/Button";
import FloatingContainer from "../UI/FloatingContainer";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Title from "../UI/Title";
const NewCategory = (props: newCategoryProps) => {
  const [title, setTitle] = useState<string>("");

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onClose = () => {
    props.toggle(false);
  };

  const addTransaction = () => {
    props.toggle(false);
  };

  const onBackdrop = () => {
    props.toggle(false);
  };
  return (
    <FloatingContainer onBackdrop={onBackdrop}>
      <Title>Add new Category</Title>
      <form style={{ textAlign: "left" }}>
        <Label>Category Title:</Label>
        <br />
        <Input
          type="text"
          value={title}
          onChangeHandler={titleHandler}
          placeholder={"category title"}
        ></Input>
        <br />

        <Row>
          <Col xs={6}>
            <Button onClickHandler={addTransaction}>Add Category</Button>
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
