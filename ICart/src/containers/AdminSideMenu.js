import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import AddProduct from './AddProduct'

export default createDrawerNavigator({
    ShopStackMenu: {
        screen: AddProduct,
        navigationOptions: { title: 'Adicionar produto' },
    },
}, { 
    drawerWidth: 260,
    contentComponent: SideMenuContent
})