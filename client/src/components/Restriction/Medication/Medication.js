import React, {Component} from 'react';
import './medication.css'

class Medication extends Component {

  render () {
    return (
      <div id="medicationpage">
        <h1> Medication Restriction </h1>
        <h4> Please enter any medication restriction associated with the medication</h4>
        <input type="text" id="activity" aria-describedby="" placeholder="Medication Restriction" name="name" />
        <button class="btn btn-secondary"> add another mediction </button>
      </div>
    )
  }
}


export default Medication





