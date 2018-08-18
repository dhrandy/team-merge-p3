import React, {Component} from 'react';
import './nav.css'

export default class NavHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/app-home">App</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/news-homepage">Medical News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="mailto:prescriptionplanner@prescriptionplanner.com">
                        Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/privacy-policy">Privacy</a>
                    </li>
                  </ul>
                </div>
              </nav>
    );
  }
}