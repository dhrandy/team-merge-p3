import React, { Component } from 'react';
import Activity from '../Activity/Activity'
import './food.css';
import axios from 'axios';

class Food extends Component {

    state = {
        foodRestriction: "",
        redirect: false
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onClick = (e) => {
        e.preventDefault()

        let email = this.props.email
        let token = this.props.token
        let foodRestrictions = []
        if(this.state.foodRestriction !== "") foodRestrictions.push({description: this.state.foodRestriction})
        axios.put("/api/prescriptions/updatePrescription/"+this.props.pid._id, {foodRestrictions: foodRestrictions})
        .then(res => {
             this.props.action({email, token}) 
             this.setState({redirect: true})
        })
    }
    
    render() {
        if (this.state.redirect) return(<Activity email={this.props.email} token={this.props.token} pid={this.props.pid} action={this.props.action}/>)

        return (
            <div className="foodpage">
                <h4>Please enter any food restrictions associated with the medication</h4>
                <input type="text" id="food" aria-describedby="" placeholder="Food Restriction" name="foodRestriction" value={this.state.foodRestriction} onChange={this.onChange} />
                    <br/>
                    <br/>
                    <button onClick={this.onClick} type="submit" className="btn btn-secondary">Next</button> 
            </div>

        );
    };
};

export default Food