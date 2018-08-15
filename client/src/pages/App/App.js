import React from 'react';
import { Route } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import Register from "../../components/Register/Register";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import Home from "../../components/HomePage/Home.js";
import Account from "../../components/Account/Account";


const PPApp = () => (
  <div>
    <TopNavbar />
    <Header />
    <Route exact path="/app-home" component={Home} />
    <Wrapper>
      {/* <Route exact path="/" component={About} /> */}
      <Route exact path="/register" component={Register} />
      {/* <Route exact path="/search" component={Search} /> */}
      <Route exact path="/account" component={Account} />
    </Wrapper>
    <BottomNavbar />
  </div>
);


export default PPApp;