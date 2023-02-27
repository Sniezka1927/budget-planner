import { Col, Container, Row } from "react-bootstrap";
import Categories from "../Categories/Categories";
import Button from "../UI/Button";
import Title from "../UI/Title";
import React, { useState } from "react";
import NewCategory from "../Categories/NewCategory";
const CategoriesPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (value: boolean) => {
    setIsVisible(value);
  };
  return (
    <React.Fragment>
      {isVisible ? <NewCategory toggle={toggleVisibility} /> : null}
      <Container>
        <Row>
          <Button
            onClickHandler={() => {
              setIsVisible((prevState: boolean) => !prevState);
            }}
          >
            Add new category
          </Button>
        </Row>
        <Row>
          <Title>Categories:</Title>
        </Row>
        <Row>
          <Col>
            <Categories />
          </Col>
        </Row>
        <Row>
          <>
            The Categories page would allow the user to manage their expense
            categories. The page would display a list of categories, with the
            ability to add, edit, and delete categories.
          </>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CategoriesPage;
