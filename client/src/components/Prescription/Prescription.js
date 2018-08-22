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
  dosageDays: "",
  dosageTime: "",
  time: "",
  frequency: "",
  frequencyUnits: ""
};

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

onSubmit = (e) => {
  e.preventDefault()
  // const prescription = {
  //   name: this.state.name,
  //   dosageStrength: this.state.dosageStrength,
  //   dosageStrengthUnits: this.state.dosageStrengthUnits,
  //   dosageDays: this.state.dosageDays,
  //   dosageTime: this.state.dosageTime,
  //   time: this.state.time,
  //   frequency: this.state.frequency,
  //   frequencyUnits: this.state.frequencyUnits
  // }
  // console.log(this.state)
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
                <input type="name" size="3" name="dosageStrenth" value={this.state.dosageStrength} onChange={this.handleChange}/> 
                ml<input type="checkbox" value={this.state.dosageStrengthUnits} onChange={this.handleChange}/>
                tablets<input type="checkbox" value={this.state.dosageStrengthUnits} onChange={this.handleChange}/>
              <br/>
              <br/>
            </div>

            <div>
              <h4> How often will you be taking the medication:</h4>
              
              <div>
              <h4> Days of the week </h4>
              Mon <input value="monday" type="checkbox" />
              Tue <input value="tuesday" type="checkbox" />
              Wed <input value="wednesday" type="checkbox" />
              Thur <input value="thursday" type="checkbox" />
              Fri <input value="friday" type="checkbox" />
              Sat <input value="saturday" type="checkbox" />
              Sun <input value="sunday" type="checkbox" />
              <br/>
              <label>
                Times per day:
                <select vlaue={this.state.value} onChange={this.handleChange}>
                  <option value="1"> 1 </option>
                  <option value="2" >2</option>
                  <option value="3" >3</option>
                  <option value="4" >4</option>
                  <option value="5" >5</option>
                  <option value="6" >6</option>
                  <option value="7" >7</option>
                  <option value="8" >8</option>
                </select>
              </label>
                <br/>
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
              

              <Link to="/food" >
                <button type="submit" className="btn btn-secondary">Next</button> 
              </Link>

            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Prescription
