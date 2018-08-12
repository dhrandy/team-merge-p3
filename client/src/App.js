import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PPApp from "./pages/App/App";
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"
import AccountPage from "./pages/Account/Account"
import FoodPage from "./pages/Food/Food"
import MedicationPage from "./pages/Food/Food"
import ActivityPage from "./pages/Activity/Activity"
import PrescriptionPage from "./pages/Prescription/PrescriptionPage"
import Error from "./pages/Error/Error"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/app-home" component={PPApp} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/food" component={FoodPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/medication" component={MedicationPage} />
          <Route exact path="/activity" component={ActivityPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/prescription" component={PrescriptionPage} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
