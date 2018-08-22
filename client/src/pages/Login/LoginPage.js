import React from 'react';
import Login from "../../components/Login/Login";
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

const LoginPage = props => {
  return(
    <div>
      <TopNavbar userName={props.userState.userData.name}/>
      <Header />
      <Login userState={props.userState} action={props.action} />
      <BottomNavbar />
    </div>
  )
}
  
  export default LoginPage;