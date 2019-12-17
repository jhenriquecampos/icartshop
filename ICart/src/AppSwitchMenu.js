import React, { Component } from "react"
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './containers/Login'
import ClientSideMenu from './containers/ClientSideMenu'
import AdminSideMenu from './containers/AdminSideMenu'
import SignUp from './containers/SignUp'

const AppSwitchNavigator = createSwitchNavigator({
    Login: {
        screen: Login
    },
    ClientSideMenu: {
        screen: ClientSideMenu
    },
    AdminSideMenu: {
        screen: AdminSideMenu
    },
    SignUp: {
        screen: SignUp
    }
})

const AppSwitchMenu = createAppContainer(AppSwitchNavigator)

export default AppSwitchMenu