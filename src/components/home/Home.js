import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Form className="form text-center mt-5">
      <Image
        className="mb-2"
        src="/logo512.png"
        width="84"
        height="84"
        rounded
      />
      <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary btn-block" type="submit" href="/users">
        Get started
      </Button>
    </Form>
  );
}

export default Home;
