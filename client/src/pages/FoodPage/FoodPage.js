import React from 'react';
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import FoodComponent from '../../components/FoodComponent/FoodComponent';

const FoodPagem = props => (
    <div>
        <TopNavbar userName={props.userState.userData.name} />
        <Header />
        <FoodComponent {...props} />
        <BottomNavbar />
    </div>
);

export default FoodPagem;