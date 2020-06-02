import React from "react";
import Home from './Home';
import Form from './Form';
import Login from './Login';
import { BrowserRouter as Router, Route } from "react-router-dom";


function Registration() {
  return (
    <div className="App">
      <Router>
        <Route path="/form" component={Form} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default Registration;


