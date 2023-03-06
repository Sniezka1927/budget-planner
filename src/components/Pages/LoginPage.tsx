import { Col, Container, Row } from "react-bootstrap";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { useState, useContext } from "react";
import Button from "../UI/Button";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassowrd] = useState<string>("");

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassowrd(e.target.value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // fetch goes here
    authCtx.signIn();
    navigate("/home");
  };

  if (authCtx.isLogged) {
    navigate("/home");
  }
  return (
    <Container>
      <Row>
        <h2
          style={{
            margin: "1rem, 0rem",
            fontWeight: "bolder",
            color: "#9f146e",
          }}
        >
          Login to your account
        </h2>
      </Row>
      <Row>
        <Col>
          <form onSubmit={submitHandler}>
            <Label>email</Label>
            <br />
            <Input
              value={email}
              type="email"
              placeholder="insert your email"
              onChangeHandler={emailHandler}
            ></Input>
            <br />
            <Label>password</Label>
            <br />
            <Input
              value={password}
              type="password"
              placeholder="password"
              onChangeHandler={passwordHandler}
            ></Input>
            <br />
            <Button onClickHandler={submitHandler}>Sign in</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
