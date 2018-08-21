import React from 'react';
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import RestrictionView from "../../components/Restriction/RestrictionView"

const MedicationPage = (props) => {
  const userData = props.userState.userData
  return(
    <div>
      <TopNavbar />
      <Header />
      <p>User = {userData.name} </p>
      <p>Medication email = {userData.email} </p>
      <h1>Prescriptions</h1>
        {userData.prescriptions.map( (p, index) => ( 
            <div>
              <h3 key={p._id}>{p.name}</h3>
              <RestrictionView key={`f${p._id}`} name="Food Restrictions" restriction={p.foodRestrictions} />
              <RestrictionView key={`m${p._id}`} name="Medications Restrictions" restriction={p.medicationRestrictions} />
              <RestrictionView key={`a${p._id}`} name="Activity Restrictions" restriction={p.activityRestrictions} />
            </div>
        ))}
      <BottomNavbar />
    </div>
  )

}

export default MedicationPage;