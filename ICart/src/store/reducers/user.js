import { LOGIN, LOGOUT } from '../actions/actionTypes'

const initialState = {
    email: null,
    name: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name
            }
        case LOGOUT:
            return {
                ...state,
                email: null,
                name: null
            }
        default:
            return state
    }
}

export default user