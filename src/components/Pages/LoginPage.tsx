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
    alert(`${email} -  ${password}`);
    authCtx.signIn();
    navigate("/home");
  };
  return (
    <Container>
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
            <Label>Passowrd</Label>
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
