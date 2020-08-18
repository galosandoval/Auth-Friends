import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          {/* <Link to="/friends">Protected Page</Link> */}
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <PrivateRoute path='/protected' component={friends />} */}
          <Route exact path="/friends" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
