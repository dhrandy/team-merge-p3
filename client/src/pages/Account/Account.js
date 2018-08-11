import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "../../components/Account/Account";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const AccountPage = () => (
    <Router>
        <div>
            <TopNavbar />
            <Header />
            <Account />
            <BottomNavbar />
        </div>
    </Router>
);


export default AccountPage;