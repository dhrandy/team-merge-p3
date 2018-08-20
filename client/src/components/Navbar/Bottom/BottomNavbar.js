import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './bottomNavbar.css';

export default class BottomNavbar extends Component {
  render() {
    return (
      <div className = "center">
        <nav className="navbar navbar-bottom navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/medication"><i className="fas fa-briefcase-medical icon-space"></i></Link>
              <Link to="/food"><i className="fas fa-utensils icon-space"></i></Link>
              <Link to="/prescription"><i className="fas fa-plus-square icon-space"></i></Link>
              <Link to="/news"><i className="fas fa-newspaper icon-space"></i></Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
