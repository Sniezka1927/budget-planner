import { Col, Container, Row } from "react-bootstrap";
import Categories from "../Categories/Categories";
import Button from "../UI/Button";
import Title from "../UI/Title";
import React, { useState } from "react";
import NewCategory from "../Categories/NewCategory";
import Navigation from "../Navigation/Navigation";
const CategoriesPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (value: boolean) => {
    setIsVisible(value);
  };
  return (
    <React.Fragment>
      <Navigation />

      <Container>
        {isVisible ? <NewCategory toggle={toggleVisibility} /> : null}
        <Row>
          <Title>Categories:</Title>
        </Row>
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
          <Col>
            <Categories />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CategoriesPage;
