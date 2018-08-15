import isEmpty from "../Validation/is-empty"

import {SET_CURRENT_USER} from "../actions/types"

const initialState = {
   isAuthenticated: false,
   user: {}
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				//check to see if the payload is empty
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
		default:
			return state
	}
}