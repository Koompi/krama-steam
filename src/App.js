import React, { Component } from "react";
import Login from "./components/account/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./components/account/register";
import Navbar from "./components/layouts/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/index" component={Navbar} />
        </Router>
      </div>
    );
  }
}

export default App;
