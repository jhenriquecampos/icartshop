import { createStore, combineReducers } from 'redux'
import cartItemsReducer from './reducers/cartItems'
import userReducer from './reducers/user'

const reducers = combineReducers({
    cartItems: cartItemsReducer,
    user: userReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig