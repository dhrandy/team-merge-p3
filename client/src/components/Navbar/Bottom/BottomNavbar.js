import React, {Component} from 'react';
import './bottomNavbar.css';

export default class BottomNavbar extends Component {
  render() {
    return (
      <div className = "center">
        <nav className="navbar navbar-bottom navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="/medication"><i className="fas fa-briefcase-medical icon-space"></i></a>
              <a href="/food"><i className="fas fa-utensils icon-space"></i></a>
              <a href="/prescription"><i className="fas fa-plus-square icon-space"></i></a>
              <a href="/news"><i className="fas fa-newspaper icon-space"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
