import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Content from "./pages/content";
import Page from "./pages/page";
import View from "./pages/view";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/content" component={Content} exact />
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/page" component={Page} exact />
        <Route path="/view" component={View} exact />
      </Switch>
    </Router>
  );
}

export default App;
