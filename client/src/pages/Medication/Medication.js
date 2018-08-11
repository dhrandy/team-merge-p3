import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Medication from "../../components/Restriction/Medication/Medication";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const MedicationPage = () => (
    <Router>
        <div>
            <TopNavbar />
            <Header />
            <Food />
            <BottomNavbar />
        </div>
    </Router>
);


export default MedicationPage;