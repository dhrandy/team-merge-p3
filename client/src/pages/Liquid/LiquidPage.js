import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Liquid from "../../components/Types/Liquid/Liquid";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const LiquidPage = props => (
    <Router>
      <div>
        <TopNavbar userName={props.userState.userData.name}/>
        <Header />
        <Liquid />
        <BottomNavbar />
      </div>
    </Router>
  );
  
  
  export default LiquidPage;