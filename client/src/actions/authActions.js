import axios from "axios"
import setAuthToken from "../utils/setAuthToken"
import jwt_decode from "jwt-decode"

import {GET_ERRORS, SET_CURRENT_USER} from "./types";


//REGISTER USER 

export const registerUser = (userData, history) => dispatch => {
   axios
      //Sends the user data to the server to create a new user
      .post("/api/users/register", userData)
      //if the new user is successful redirect to the login page
      .then(res => history.push("/login"))
      //dispactch an action type to get errors
      .catch(err => 
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
         })
      )
}

//LOGIN  and get TOKEN

export const loginUser = (userData, history) => dispatch => {
   axios 
      .post("/api/users/authenticate", userData)
      .then(res => {
         //Save token to local storage
         const {token} = res.data
         //set token to localStorage
         localStorage.setItem("jwtToken", token)
         //Set Token to auth header
         setAuthToken(token)
         //decode token to get user data
         const decoded = jwt_decode(token)
         //set current user 
         dispatch(setCurrentUser(decoded))
      })
      .catch(err => 
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
         })
      )
}

//SET LOGGED IN USER

export const setCurrentUser = (decoded) => {
   return {
      type: SET_CURRENT_USER,
      payload: decoded
   }
}

//LOG USER OUT 
export const logoutUser = () => dispatch => {
	
	// REMOVE TOKEN FROM LOCAL STORAGE
	localStorage.removeItem("jwtToken")

	//REMOVE AUTH HEADER for future requests by passing in false
	setAuthToken(false)

	//SET CURRENT USER to empty object which will set isAuthenticated to false
	dispatch(SET_CURRENT_USER({}))
}