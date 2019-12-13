import { REMOVE_FROM_CART } from './actionTypes'

export function removeItemFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}