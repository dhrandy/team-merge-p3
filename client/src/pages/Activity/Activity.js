import React from 'react';
import Activity from "../../components/Restriction/Activity/Activity";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const ActivityPage = props => (
    <div>
        <TopNavbar userName={props.userState.userData.name}/>
        <Header />
        <Activity />
        <BottomNavbar />
    </div>
);

export default ActivityPage;