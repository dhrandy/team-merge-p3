import React, {Component} from 'react';
import './activity.css'
import { Link } from 'react-router-dom';
import axios from 'axios';



class Activity extends Component {

  state = {
    activityRestriciton: ""
  }
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    axios.put("/api/prescriptions/createPrescription", this.state)
    .then(res => {
      let email = this.props.userState.userData.email
      let pid = {_id: res.data._id}
      axios.put("/api/prescriptions/addPrescriptionToUser/" + email, pid )
    })
    console.log(e)
  }


  render () {
    return (
      <div id="activitypage">
        <h4> Activity Restriction </h4>
        <h6> Please enter any activity restriction associated with the medication</h6>
        <input type="text" aria-describedby="" placeholder="Activity Restriction" value={this.state.value} onChange={this.onChange} />
          <br/><br/>
        <Link to="/medrestriction" >
        <button type="submit" className="btn btn-secondary">Next</button> 
        </Link> 

      </div>
      

    )
  }
}


export default Activity


