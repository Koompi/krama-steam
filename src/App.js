import React, { Component } from 'react';
import Login from './components/login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './components/register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/login" component={Login}  />
          <Route exact path="/register" component={Register}  />
        </Router>
      </div>
    );
  }
}

export default App;
