import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Activity from "../../components/Restriction/Activity/Activity";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const ActivityPage = () => (
    <Router>
        <div>
            <TopNavbar />
            <Header />
            <Activity />
            <BottomNavbar />
        </div>
    </Router>
);

export default ActivityPage;