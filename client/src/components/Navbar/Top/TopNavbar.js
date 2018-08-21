import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './topNavbar.css';

export default class TopNavbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark navbar-dark flex-row-reverse">
        <a className="nav navbar-nav navbar-logo mx-auto">Prescription Planner</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">All Prescriptions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/medication">Medication</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/diet">Diet</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li> 
            {/* Karina's  */}
            <li className="nav-item">
              <Link className="nav-link" to="/prescription">Add a Medication</Link>
            </li> 
            {/* Karina's */}
          </ul>
        </div> 
      </nav>
    );
  }
}