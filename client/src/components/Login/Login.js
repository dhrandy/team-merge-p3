import React, { Component } from 'react'
import './login.css'
import axios from "axios"
import classnames from "classnames"


class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: "",
			password: "",
			errors: {}
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault()
		const user = {
			email: this.state.email,
			password: this.state.password,
		}
		axios.post("/api/users/authenticate", user)
			.then(res => console.log(res.data))
			.catch(err => this.setState({errors: err.response.data}))
	}

	

	render() {
		const {errors} = this.state
		return (
			<div className="container" id="login-section">
				<h3>Sign In</h3>
				<hr />
				<form onSubmit = {this.onSubmit}>
					<div className="form-group">
						<label id="exampleInputEmail1">Email address</label>
						<input type="email" className={classnames("form-control", {"is-invalid": errors.email})} aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
						{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
					</div>
					<div className="form-group">
						<label id="exampleInputPassword1">Password</label>
						<input type="password" className={classnames("form-control", {"is-invalid": errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
						{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
					</div>
					<div id="login-links">
						<div>	
							<a href="#">Forgot Password?</a>	
						</div>	
						<br />	
						<div>	
							<button type="submit" className="btn btn-primary" id="sign-in" >Sign In</button>	
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