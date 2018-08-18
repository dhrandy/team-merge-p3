import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './register.css'
import axios from "axios"
import classnames from "classnames"

class Register extends Component {
	state = {
		 name: "",
		 phone:"",
		 email: "",
	    password: "",
	    password2: "",
		errors: {},
		redirect: false
	}
	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault()
		const newUser = {
			name: this.state.name,
			phone: this.state.phone,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}
		axios.post("/api/users/register", newUser)
			.then(res => {
				this.props.action( {email: this.state.email} )
				this.setState({redirect: true})
			})
			.catch(err => this.setState({errors: err.response.data}))
	}

	render() {
		if (this.state.redirect) return(<Redirect push to='/login' />)

		const {errors} = this.state

		return (
			<div className="container" id="login-section">
				<h3>Sign Up</h3>
                <hr />
				<form id="reg-form" onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input type="text" className={classnames("form-control", {"is-invalid": errors.name})} placeholder="Enter name" name="name" value={this.state.name} onChange={this.onChange} />
						{errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" className={classnames("form-control", {"is-invalid": errors.phone})} placeholder="Enter Phone Number" name="phone" value={this.state.phone} onChange={this.onChange} />
						{errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
					</div>
					<div className="form-group">
						<label>Email address</label>
						<input type="email" className={classnames("form-control", {"is-invalid": errors.email})} aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
						{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className={classnames("form-control", {"is-invalid": errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
						{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
					</div>
					<div className="form-group">
						<label>Confirm Password</label>
						<input type="password" className={classnames("form-control", {"is-invalid": errors.password2})} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
						{errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
	
					</div>
					<div id="login-links">
						<br />
					<div>
						<button type="submit" className="btn btn-primary" id="create-account" >Create New Account</button>
					</div>
					</div>

				</form>
			</div>
		)
	}
}

export default Register