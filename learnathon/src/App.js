import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Content from './pages/content';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/content" component={Content} exact />
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Router>
  );
}

export default App;
