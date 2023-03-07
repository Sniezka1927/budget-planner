import { Col, Container, Row } from "react-bootstrap";
import Button from "../UI/Button";
// import Label from "../UI/Label";
// import Title from "../UI/Title";
import AuthContext from "../../context/auth-context";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const SettingsPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const signOutHandler = () => {
    authCtx.signOut();
    navigate("/");
  };
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        {/* <Row>
        <Title>Account Details</Title>
      </Row>
      <Row>
        <Label>Email</Label>
      </Row>
      <Row>
        <Label>Password</Label>
      </Row> */}

        <Row>
          <Col>
            <Button onClickHandler={signOutHandler}>Sign out</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SettingsPage;
