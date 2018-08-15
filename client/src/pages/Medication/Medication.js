import React, {Component} from 'react';
import Medication from "../../components/Restriction/Medication/Medication";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const MedicationPage = (props) => {
  return(
    <div>
      <TopNavbar />
      <Header />
      <p>Medication email = {props.userData.email} </p>
      <BottomNavbar />
    </div>
  )

}

export default MedicationPage;