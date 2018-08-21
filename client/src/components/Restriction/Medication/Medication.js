import React, {Component} from 'react';
import './medication.css'
import { Link } from 'react-router-dom';
import axios from 'axios';



class Medication extends Component {

  state = {
    medRestriction: ""
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
      <div id="medicationpage">
        <h1> Medication Restriction </h1>
        <h4> Please enter any medication restriction associated with the medication</h4>
          <br/>
        <input type="text" aria-describedby="" placeholder="Medication Restriction" value={this.state.value} onChange={this.onChange} />
          <br/> <br/>
        <input type="text" aria-describedby="" placeholder="Medication Restriction" value={this.state.value} onChange={this.onChange} />
          <br/> <br/>
        <input type="text" aria-describedby="" placeholder="Medication Restriction" value={this.state.value} onChange={this.onChange} />
          <br/> <br/>
        <Link to="/account" >
        <button onSubmit={this.onSubmit} type="submit" className="btn btn-secondary">Submit</button> 
        </Link>
      </div>
    )
  }
}


export default Medication

