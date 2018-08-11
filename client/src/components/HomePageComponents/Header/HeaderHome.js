import React, {Component} from 'react';
import './header.css'

export default class HeaderHome extends Component {
  render() {
    return (
      <header>
      <div className="jumbotron jumbotron-fluid jumbotron-home">
      <div className="container">
      <h1 id="title-shadow">PRESCRIPTION <br />PLANNER</h1>
      </div>
      </div>
    </header>
    );
  }
}
