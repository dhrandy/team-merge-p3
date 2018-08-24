import React, {Component} from 'react';
import Food from "../Restriction/Food/Food";
import './prescription.css';
import TimeData from './TimeData';
import axios from 'axios';

class Prescription extends Component {
  state = {
    redirect: false,
    name: "",
    dosage: "",
    timeZone: "eastern",
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
    time1: "00:00",
    time2: "12:00",
    time3: "18:00",
    time4: "",
    time5: "",
    time6: "",
    pid: {}
  };


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCheckBoxChange = (e) => {
    this.setState({[e.target.name]: e.target.checked});
  }

  handleTimeChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let userData = {
      name: this.state.name,
      dosage: this.state.dosage,
      dosageDays: [],
      dosageTime: [],
      timeZone: this.state.timeZone
    }
    if (this.state.mon) userData.dosageDays.push({day: 'Mon'})
    if (this.state.tue) userData.dosageDays.push({day: 'Tue'})
    if (this.state.wed) userData.dosageDays.push({day: 'Wed'})
    if (this.state.thu) userData.dosageDays.push({day: 'Thu'})
    if (this.state.fri) userData.dosageDays.push({day: 'Fri'})
    if (this.state.sat) userData.dosageDays.push({day: 'Sat'})
    if (this.state.sun) userData.dosageDays.push({day: 'Sun'})

    if (this.state.time1 !== "") userData.dosageTime.push({time: this.state.time1})
    if (this.state.time2 !== "") userData.dosageTime.push({time: this.state.time2})
    if (this.state.time3 !== "") userData.dosageTime.push({time: this.state.time3})
    if (this.state.time4 !== "") userData.dosageTime.push({time: this.state.time4})
    if (this.state.time5 !== "") userData.dosageTime.push({time: this.state.time5})
    if (this.state.time6 !== "") userData.dosageTime.push({time: this.state.time6})

    axios.put("/api/prescriptions/createPrescription", userData)
    .then(res => {
      let email = this.props.userState.userData.email
      let token = this.props.userState.token
      let pid = {_id: res.data._id}
      axios.put("/api/prescriptions/addPrescriptionToUser/" + email, pid )
           .then( () => {
             this.props.action({email, token}) 
             this.setState({pid, redirect: true})
           })
    })
    .catch(err =>{
      console.log(err)
    })
    console.log(e)
  }

  render () {
    if (this.state.redirect) return(
        <Food 
            email={this.props.userState.userData.email} 
            token={this.props.userState.token} 
            pid={this.state.pid} 
            pName={this.state.name}
            action={this.props.action}/>)

    return (
      <div className="container" id="medication-page">

        <h3> Add a Medication </h3>
        <hr/>

        <form onSubmit= {this.handleSubmit}>
          <div className="form-group">
            <h5> Name </h5>
            <input type="name" id="name" aria-describedby="" placeholder="Medication Name" name="name" size="40" value={this.state.name} onChange={this.handleChange} />
          </div>
          <br/>
          <div>
            <div>
              <h5> Dosage </h5>
                <input type="name" size="20" name="dosage" value={this.state.dosage} onChange={this.handleChange}/> 
            </div>
            <br/>
            <br/>
            <div>
              <h4> How often will you be taking the medication:</h4>
              <br/>
              <label>
                Select your time zone:
                <select name="timeZone" value={this.state.timeZone} onChange={this.handleChange}>
                  <option value="eastern"> Eastern </option>
                  <option value="pacific" >Pacific</option>
                  <option value="central" >Central</option>
                  <option value="mountain" >Mountain</option>
                </select>
              </label>
              <div>
                <h4> Days of the week </h4>
                <input type="checkbox" name="mon" checked={this.state.mon} onChange={this.handleCheckBoxChange}/> <label className="dayLabel">Mon</label>
                <input type="checkbox" name="tue" checked={this.state.tue} onChange={this.handleCheckBoxChange}/> <label className="dayLabel">Tue</label>
                <input type="checkbox" name="wed" checked={this.state.wed} onChange={this.handleCheckBoxChange}/> <label className="dayLabel">Wed</label>
                <input type="checkbox" name="thu" checked={this.state.thu} onChange={this.handleCheckBoxChange}/> <label className="dayLabel">Thu</label>
                <input type="checkbox" name="fri" checked={this.state.fri} onChange={this.handleCheckBoxChange}/> <label className="dayLabel">Fri</label>
                <input type="checkbox" name="sat" checked={this.state.sat} onChange={this.handleCheckBoxChange}/> <label className="dayLabel">Sat</label>
                <input type="checkbox" name="sun" checked={this.state.sun} onChange={this.handleCheckBoxChange}/> <label className="dayLabel">Sun</label>
              </div>
              <br/>
              <div>
                <label>
                  Times per day:
                  <TimeData name="time1" value={this.state.time1} onChange={this.handleTimeChange}/>
                  <TimeData name="time2" value={this.state.time2} onChange={this.handleTimeChange}/>
                  <TimeData name="time3" value={this.state.time3} onChange={this.handleTimeChange}/>
                  <TimeData name="time4" value={this.state.time4} onChange={this.handleTimeChange}/>
                  <TimeData name="time5" value={this.state.time5} onChange={this.handleTimeChange}/>
                  <TimeData name="time6" value={this.state.time6} onChange={this.handleTimeChange}/>
                </label>
              </div>
              <br/>
              
              <button type="submit" className="btn btn-secondary">Next</button> 

            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Prescription