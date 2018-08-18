import React from 'react';
import Prescription from "../../components/Prescription/Prescription";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const PrescriptionPage = (props) => (
    <div>
      <TopNavbar />
      <Header />
      <Prescription userState={props.userState} action={props.action} />
      <BottomNavbar />
    </div>
  );
  
  
  export default PrescriptionPage;