import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Food from "../../components/Restriction/Food/Food";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const FoodPage = () => (
    <Router>
        <div>
            <TopNavbar />
            <Header />
            <Food />
            <BottomNavbar />
        </div>
    </Router>
);


export default FoodPage;