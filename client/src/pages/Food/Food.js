import React from 'react';
import Food from "../../components/Restriction/Food/Food";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const FoodPage = () => (
    <div>
        <TopNavbar />
        <Header />
        <Food />
        <BottomNavbar />
    </div>
);

export default FoodPage;