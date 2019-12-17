import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import AdminHomeScreen from './AdminHomeScreen'
import AddProduct from './AddProduct'
import SideMenuContent from './../components/SideMenuContent'
import Icon from '@expo/vector-icons/Ionicons'

export default createDrawerNavigator({
    StackAdminHomeScreen: {
        screen: (
            createStackNavigator({
                AdminHomeScreen: {
                    screen: AdminHomeScreen
                }
            }, {
                defaultNavigationOptions: ({ navigation }) => {
                    return {
                        headerTitle: 'Produtos',
                        headerLeft: (
                            <Icon style = {{ paddingLeft: 20 }}
                                onPress = {() => navigation.openDrawer()}
                                name = "md-menu" size = {30}/>
                        )
                    }
                }
            })
        ),
        navigationOptions: { title: 'Produtos' },
    },
    StackAddProduct: {
        screen: (
            createStackNavigator({
                AddProduct: {
                    screen: AddProduct
                }
            }, {
                defaultNavigationOptions: ({ navigation }) => {
                    return {
                        headerTitle: 'Adicionar produto',
                        headerLeft: (
                            <Icon style = {{ paddingLeft: 20 }}
                                onPress = {() => navigation.openDrawer()}
                                name = "md-menu" size = {30}/>
                        )
                    }
                }
            })
        ),
        navigationOptions: { title: 'Adicionar produto' },
    },
}, { 
    drawerWidth: 260,
    contentComponent: SideMenuContent
})