import React, { Component } from 'react'
import API from "../../utils/API";
import { Link } from "react-router-dom";
import './login.css'

class Login extends Component {
	state = {
		email: "",
		password: ""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	signIn = () => {
		let email = this.state.email;
		console.log(`DEBUG - signIn()`, JSON.stringify(this.state));
		//
		// this is not using AXIOS therefore must specify /api/... to match server side
		//
		fetch("/api/authenticate", {
    	headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify(this.state)
		})
		.then(function(res){ 
			//
			// This is a TEST to ensure we can read data from the DB
			//
			console.log(email);
			API.getUserData(email)
			   .then( results => {
				   console.log(	'DEBUG - signIn() - getUserData', results );
			   })

		})
		.catch(function(res){ console.log('DEBUG - failed ', res) })
	}

	render() {
		return (
			<div className="container" id="login-section">
				<h3>Sign In</h3>
				<hr />
				<form>
					<div className="form-group">
						<label id="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleInputChange} />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label id="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
					</div>
					<div id="login-links">
						<div>	
							<a href="#">Forgot Password?</a>	
						</div>	
						<br />	
						<div>	
							<Link to={"/"}>
							    <button type="button" className="btn btn-primary" id="sign-in" onClick={this.signIn}>Sign In</button>	
							</Link>
						</div>	
						<br />	
						<div>
							<a className="nav-link" href="/register"><button type="button" className="btn btn-primary">Create New Account</button></a>	
						</div>	
					</div>
				</form>
			</div>
		)
	}
}

export default Login