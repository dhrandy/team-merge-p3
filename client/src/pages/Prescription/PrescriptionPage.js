import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Prescription from "../../components/Prescription/Prescription";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const PrescriptionPage = () => (
    <Router>
      <div>
        <TopNavbar />
        <Header />
        <Prescription />
        <BottomNavbar />
      </div>
    </Router>
  );
  
  
  export default PrescriptionPage;