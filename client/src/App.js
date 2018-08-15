import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken"
import {setCurrentUser} from "./actions/authActions"

import {Provider} from "react-redux"
import store from "./store"
import PPApp from "./pages/App/App";
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"
import Profile from "./components/Profile/Profile"


//ON EVERY PAGE REQUEST CHECK FOR THE WEBTOKEN  
if(localStorage.jwtToken) {
  //set auth token header
  setAuthToken(localStorage.jwtToken)
  //decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken)
  //SET USER and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
}


class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/app-home" component={PPApp} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/profile" component={Profile} />

          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}


export default App;