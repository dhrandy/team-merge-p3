import React, {Component} from 'react';
import Medication from '../Medication/Medication'
import './activity.css'
import axios from 'axios';

class Activity extends Component {

  state = {
    activityRestriction: "",
    redirect: false
  }
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onClick = (e) => {
    e.preventDefault()
        let email = this.props.email
        let token = this.props.token
        let activityRestrictions = []
        if(this.state.activityRestriction !== "") activityRestrictions.push({description: this.state.activityRestriction})
        axios.put("/api/prescriptions/updatePrescription/"+this.props.pid._id, {activityRestrictions: activityRestrictions})
        .then(res => {
             this.props.action({email, token}) 
             this.setState({redirect: true})
        })
  }


  render () {
        if (this.state.redirect) return(<Medication {...this.props}/>)
    return (
      <div id="activitypage">
        <h4> Activity Restriction </h4>
        <h6> Please enter any activity restriction associated with the medication</h6>
        <input type="text" aria-describedby="" placeholder="Activity Restriction" name="activityRestriction" value={this.state.activityRestriction} onChange={this.onChange} />
          <br/><br/>
        <button onClick={this.onClick} type="submit" className="btn btn-secondary">Next</button> 

      </div>
      

    )
  }
}


export default Activity