import React, { Component } from 'react'
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import classnames from "classnames"
import {connect} from "react-redux"
import {registerUser} from "../../actions/authActions"
import './register.css'

class Register extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		password2: "",
		errors: {}
	}
	

	// if we get errors from redux state set those errors to this state
	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({errors: nextProps.errors})
		}
	}

	onChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit = e => {
		e.preventDefault()
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}
		//allows us to use this.props.history to redirect from this action
		this.props.registerUser(newUser, this.props.history)
	}

	render() {

		const {errors} = this.state
		
		return (
			<div className="container" id="login-section">
				<h3>Sign Up</h3>
                <hr />
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input type="text" className={classnames("form-control", {"is-invalid": errors.name})} placeholder="Enter name" name="name" value={this.state.name} onChange={this.onChange} />
						{errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
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
//Mapping proptypes
Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}


// Puts  state inside property (anything in that state will be accessible) this comes from the root reducer
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register))