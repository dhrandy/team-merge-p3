import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../../components/Login/Login";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const LoginPage = () => (
    <Router>
      <div>
        <TopNavbar />
        <Header />
        <Login />
        <BottomNavbar />
      </div>
    </Router>
  );
  
  
  export default LoginPage;