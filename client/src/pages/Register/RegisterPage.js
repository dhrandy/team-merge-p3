import React from 'react';
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import Register from "../../components/Register/Register"

const LoginPage = props => (
    <div>
      <TopNavbar />
      <Header />
      <Register action={props.action}/>
      <BottomNavbar />
    </div>
  );
  
  
  export default LoginPage;