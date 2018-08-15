// this file will make it so the authorization token is set to every request

import axios from "axios"

const setAuthToken = token => {
   if(token) {
      //apply token to every request
      axios.defaults.headers.common["Authorization"] = token
   }
   else {
      //DELETE THE AUTH HEADER
      delete axios.defaults.headers.common["Authorizations"]
   }
}

export default setAuthToken