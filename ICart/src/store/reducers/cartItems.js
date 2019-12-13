import { ADD_TO_CART, REMOVE_FROM_CART, SHOP_FROM_CART } from '../actions/actionTypes'

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let changeFlag = false;
            state.forEach(element => {
                if(element.product.id == action.payload.product.id) {
                    element.count = element.count + action.payload.count
                    changeFlag = true;
                }
            })
            if(changeFlag) {
                return [...state]
            } else {
                return [...state, action.payload]
            }
        case REMOVE_FROM_CART:
            return state.filter(cartItems => cartItems.product.id !== action.payload.product.id)
        case SHOP_FROM_CART:
            return []
        default:
            return state
    }

}

export default cartItems