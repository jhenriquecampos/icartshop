import { ADD_TO_CART } from './actionTypes'

export function addItemToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: {
            product: item.product,
            count: item.count
        }
    }
}