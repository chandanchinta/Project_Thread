import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { API_REGISTER, API_LOGIN } from "../../API_endpoints.js";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const LOGIN_request = (e) => {
    e.preventDefault();
    axios
      .post(API_LOGIN, {
        userID: email,
        password: password,
      })
      .then((payload) => {
        console.log(payload);
        //Route to product page
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="Login">
      <Form onSubmit={LOGIN_request}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="Login-item">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
