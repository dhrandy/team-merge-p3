import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Header from "./components/Header/Header"
import BottomNavbar from "./components/Navbar/Bottom/BottomNavbar"
import TopNavbar from "./components/Navbar/Top/TopNavbar"
import Prescription from './components/Prescription/Prescription';
import HomePage from './components/HomePage/Home';

const App = () => (
  <Router>
    <div>
      <TopNavbar />
      <Header />
      <Wrapper>
        {/* <Route exact path="/" component={About} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/account" component={Account} />
      </Wrapper>
      <BottomNavbar />
    </div>
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