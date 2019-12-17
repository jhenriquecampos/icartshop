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
import { getUsers } from '../store/actions/user'
// import { user } from '../Data'

class Login extends Component {

    state = {
        email: '',
        name: '',
        password: '',
        type: '',
    }

    signUp = () => {
        this.cleanState()
        this.props.navigation.navigate('SignUp')
    }

    componentDidMount = () => {
        this.props.onGetUsers()
    }

    login = () => {
        let flag = false
        let name
        let type
        console.log(this.props.users)
        this.props.users.forEach(element => {
            if (element.email == this.state.email && element.password == this.state.password) {
                name = element.name
                type = element.type
                flag = true
            }
        })
        if (flag) {
            this.setState({name: name, type: type}, () => {
                this.props.onLogin({ ...this.state })
                if(this.state.type == 2) {
                    this.props.navigation.navigate('ClientSideMenu')
                } else {
                    this.props.navigation.navigate('AdminSideMenu')
                }
            })
        } else {
            let msg = 'E-mail ou senha incorretos!';
            if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.LONG);
            } else {
                Alert.alert('Login', msg);
            }
        }
    }

    cleanState = () => {
        this.setState({
            email: '',
            name: '',
            password: '',
            type: '',
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
                    <Text style = {styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('SignUp')}
                    style = {{ marginTop: 20 }}>
                    <Text style = {{ color: '#fff', fontWeight: 'bold' }}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users: users.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user)),
        onGetUsers: () => dispatch(getUsers())
    }
}

// export default Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)