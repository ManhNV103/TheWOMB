import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.js";
import Form from "./Form.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/form/" component={Form} />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
