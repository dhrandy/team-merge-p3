const Validator = require ("validator")
const isEmpty = require("./is-empty")

module.exports = function validateRegisterInput (data) {
   let errors = {}

   data.name = !isEmpty(data.name) ? data.name : ""
   data.phone = !isEmpty(data.phone) ? data.phone : ""
   data.email = !isEmpty(data.email) ? data.email : ""
   data.password = !isEmpty(data.password) ? data.password : ""
   data.password2 = !isEmpty(data.password2) ? data.password2 : ""

   //TEST NAME
    if(Validator.isEmpty(data.name)) {
      errors.name = "Name field is required"
   }
   if(!Validator.isLength(data.name, {min: 2, max: 30})) {
      errors.name = "Name must be between 2 and 30 characters"
   }
  
   //TEST PHONE
   if(Validator.isEmpty(data.phone)) {
      errors.phone = "Phone number is required"
   }
   if(data.phone.length != 10) {
      errors.phone = "Phone number must be 10 numbers"
   }

   // TEST EMAIL 
   if(Validator.isEmpty(data.email)) {
      errors.email = "Email field is required"
   }
   if(!Validator.isEmail(data.email)) {
      errors.email = "Enter a valid email address"
   }

   //TEST PASSOWRD
   if(!Validator.isLength(data.password, {min: 8, max: 15})) {
      errors.password = "Password must be between 8 and 15 characters"
   }
   if(Validator.isEmpty(data.password)) {
      errors.password = "Password is required"
   }

   //TEST PASSWORD 2
   if(Validator.isEmpty(data.password2)) {
      errors.password2 = "Password is required"
   }
   if(!Validator.equals(data.password, data.password2)) {
      errors.password2 = "Passwords must match"
   }
   return {
      errors, 
      isValid: isEmpty(errors)
   }

}