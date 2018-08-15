import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Route } from "react-router-dom";

import Wrapper from "../../components/Wrapper/Wrapper";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import Home from "../../components/HomePage/Home.js";
import Account from "../../components/Account/Account";

class PPApp extends Component {
  render() {
    return(
      <div>
        <TopNavbar />
        <Header />
        <Route exact path="/app-home" component={Home} />
        <Wrapper>
          {/* <Route exact path="/" component={About} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
        </Wrapper>
        <BottomNavbar />
      </div>
    )
  }
}
  
  
  export default PPApp;