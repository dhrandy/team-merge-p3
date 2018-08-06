import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './register.css'

class Register extends Component {
	state = {
		name: "",
		username: "",
		email: "",
		password: ""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

    createAccount = () => {
		console.log(`DEBUG - signIn()`, JSON.stringify(this.state));
		//
		// this is not using AXIOS therefore must specify /api/... to match server side
		//
		fetch("/api/register", {
    	headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify(this.state)
		})
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) })
	};

	render() {
		return (
			<div className="container" id="login-section">
				<h3>Sign Up</h3>
                <hr />
				<form>
                <div className="form-group">
						<label id="nameInput">Name</label>
						<input type="text" className="form-control" id="name"  placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleInputChange} />
					</div>
                    <div className="form-group">
						<label id="userNameInput">User Name</label>
						<input type="text" className="form-control" id="user-name" placeholder="Enter User Name" name="username" value={this.state.username} onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<label id="InputEmail1">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleInputChange} />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label id="InputPassword1">Password</label>
						<input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
					</div>
					<div id="login-links">
						<br />
						<div>
							<Link to={"/"}>
							  <button type="button" className="btn btn-primary" id="create-account" onClick={this.createAccount}>Create New Account</button>
							</Link>
						</div>
					</div>

				</form>
			</div>
		)
	}
}

export default Register