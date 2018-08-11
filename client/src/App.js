import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PPApp from "./pages/App/App";
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"
import AccountPage from "./pages/Account/Account"
import FoodPage from "./pages/Food/Food"
import MedicationPage from "./pages/Food/Food"
import ActivityPage from "./pages/Activity/Activity"
import PrescriptionPage from "./pages/Prescription/PrescriptionPage"

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/app-home" component={PPApp} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/account" component={AccountPage} />
      <Route exact path="/food" component={FoodPage} />
      <Route exact path="/medication" component={MedicationPage} />
      <Route exact path="/activity" component={ActivityPage} />
      <Route exact path="/prescription" component={PrescriptionPage} />
  </React.Fragment>
  </Router>
);

export default App;