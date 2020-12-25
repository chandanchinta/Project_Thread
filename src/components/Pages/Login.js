import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Styles/Login.css";
import { API_REGISTER, API_LOGIN, API_USER } from "../../API_endpoints.js";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const LOGIN_request = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: email,
        password: password,
      },
      withCredentials: true,
      url: API_LOGIN,
    }).then((res) => console.log(res));
  };

  const checkUser = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: API_USER,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
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
        <Button block size="lg" type="submit" onClick={checkUser}>
          Check
        </Button>
      </Form>
    </div>
  );
}

export default Login;
