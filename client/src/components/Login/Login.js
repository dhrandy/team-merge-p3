import React, { Component } from 'react'

import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {loginUser} from "../../actions/authActions"

import { Redirect } from 'react-router-dom'
import './login.css'
import classnames from "classnames"
import './login.css'

//class LoginWithHistory extends Component {
class Login extends Component {
	state = {
		email: "",
		password: "",
		errors: {}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.isAuthenticated) {
			this.props.history.push("/profile")
		}

		if(nextProps.errors) {
			this.setState({errors: nextProps.errors})
		}
	}


	onSubmit = (e) => {
		e.preventDefault()
		const user = {
			email: this.state.email,
			password: this.state.password,
		}	

		this.props.loginUser(user)
	}	
	
	onChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		if (this.state.redirect) {
			return(<Redirect push to='/medication' />)
		}

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

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(withRouter(Login))

//const Login = withRouter(LoginWithHistory)