import { LOGIN, LOGOUT, ADD_USER } from './actionTypes'
import axiosConfig from './../../config/axiosConfig'

import axios from 'axios'

export const login = user => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const addUser = user => {
    return dispatch => {
        axiosConfig.post('/users.json', { ...user })
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
    }
}