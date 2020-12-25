import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Styles/Register.css";
import { API_REGISTER, API_LOGIN, API_USER } from "../../API_endpoints.js";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setretypePassword] = useState("");

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password == retypePassword
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="Register-item">Email</Form.Label>
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
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={retypePassword}
            onChange={(e) => setretypePassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className="Register-btn"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
