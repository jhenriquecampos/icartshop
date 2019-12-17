import { ADD_PRODUCT, SET_PRODUCTS, REMOVE_PRODUCT } from './actionTypes'
import axiosConfig from './../../config/axiosConfig'

import axios from 'axios'

export const addProduct = product => {
    return dispatch => {
        axiosConfig.post('/products.json', { ...product })
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
    }
}

export const setProducts = prods => {
    return {
        type: SET_PRODUCTS,
        payload: prods
    }
}

export const fetchProducts = () => {
    return dispatch => {
        axiosConfig.get('/products.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawProducts = res.data
                const prods = []
                for (let key in rawProducts) {
                    prods.push({
                        ...rawProducts[key],
                        id: key
                    })
                }

                dispatch(setProducts(prods))
            })
    }
}

export const removeProduct = id => {
    return dispatch => {
        axiosConfig.post('/users.json', { ...user })
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
    }
}