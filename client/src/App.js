import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PPApp from "./pages/App/App";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import AccountPage from "./pages/Account/Account";
import FoodPage from "./pages/Food/Food";
import MedicationPage from "./pages/Medication/Medication";
import ActivityPage from "./pages/Activity/Activity";
import PrescriptionPage from "./pages/Prescription/PrescriptionPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Error from "./pages/Error/Error";
import News from "./pages/News/News";
import HomePageNews from "./pages/HomePageNews/HomePageNews";
import axios from "axios";
import MedPage from "./pages/MedRestriction/Medrestriction"

export default class App extends Component {
  state = {
    token: "",
    userData: {
      _id: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      prescriptions: []
    }
  }

  componentDidMount = () => {
    if(this.state.token == "") {
      const email = sessionStorage.getItem('p3State-email');
      const token = sessionStorage.getItem('p3State-token');
      console.log('DEBUG - sessionStorage - before read', email, token)
      if ( token ) {
        axios.get("/api/prescriptions/getUserData/" + email)
          .then(res => {
            let userData = res.data
            console.log('DEBUG - sessionStorage - after read', userData)
            this.setState({ token, userData })
          })
          .catch(err => console.log(err))
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  record the client login data so that the application knows which specific user is sending 
  //  requests
  //////////////////////////////////////////////////////////////////////////////////////////////////
  setUserState = (clientObj) => {
    console.log('DEBUG - setUserState', clientObj)
    axios.get("/api/prescriptions/getUserData/" + clientObj.email)
      .then(res => {
        let userData = res.data
        this.setState({ token: clientObj.token, userData })
        sessionStorage.setItem('p3State-email', clientObj.email)
        sessionStorage.setItem('p3State-token', clientObj.token)
        console.log(this.state)
      })
      .catch(err => {
        if (err.code == 500) {
          console.log('New Session')
        }
        else {
          console.log(err)
        }
      })
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  record the client email so that the application knows which user was just created 
  //////////////////////////////////////////////////////////////////////////////////////////////////
  setUserEmailState = (clientObj) => {
    let userData = {
      _id: "",
      name: "",
      email: clientObj.email,
      password: "",
      phone: "",
      prescriptions: []
    }
    this.setState({ userData })
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Construct LoginPage component and pass the reference back to the function that will set the 
  //  state of the user... this will allow us to pass the web token to all child components
  //////////////////////////////////////////////////////////////////////////////////////////////////
  loginPageWithCallback = () => {
    return (<LoginPage userState={this.state} action={this.setUserState} />)
  }

  activityPagePageWithUserData = () => {
    return (<ActivityPage userState={this.state} />)
  }

  foodPagePageWithUserData = () => {
    return (<FoodPage userState={this.state} />)
  }

  medicationPageWithUserData = () => {
    return (<MedicationPage userState={this.state} />)
  }

  medPageWithUserData = () => {
    return (<MedPage userState={this.state} />)
  }

  newsPageWithUserData = () => {
    return (<News userState={this.state} />)
  }

  accountPageWithCallback = () => {
    return (<AccountPage allMedications={true} userData={this.state.userData} action={this.setUserState} />)
  }

  nextMedicationEvent = () => {
    return (<AccountPage allMedications={false} userData={this.state.userData} action={this.setUserState} />)
  }


  prescriptionPageWithCallback = () => {
    return (<PrescriptionPage userState={this.state} action={this.setUserState} />)
  }

  registerPageWithCallback = () => {
    return (<RegisterPage userState={this.state} action={this.setUserEmailState} />)
  }


  render() {
    return (
      < BrowserRouter >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/app-home" component={PPApp} />
          <Route exact path="/account" component={this.accountPageWithCallback} />
          <Route exact path="/food" component={this.foodPagePageWithUserData} />
          <Route exact path="/login" component={this.loginPageWithCallback} />
          <Route exact path="/medication" component={this.nextMedicationEvent} />
          <Route exact path="/activity" component={this.activityPagePageWithUserData} />
          <Route exact path="/register" component={this.registerPageWithCallback} />
          <Route path="/prescription" component={this.prescriptionPageWithCallback} />
          <Route exact path="/news" component={this.newsPageWithUserData} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/news-homepage" component={HomePageNews} />
          <Route exact path="/medrestriction" component={this.medPageWithUserData} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter >



    );
  }
}