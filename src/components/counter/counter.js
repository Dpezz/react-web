import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, sign_in } from "../../actions/counter";

function Counter() {
	const counter = useSelector(state => state.counter);
	const is_logged = useSelector(state => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div>
			<ButtonToolbar>
				<Button
					className="mr-1"
					variant="outline-dark"
					onClick={() => dispatch(increment())}
				>
					+ increment
				</Button>
				<Button
					variant="outline-dark"
					onClick={() => dispatch(decrement())}
				>
					- decrement
				</Button>
				<Button
					variant="outline-dark"
					onClick={() => dispatch(sign_in())}
				>
					sign_in
				</Button>
			</ButtonToolbar>
			<h2 className="text-muted">counter is => {counter}!</h2>
			{is_logged ? (
				<h2 className="text-success">i`m => {is_logged}!</h2>
			) : (
				""
			)}
		</div>
	);
}

export default Counter;
