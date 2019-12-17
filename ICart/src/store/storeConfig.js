import { 
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import cartItemsReducer from './reducers/cartItems'
import productsReducer from './reducers/product'
import usersReducer from './reducers/users'

const reducers = combineReducers({
    cartItems: cartItemsReducer,
    user: userReducer,
    products: productsReducer,
    users: usersReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig