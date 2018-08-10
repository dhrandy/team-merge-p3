import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PPApp from "./pages/App/App";
import HomePage from "./pages/HomePage/HomePage"

const App = () => (
  <Router>
    <React.Fragment>
    <Route exact path="/app-home" component={PPApp} />
    <Route exact path="/" component={HomePage} />
    </React.Fragment>
  </Router>
);


export default App;