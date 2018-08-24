import React from 'react';
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import MedComponent from '../../components/MedComponent/MedComponent'

const MedPage = props => (
    <div>
        <TopNavbar userName={props.userState.userData.name} />
        <Header />
        <MedComponent />
        <BottomNavbar />
    </div>
);

export default MedPage;