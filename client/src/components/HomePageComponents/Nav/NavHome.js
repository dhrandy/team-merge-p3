import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav.css'

export default class NavHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="animated fadeInUp collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/news-homepage" className="nav-link">Medical News</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="mailto:prescriptionplanner@prescriptionplanner.com">
                Contact</a>
            </li>
            <li className="nav-item">
              <Link to="/privacy-policy" className="nav-link">Privacy</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}