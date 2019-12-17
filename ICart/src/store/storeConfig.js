import { 
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import cartItemsReducer from './reducers/cartItems'

const reducers = combineReducers({
    cartItems: cartItemsReducer,
    user: userReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig