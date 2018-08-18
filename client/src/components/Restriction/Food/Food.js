import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './food.css';
import axios from 'axios';



class Food extends Component {

    state = {
        foodRestriction: ""
    };

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
    
    render() {
        return (
            <div className="foodpage">
                <h4>Please enter any food restrictions associated with the medication</h4>
                <input type="text" id="food" aria-describedby="" placeholder="Food Restriction" name="name" value={this.state.name} onChange={this.onChange} />
                    <br/>
                    <br/>
                <Link to="/activity" >
                    <button onSubmit={this.onSubmit} type="submit" className="btn btn-secondary">Next</button> 
                </Link>
            </div>

        );
    };
};

export default Food