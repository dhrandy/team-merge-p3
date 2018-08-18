import React from 'react';
import AccountContainer from "../../components/Account/AccountContainer";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const AccountPage = (props) => (
    <div>
        <TopNavbar />
        <Header />
        <AccountContainer userState={props.userState} action={props.action} />
        <BottomNavbar />
    </div>
);

export default AccountPage;