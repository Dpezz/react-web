import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import NavLayout from "../layout/nav";

function App() {
  return (
    <Router>
      <NavLayout />
      <div>
        <Container className="mt-3">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
