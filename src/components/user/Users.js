import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Users() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    setItems(items);

    console.log(items);
  };

  return (
    <div>
      <h1>Users</h1>

      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={item.id}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/users/${item.id}`}>
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
