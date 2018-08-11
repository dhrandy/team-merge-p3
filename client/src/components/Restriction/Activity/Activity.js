import React, {Component} from 'react';
import './activity.css'

class Activity extends Component {

  render () {
    return (
      <div id="activitypage">
        <h1> Activity Restriction </h1>
        <h4> Please enter any activity restriction associated with the medication</h4>
        <input type="text" id="activity" aria-describedby="" placeholder="Activity Restriction" name="name" />
      </div>
    )
  }
}


export default Activity

// size="50"