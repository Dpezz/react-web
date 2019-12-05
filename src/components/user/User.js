import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function User({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    );
    const item = await data.json();
    setItem(item);

    console.log(item);
  };

  return (
    <div>
      <h1>
        User: <small>{item.name}</small>
      </h1>

      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={item.name} disabled />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" defaultValue={item.username} disabled />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" defaultValue={item.email} disabled />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" defaultValue={item.phone} disabled />
        </Form.Group>

        <Form.Group>
          <Form.Label>website</Form.Label>
          <Form.Control type="text" defaultValue={item.website} disabled />
        </Form.Group>

        <Link to={"/users"}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
          &nbsp; back
        </Link>
      </Form>
    </div>
  );
}

export default User;
