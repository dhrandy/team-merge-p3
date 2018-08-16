import React from 'react';
import Account from "../../components/Account/Account";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const AccountPage = () => (
    <div>
        <TopNavbar />
        <Header />
        <Account />
        <BottomNavbar />
    </div>
);

export default AccountPage;