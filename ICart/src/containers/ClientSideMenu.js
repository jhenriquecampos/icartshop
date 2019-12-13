import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { ShopStackMenu, CartStackMenu } from './ClientStackMenus'

export default createDrawerNavigator({
    ShopStackMenu: {
        screen: ShopStackMenu,
        navigationOptions: { title: 'Todos os produtos' },
    },
    CartStackMenu: {
        screen: CartStackMenu,
        navigationOptions: { title: 'Carrinho' },
    }
}, { drawerWidth: 260 })