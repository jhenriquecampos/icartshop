import { LOGIN, LOGOUT, ADD_USER, SET_USERS } from './actionTypes'
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

export const setUsers = users => {
    return {
        type: SET_USERS,
        payload: users
    }
}

export const getUsers = () => {
    return dispatch => {
        axiosConfig.get('/users.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawUsers = res.data
                const users = []
                for (let key in rawUsers) {
                    users.push({
                        ...rawUsers[key],
                        id: key
                    })
                }

                dispatch(setUsers(users))
            })
    }
}