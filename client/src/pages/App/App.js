import React, { Component } from 'react';
import { BrowserRouter as Router2, Route } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import Login from "../../components/Login/Login";
import Login2 from "../../components/Login/Login2";
import Register from "../../components/Register/Register";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import Home from "../../components/HomePage/Home.js";

const PPApp = () => (
    <Router2>
      <div>
        <TopNavbar />
        <Header />
        <Route exact path="/app-home" component={Home} />
        <Wrapper>
          {/* <Route exact path="/" component={About} /> */}
          <Route exact path="/login2" component={Login2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <BottomNavbar />
      </div>
    </Router2>
  );
  
  
  export default PPApp;