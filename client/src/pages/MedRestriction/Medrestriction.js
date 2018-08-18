import React from 'react';
import Medication from "../../components/Restriction/Medication/Medication";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const MedPage = () => (
    <div>
        <TopNavbar />
        <Header />
        <Medication />
        <BottomNavbar />
    </div>
);

export default MedPage;