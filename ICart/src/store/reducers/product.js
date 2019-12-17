import { SET_PRODUCTS } from './../actions/actionTypes'

const products = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }

}

export default products