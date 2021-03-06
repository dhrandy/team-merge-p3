import React, {Component} from 'react';
import './homePage.css';

 export default class HomePage extends Component {
    render() {
      return (
        <div className="container">
          <h4>What can the personal planner app do for you?</h4>
          <h5>You can:</h5>
          <ul>
            <li>Add your prescriptions</li>
            <li>View food restrictions</li>
            <li>View medication restrictions</li>
            <li>View activity restrictions</li>
          </ul>
        </div>
      );
    };
};