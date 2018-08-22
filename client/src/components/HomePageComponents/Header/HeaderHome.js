import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css'

export default class HeaderHome extends Component {
  render() {
    return (
      <header>
      <div className="jumbotron jumbotron-fluid jumbotron-home">
      <div className="container animated fadeInUp">
      <h1 id="title-shadow">P<span className="title-smaller">RESCRIPTION</span> <br />P<span className="title-smaller">LANNER</span></h1>
      <hr id="title-hr" align="left" />
      <h5>
      <p>Medicine Information at a Glance!</p>
        <ul>
          <li>Dosage Information</li>
          <li>Meal Requirements</li>
          <li>Food Restrictions</li>
          <li>Side Effects</li>
        </ul>
      </h5>
      <p>
      <Link to="/login"><button type="button" className="btn btn-info">APP LOGIN</button></Link>
      </p>
      </div>
      </div>
    </header>
    );
  }
}
