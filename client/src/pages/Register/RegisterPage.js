import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import Register from "../../components/Register/Register"

const LoginPage = () => (
    <Router>
      <div>
        <TopNavbar />
        <Header />
        <Register />
        <BottomNavbar />
      </div>
    </Router>
  );
  
  
  export default LoginPage;