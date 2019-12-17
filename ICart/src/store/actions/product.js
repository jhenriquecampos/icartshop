import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes'
import axiosConfig from './../../config/axiosConfig'

import axios from 'axios'

export const addProduct = product => {
    return dispatch => {
        axiosConfig.post('/users.json', { ...product })
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
    }
}

// export const removeProduct = id => {
//     return dispatch => {
//         axiosConfig.post('/users.json', { ...user })
//             .catch(err => console.log(err))
//             .then(res => console.log(res.data))
//     }
// }