import React, {Component} from 'react';
import './nav.css'

export default class NavHome extends Component {
  render() {
    return (
        <nav>
        <div className="topnav">
            <div className="topnav-right">
                <a href="/app-home">App</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
      </nav>
    );
  }
}
