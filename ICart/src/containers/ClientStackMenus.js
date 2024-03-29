import React, { Component } from "react"
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from '@expo/vector-icons/Ionicons'
// import { connect } from 'react-redux'

import ShopScreen from './ShopScreen'
import CartScreen from './CartScreen'

import ShoppingCartIcon from '../components/ShoppingCartIcon'
import ShopButton from '../components/ShopButton'

export const ShopStackMenu = createStackNavigator (
    {
        ShopScreen: {
            screen: ({ navigation }) => <ShopScreen prodsType = {navigation.dangerouslyGetParent().state.params.type}/>
        }
    }, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerTitle: navigation.dangerouslyGetParent().state.params.title,
                headerLeft: (
                    <Icon style = {{ paddingLeft: 20 }}
                        onPress = {() => navigation.openDrawer()}
                        name = "md-menu" size = {30}/>
                ),
                headerRight: (
                    <View style = {{ paddingRight: 10 }}>
                        <ShoppingCartIcon navigation = {navigation} />
                    </View>
                )
            }
        }
    }
)

export const CartStackMenu = createStackNavigator (
    {
        CartScreen: {
            screen: CartScreen
        }
    }, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Carrinho',
                headerLeft: (
                    <Icon style = {{ paddingLeft: 20 }}
                        onPress = {() => navigation.openDrawer()}
                        name = "md-menu" size = {30}/>
                ),
                headerRight: (
                    <View style={{ padding: 5 }}>
                        <ShopButton />
                    </View>
                ),
            }
        }
    }
)