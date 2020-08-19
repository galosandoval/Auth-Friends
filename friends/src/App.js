import React from "react";
import "./App.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Friends } from "./components/Friends";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Protected Page</Link>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
          {/* <Route exact path="/friends" /> */}
          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
