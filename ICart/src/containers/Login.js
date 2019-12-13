import React, { Component } from "react";
import {Platform, ToastAndroid, Alert } from "react-native";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import styles from '../styles/index'
import { user } from '../Data'

class Login extends Component {

    static navigationOptions = {
        headerTitle: 'Login'
    }

    state = {
        email: '',
        name: '',
        password: ''
    }

    login = () => {
        if (this.validateEmail()) {
            this.props.onLogin({ ...this.state })
            this.cleanState()
            this.props.navigation.navigate('ClientSideMenu')
        } else {
            let msg = "Usuário ou senha incorretos!";
            if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.LONG);
            } else {
                Alert.alert("Login", msg);
            }
        }
    }

    validateEmail = () => {
        let flag = false
        user.forEach(element => {
            if (element.email == this.state.email && element.password == this.state.password) {
                this.setState({ name: element.name })
                flag = true
            }
        })
        return flag
    }

    cleanState = () => {
        this.setState({
            email: '',
            name: '',
            password: ''
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                <Image 
                    source = {require('../assets/menu.png')}
                    style = {styles.logo}/>
                <TextInput 
                    style = {styles.input} keyboardType = 'email-address'
                    value = {this.state.email} onChangeText = {email => this.setState({ email })}
                    placeholder="Digite seu e-mail"/>
                <TextInput
                    style = {styles.input}
                    secureTextEntry={true}
                    value = {this.state.password}
                    onChangeText = {password => this.setState({ password })}
                    placeholder="Digite sua senha"/>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {this.login}>
                    <Text style = {styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

// export default Login
export default connect(null, mapDispatchToProps)(Login)