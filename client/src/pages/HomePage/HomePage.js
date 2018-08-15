import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PPApp from "../../pages/App/App";


const HomePage = () => (
    <Router>
      <React.Fragment>
      <Route exact path="/app-home" component={PPApp} />
      <a href="/app-home">Link to App</a>
      </React.Fragment>
    </Router>
);


export default HomePage;