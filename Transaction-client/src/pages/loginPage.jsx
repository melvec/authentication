import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/loginForm";

export const LoginPage = () => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-center vh-100">
          <Col>
            <Stack className="shadow-lg border rounded p-4">
              <h1>Welcome to App</h1>
              <p>Manage your income expenses</p>
              <p>Track your finance</p>
            </Stack>
          </Col>

          {/* Singup form */}
          <Col>
            <Stack className="shadow-lg border rounded p-4">
              <h1>Login</h1>
              <LoginForm />
              <p>Don't have an account?</p>
              <Link to="/signup">Signup</Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};
