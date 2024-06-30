import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignupForm } from "../components/signupForm";

export const SignupPage = () => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-center vh-100">
          <Col>
            <Stack className="shadow-lg border rounded p-4">
              <h1>Join our App</h1>
              <p>Manage your income expenses</p>
              <p>Track your finance</p>
            </Stack>
          </Col>

          {/* Singup form */}
          <Col>
            <Stack className="shadow-lg border rounded p-4">
              <h1>Signup</h1>
              <SignupForm />
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};
