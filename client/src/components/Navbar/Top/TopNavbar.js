import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './topNavbar.css';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {logoutUser} from "../../../actions/authActions"

class TopNavbar extends Component {
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
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/medication">Medication</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Diet</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Health</a>
            </li> 
            {/* Karina's  */}
            <li className="nav-item">
              <a className="nav-link" href="/prescription">Add a Medication</a>
            </li> 
            {/* Karina's */}
          </ul>
        </div> 
      </nav>
    );
  };
};

TopNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})((TopNavbar))

  }
}
//              <a className="nav-link" href="/login">Login</a>
//              <Link className={"nav-link"} to={"/login"}>Login</Link>
//              <Link className={"nav-link"} to={"/medication"}>Medication</Link>
//              <a className="nav-link" href="/prescription">Add a Medication</a>