import React, {Component} from 'react';
import './bottomNavbar.css';

export default class BottomNavbar extends Component {
  render() {
    return (
      <div className = "center">
        <nav className="navbar navbar-bottom fixed-bottom navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#"><i className="fas fa-briefcase-medical icon-space"></i></a>
              <a href="#"><i className="fas fa-utensils icon-space"></i></a>
              <a href="#"><i className="fas fa-plus-square icon-space"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
