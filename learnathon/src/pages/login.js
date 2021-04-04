import React, { useState } from "react";
import { Form, Col, Container, Row } from "react-bootstrap";
import { FcLock } from "react-icons/fc";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("userToken", res.data);
        window.location = "/";
        localStorage.setItem("loggedIn", true)
      })
      .catch((err) => {
        setError("There was an error with your email or password");
      });
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <Form onSubmit={setData}>
        <Container fluid>
          <Row>
            <Col xs={{ span: 4, offset: 4 }}>
              <FcLock size={23} />
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <label style={{ fontSize: "2rem" }}> Login </label>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(text) => {
                    setEmail(text.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(text) => {
                    setPassword(text.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <small
                style={{
                  color: "red",
                }}
              >
                {error}{" "}
              </small>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group id="formNoAccount">
                <a href="http://localhost:3000/signup">
                  Don't have an account?
                </a>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <input type="submit" value="Login" className="btn btn-primary" />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Login;
