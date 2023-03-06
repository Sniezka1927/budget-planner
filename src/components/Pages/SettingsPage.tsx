import { Col, Container, Row } from "react-bootstrap";
import Button from "../UI/Button";
// import Label from "../UI/Label";
// import Title from "../UI/Title";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const SettingsPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const signOutHandler = () => {
    authCtx.signOut();
    navigate("/");
  };
  return (
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
  );
};

export default SettingsPage;
