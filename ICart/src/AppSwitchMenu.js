import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './containers/Login'
import ClientSideMenu from './containers/ClientSideMenu'

class ShoppingCart extends Component {
    render() {
        return (
            <AppSwitchNavigator />
        );
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    // Login: {
    //     screen: Login
    // },
    ClientSideMenu: {
        screen: ClientSideMenu
    }
})

const AppSwitchMenu = createAppContainer(AppSwitchNavigator);

export default AppSwitchMenu;