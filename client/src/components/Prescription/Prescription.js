import React, {Component} from 'react';
import './prescription.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Prescription extends Component {
constructor(props) {
  super(props);
  this.state = {value: "eastern"};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
  this.setState({value: e.target.value});
}
handleSubmit(e) {
  e.preventDefault();
}

state = {
  name: "",
  dosageStrength: "",
  dosageStrengthUnits: "",
  frequency: "",
  frequencyUnits: ""
};

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

onSubmit = (e) => {
  e.preventDefault()
  console.log(this.state)
  axios.put("/api/prescriptions/createPrescription", this.state)
  .then(res => {
    let email = this.props.userState.userData.email
    let pid = {_id: res.data._id}
    axios.put("/api/prescriptions/addPrescriptionToUser/" + email, pid )
    console.log(this.props.userState.userData)
    console.log(res.data._id)
    
  })
  .catch(err =>{
    console.log(err)
  })
  console.log(e)
}

  render () {
    return (
      <div className="container" id="medication-page">
        <h3> Add a Medication </h3>
          <hr/>

        <form onSubmit= {this.onSubmit}>

          <div className="form-group">
            <h5> Name </h5>
            <input type="name" id="name" aria-describedby="" placeholder="Medication Name" name="name" size="40" value={this.state.name} onChange={this.onChange} />
          </div>

          <div>
            <div>
              <h5> Dosage </h5>
                <br/>
                <input type="name" size="3" name="dosageStrenth"/> ml/tablet(s)
              <br/>
              <br/>
            </div>

            <div>
              <h4> How often: </h4>
              <div>
                {/* checkboxes go heere */}
              </div>
              <div>
              <h4> Number of times per day </h4>
              Mon <input type="checkbox" />
              Tue <input type="checkbox" />
              Wed <input type="checkbox" />
              Thur <input type="checkbox" />
              Fri <input type="checkbox" />
              Sat <input type="checkbox" />
              Sun <input type="checkbox" />
              
              <label>
                Select your time zone:
                <select vlaue={this.state.value} onChange={this.handleChange}>
                  <option value="eastern"> Eastern </option>
                  <option value="pacific" >Pacific</option>
                  <option value="central" >Central</option>
                  <option value="mountain" >Mountain</option>

                </select>
              </label>
          
              </div>
              

              {/* <Link to="/food" >  */}
                <button type="submit" className="btn btn-secondary">Next</button> 
              {/* </Link> */}

            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Prescription
