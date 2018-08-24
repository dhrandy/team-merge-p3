import React from 'react';
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import ActivityComponent from '../../components/ActivityComponent/ActivityComponent';

const ActivityPage = props => (
    <div>
        <TopNavbar userName={props.userState.userData.name} />
        <Header />
        <ActivityComponent />
        <BottomNavbar />
    </div>
);

export default ActivityPage;