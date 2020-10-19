import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
