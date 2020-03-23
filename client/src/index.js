import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './components/registration/Registration';
import Admin from './components/admin/Admin';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={Registration} />
        <Route path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
