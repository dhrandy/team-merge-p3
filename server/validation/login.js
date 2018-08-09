const Validator = require ("validator")
const isEmpty = require("./is-empty")

module.exports = function validateLoginInput (data) {
   let errors = {}

   data.email = !isEmpty(data.email) ? data.email : ""
   data.password = !isEmpty(data.password) ? data.password : ""

   // TEST EMAIL 
   if(!Validator.isEmail(data.email)) {
      errors.email = "Enter a valid email address"
   } 
   if(Validator.isEmpty(data.email)) {
      errors.email = "Email field is required"
   }

   //TEST PASSOWRD
   if(Validator.isEmpty(data.password)) {
      errors.password = "Password is required"
   }
   return {
      errors, 
      isValid: isEmpty(errors)
   }

}