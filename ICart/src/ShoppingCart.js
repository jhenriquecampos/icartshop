import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator,createAppContainer } from 'react-navigation'
import Login from './containers/Login'
import HomeScreen from './containers/HomeScreen'
import ShopScreen from './containers/ShopScreen'
// import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'
class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Login: Login,
    Home: HomeScreen,
    Shop: ShopScreen,
    // Books: BooksScreen,
    Cart: CartScreen,
}, {
    initialRouteName: 'Login'
})



 const ShoppingCart1 = createAppContainer(AppStackNavigator);

export default ShoppingCart1;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});