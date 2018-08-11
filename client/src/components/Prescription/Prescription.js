import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './prescription.css'
import Counter from '../Counter/Counter'

class Prescription extends Component {

state = {
  name: "",
  dosageStrength: "",
  dUnits: "",
  frequency: "",
  fUnits: ""
};

  render () {
    return (
      <div className="container" id="medication-page">
        <h3> Add a Medication </h3>
          <hr />
        <form>
          <div className="form-group">
            <h5> Name </h5>
            <input type="name" id="name" aria-describedby="" placeholder="Medication Name" name="name" size="40" value={this.state.name} />
          </div>
          <div>
            <h5> Dosage </h5>
              <br/>
            <h6> Amount </h6>
            <Counter />
              <br/>
            <h6>Frequency </h6>
            <Counter />
              <br/>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="hours" value="option1" />
              <label class="form-check-label" for="checkbox1">Hours </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="days" value="option2" />
              <label class="form-check-label" for="checkbox2">Per day </label>
            </div>
              <br/>
              <br/>
            <button type="submit" class="btn btn-secondary">Next</button>
          </div>
          
        </form>
      </div>
    )
  }
}

export default Prescription
