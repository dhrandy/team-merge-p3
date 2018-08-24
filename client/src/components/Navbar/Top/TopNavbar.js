import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './topNavbar.css';

export default class TopNavbar extends Component {
  render() {
    const loginStr = this.props.userName
    let isAuthenticated
    //  ***** Change display for logged in user *****
    if(loginStr != ""){
      isAuthenticated = true
    }
      const authLinks = (
      <ul className="navbar-nav"> 
        <li className="nav-item">
          <Link className="nav-link" to="/account">All Prescriptions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/medication">Medication</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/prescription">Add a Medication</Link>
        </li> 
        {/* Karina's */}
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
      )

      const guestLinks = (
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        </ul>
        
      )
  
    return (
      <nav className="navbar bg-dark navbar-dark flex-row-reverse">
        <a className="nav navbar-nav navbar-logo mx-auto">Prescription Planner</a>
        <Link to="/login" className="nav navbar-nav navbar-logo login">{loginStr} </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar"> 
          {isAuthenticated ? authLinks : guestLinks}
        </div> 
      </nav>
    )
  }
}
