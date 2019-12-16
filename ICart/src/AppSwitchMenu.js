import React, { Component } from "react"
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './containers/Login'
import ClientSideMenu from './containers/ClientSideMenu'
import SignUp from './containers/SignUp'
import AddProduct from './containers/AddProduct'

const AppSwitchNavigator = createSwitchNavigator({
    Login: {
        screen: Login
    },
    ClientSideMenu: {
        screen: ClientSideMenu
    },
    SignUp: {
        screen: SignUp
    },
    AddProduct: {
        screen: AddProduct
    }
})

const AppSwitchMenu = createAppContainer(AppSwitchNavigator)

export default AppSwitchMenu