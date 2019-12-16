import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import { ShopStackMenu, CartStackMenu } from './ClientStackMenus'

export default createDrawerNavigator({
    ShopStackMenu: {
        screen: ShopStackMenu,
        params: {type: 0, title: 'Todos os produtos'},
        navigationOptions: { title: 'Todos os produtos' },
    },
    DrinksStackMenu: {
        screen: ShopStackMenu,
        params: {type: 1, title: 'Bebidas'},
        navigationOptions: { title: 'Bebidas' },
    },
    BooksStackMenu: {
        screen: ShopStackMenu,
        params: {type: 2, title: 'Livros'},
        navigationOptions: { title: 'Livros' },
    },
    CartStackMenu: {
        screen: CartStackMenu,
        navigationOptions: { title: 'Carrinho' },
    }
}, { 
    drawerWidth: 260
})