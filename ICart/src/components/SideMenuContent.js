import React, { Component } from "react"
import { Image, ScrollView, Text, TouchableOpacity } from "react-native"
import { DrawerItems, SafeAreaView } from "react-navigation"

import { connect } from "react-redux"

import { logout } from "./../store/actions/user"

class SideMenuContent extends Component {

    logout = () => {
        this.props.onLogout
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
                <TouchableOpacity onPress={this.logout}>
                    <Text style={{marginLeft: 16, marginTop: 11,fontWeight: 'bold',color: 'red'}}>Sair</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout)
    }
}

export default connect(null, mapDispatchToProps)(SideMenuContent)