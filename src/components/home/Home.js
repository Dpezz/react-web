import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import "./Home.css";
import { login } from "../../actions/auth";

const Home = prop => {
	const [item, setItem] = useState({ email: "", password: "" });
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(login(item));
	};

	const handleChange = event => {
		setItem({ ...item, [event.target.name]: event.target.value });
	};

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
				<Form.Control
					type="email"
					name="email"
					placeholder="Enter email"
					value={item.email}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Control
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
				/>
			</Form.Group>

			<Button
				variant="primary btn-block"
				type="button"
				onClick={handleClick}
			>
				Get started
			</Button>
			<p>{JSON.stringify(auth)}</p>
		</Form>
	);
};

export default Home;
