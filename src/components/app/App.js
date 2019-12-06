import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "../home/Home";
import Counter from "../counter/counter";
import Users from "../user/Users";
import User from "../user/User";
import NavLayout from "../layout/nav";

function App() {
	return (
		<Router>
			<NavLayout />
			<div>
				<Container className="mt-3">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/users" exact component={Users} />
						<Route path="/users/:id" component={User} />
						<Route path="/counters" component={Counter} />
					</Switch>
				</Container>
			</div>
		</Router>
	);
}

export default App;
