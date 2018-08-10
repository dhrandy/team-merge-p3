import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PPApp from "./pages/App/App";
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"

const App = () => (
  <Router>

    <React.Fragment>
    <Route exact path="/app-home" component={PPApp} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    </React.Fragment>
  </Router>
);


export default App;