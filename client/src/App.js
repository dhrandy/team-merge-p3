import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PPApp from "./pages/App/App";
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"
import AccountPage from "./pages/Account/Account"
import FoodPage from "./pages/Food/Food"
import MedicationPage from "./pages/Medication/Medication"
import ActivityPage from "./pages/Activity/Activity"
import PrescriptionPage from "./pages/Prescription/PrescriptionPage"
import Error from "./pages/Error/Error"
import axios from "axios"

export default class App extends Component {
  state = {
    token: "",
    userData: {
      _id: "",
      name: "",
      email: "",
      password: "",
      prescriptions: []
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  record the client login data so that the application knows which specific user is sending 
  //  requests
  //////////////////////////////////////////////////////////////////////////////////////////////////
  setUserState = (clientObj) => {
    axios.get("/api/users/getUserData/"+clientObj.email)
         .then( res => {
            let userData = res.data
            this.setState({token: clientObj.token, userData})
            console.log(this.state)
         })
         .catch( err => console.log(err) )
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Construct LoginPage component and pass the reference back to the function that will set the 
  //  state of the user... this will allow us to pass the web token to all child components
  //////////////////////////////////////////////////////////////////////////////////////////////////
  loginPageWithCallback = () => {
    return(<LoginPage userState={this.state} action={this.setUserState} />)
  }

  medicationPageWithUserData = () => {
    return(<MedicationPage userState={this.state} />)
  }

  prescriptionPageWithUserData = () => {
    return(<PrescriptionPage userState={this.state} />)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/app-home" component={PPApp} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/food" component={FoodPage} />
          <Route exact path="/login" component={this.loginPageWithCallback} />
          <Route exact path="/medication" component={this.medicationPageWithUserData} />
          <Route exact path="/activity" component={ActivityPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/prescription" component={this.prescriptionPageWithUserData} />
          <Route component={Error} />
          <Redirect to="/medication" />
        </Switch>
      </BrowserRouter>
    );
  }
}
